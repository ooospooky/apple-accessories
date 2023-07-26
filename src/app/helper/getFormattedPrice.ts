

export default function getFormattedPrice(price:number) {
  // 使用date-fns的addDays函式來獲取後天的日期
  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });
  return formattedPrice;
}
