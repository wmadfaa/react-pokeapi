export function isNumeric(val: any): val is number {
  return /^\d+$/.test(val);
}
