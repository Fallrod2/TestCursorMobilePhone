"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Point = { x: number; y: number };

const GRID_COLS = 20;
const GRID_ROWS = 20;
const TICK_MS = 110;

function getRandomCell(exclude: Point[]): Point {
	while (true) {
		const candidate: Point = {
			x: Math.floor(Math.random() * GRID_COLS),
			y: Math.floor(Math.random() * GRID_ROWS),
		};
		if (!exclude.some((p) => p.x === candidate.x && p.y === candidate.y)) {
			return candidate;
		}
	}
}

function clampToSquareSize(max: number): number {
	// Return the largest multiple of GRID_COLS that fits within max
	const cell = Math.floor(max / GRID_COLS);
	return Math.max(8, cell) * GRID_COLS;
}

export default function SnakeGame() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [snake, setSnake] = useState<Point[]>([{ x: 8, y: 10 }, { x: 9, y: 10 }, { x: 10, y: 10 }]);
	const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
	const [food, setFood] = useState<Point>(() => getRandomCell([{ x: 10, y: 10 }]));
	const [score, setScore] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [gameOver, setGameOver] = useState<boolean>(false);

	const [canvasSize, setCanvasSize] = useState<number>(
		typeof window !== "undefined" ? clampToSquareSize(Math.min(window.innerWidth - 24, 520)) : 360
	);

	const cellSize = useMemo(() => Math.floor(canvasSize / GRID_COLS), [canvasSize]);

	useEffect(() => {
		function onResize() {
			const size = clampToSquareSize(Math.min(window.innerWidth - 24, 520));
			setCanvasSize(size);
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const reset = useCallback(() => {
		setSnake([{ x: 8, y: 10 }, { x: 9, y: 10 }, { x: 10, y: 10 }]);
		setDir({ x: 1, y: 0 });
		setFood(getRandomCell([{ x: 10, y: 10 }]));
		setScore(0);
		setGameOver(false);
		setIsRunning(true);
	}, []);

	// Input: keyboard (desktop) and swipe/buttons (mobile)
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "ArrowUp" && dir.y !== 1) setDir({ x: 0, y: -1 });
			if (e.key === "ArrowDown" && dir.y !== -1) setDir({ x: 0, y: 1 });
			if (e.key === "ArrowLeft" && dir.x !== 1) setDir({ x: -1, y: 0 });
			if (e.key === "ArrowRight" && dir.x !== -1) setDir({ x: 1, y: 0 });
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [dir.x, dir.y]);

	// Touch swipe
	useEffect(() => {
		let startX = 0;
		let startY = 0;
		function onTouchStart(e: TouchEvent) {
			const t = e.touches[0];
			startX = t.clientX;
			startY = t.clientY;
		}
		function onTouchMove(e: TouchEvent) {
			if (!startX && !startY) return;
			const t = e.touches[0];
			const dx = t.clientX - startX;
			const dy = t.clientY - startY;
			const absX = Math.abs(dx);
			const absY = Math.abs(dy);
			if (absX < 24 && absY < 24) return;
			if (absX > absY) {
				if (dx > 0 && dir.x !== -1) setDir({ x: 1, y: 0 });
				else if (dx < 0 && dir.x !== 1) setDir({ x: -1, y: 0 });
			} else {
				if (dy > 0 && dir.y !== -1) setDir({ x: 0, y: 1 });
				else if (dy < 0 && dir.y !== 1) setDir({ x: 0, y: -1 });
			}
			startX = 0;
			startY = 0;
		}
		document.addEventListener("touchstart", onTouchStart, { passive: true });
		document.addEventListener("touchmove", onTouchMove, { passive: true });
		return () => {
			document.removeEventListener("touchstart", onTouchStart);
			document.removeEventListener("touchmove", onTouchMove);
		};
	}, [dir.x, dir.y]);

	// Game loop
	useEffect(() => {
		if (!isRunning || gameOver) return;
		const id = setInterval(() => {
			setSnake((prev) => {
				const nextHead = { x: prev[prev.length - 1].x + dir.x, y: prev[prev.length - 1].y + dir.y };
				// Wrap around edges for fun mobile play
				nextHead.x = (nextHead.x + GRID_COLS) % GRID_COLS;
				nextHead.y = (nextHead.y + GRID_ROWS) % GRID_ROWS;

				const body = prev.slice(1);
				const hitSelf = body.some((p) => p.x === nextHead.x && p.y === nextHead.y);
				if (hitSelf) {
					setGameOver(true);
					setIsRunning(false);
					return prev;
				}

				let grew = false;
				if (nextHead.x === food.x && nextHead.y === food.y) {
					setFood(getRandomCell([...prev, nextHead]));
					setScore((s) => s + 1);
					grew = true;
				}

				const next = grew ? [...prev, nextHead] : [...prev.slice(1), nextHead];
				return next;
			});
		}, TICK_MS);
		return () => clearInterval(id);
	}, [dir.x, dir.y, isRunning, gameOver, food.x, food.y]);

	// Draw
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Board
		ctx.fillStyle = "#0f172a";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Grid light
		ctx.strokeStyle = "rgba(255,255,255,0.06)";
		for (let x = 0; x <= GRID_COLS; x++) {
			ctx.beginPath();
			ctx.moveTo(x * cellSize + 0.5, 0);
			ctx.lineTo(x * cellSize + 0.5, canvas.height);
			ctx.stroke();
		}
		for (let y = 0; y <= GRID_ROWS; y++) {
			ctx.beginPath();
			ctx.moveTo(0, y * cellSize + 0.5);
			ctx.lineTo(canvas.width, y * cellSize + 0.5);
			ctx.stroke();
		}

		// Food
		ctx.fillStyle = "#e11d48";
		ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

		// Snake
		for (let i = 0; i < snake.length; i++) {
			const part = snake[i];
			const isHead = i === snake.length - 1;
			ctx.fillStyle = isHead ? "#22c55e" : "#16a34a";
			ctx.fillRect(part.x * cellSize, part.y * cellSize, cellSize, cellSize);
		}
	}, [snake, food, canvasSize, cellSize]);

	const onPress = useCallback(
		(direction: "up" | "down" | "left" | "right") => () => {
			if (direction === "up" && dir.y !== 1) setDir({ x: 0, y: -1 });
			if (direction === "down" && dir.y !== -1) setDir({ x: 0, y: 1 });
			if (direction === "left" && dir.x !== 1) setDir({ x: -1, y: 0 });
			if (direction === "right" && dir.x !== -1) setDir({ x: 1, y: 0 });
		},
		[dir.x, dir.y]
	);

	return (
		<div className="flex flex-col items-center gap-4 w-full">
			<div className="flex items-center justify-between w-full max-w-[540px]">
				<div className="text-sm opacity-80">Score: <span className="font-semibold">{score}</span></div>
				<div className="flex gap-2">
					{!isRunning && !gameOver && (
						<button className="rounded bg-foreground text-background px-3 py-1 text-sm" onClick={() => setIsRunning(true)}>Start</button>
					)}
					{gameOver && (
						<button className="rounded bg-foreground text-background px-3 py-1 text-sm" onClick={reset}>Restart</button>
					)}
				</div>
			</div>
			<canvas
				ref={canvasRef}
				width={cellSize * GRID_COLS}
				height={cellSize * GRID_ROWS}
				className="rounded-lg shadow-md border border-black/[.08] dark:border-white/[.145]"
			/>
			<div className="grid grid-cols-3 gap-3 select-none touch-manipulation">
				<div />
				<button aria-label="Up" onClick={onPress("up")} className="rounded-full h-14 w-14 bg-black/[.06] dark:bg-white/[.08] active:scale-[0.97]">▲</button>
				<div />
				<button aria-label="Left" onClick={onPress("left")} className="rounded-full h-14 w-14 bg-black/[.06] dark:bg-white/[.08] active:scale-[0.97]">◀</button>
				<div />
				<button aria-label="Right" onClick={onPress("right")} className="rounded-full h-14 w-14 bg-black/[.06] dark:bg-white/[.08] active:scale-[0.97]">▶</button>
				<div />
				<button aria-label="Down" onClick={onPress("down")} className="rounded-full h-14 w-14 bg-black/[.06] dark:bg-white/[.08] active:scale-[0.97]">▼</button>
				<div />
			</div>
			<p className="text-xs opacity-70 text-center max-w-[540px]">Tip: Swipe anywhere or use the on-screen controls. The snake wraps around edges.</p>
		</div>
	);
}

