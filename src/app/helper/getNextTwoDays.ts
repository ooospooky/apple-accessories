import { addDays, format } from 'date-fns';

export default function getNextTwoDays() {
  // 使用date-fns的addDays函式來獲取後天的日期
  const nextTwoDays = addDays(new Date(), 2);
  // 使用date-fns的format函式來格式化日期為 '週X YYYY/MM/DD' 的字串
  const formattedDate = format(nextTwoDays, 'iiii yyyy/MM/dd');

  return formattedDate;
}
