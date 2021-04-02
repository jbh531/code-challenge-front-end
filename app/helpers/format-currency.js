import { helper } from '@ember/component/helper';

export function formatCurrency([value]) {
  let sign = '$';
  let thousand = 'K';
  let million = 'M';
  let billion = 'B';
  let displayAmount = "0";

  const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  if (value >= 1000000000) {
    displayAmount = formatter.format(value / 1000000000)
    return `${sign}${displayAmount}${billion}`
  } else if (value >= 1000000) {
    displayAmount = formatter.format(value / 1000000)
    return `${sign}${displayAmount}${million}`
  } else if (value >= 1000) {
    displayAmount = formatter.format(value / 1000)
    return `${sign}${displayAmount}${thousand}`
  } else {
    return `${sign}${value}`
  }
}
export default helper(formatCurrency);
