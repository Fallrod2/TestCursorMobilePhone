export function formatPrice(
  amountInCents: number,
  currency: string = "EUR",
  locale: string = "fr-FR"
): string {
  const amount = amountInCents / 100;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

