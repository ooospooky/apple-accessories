export default function getFormattedPrice(price: number) {
  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });
  return `NT${formattedPrice}`;
}
