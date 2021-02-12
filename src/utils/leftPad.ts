import { isNumeric } from "./type-guards";

export const leftPad = (
  number: number | string,
  targetLength: number
): string => {
  if (!isNumeric(number)) {
    throw new Error(
      `the argument number ${number} must be a valid positive number`
    );
  }
  let output = Math.abs(number).toString();
  while (output.length < Math.abs(targetLength)) {
    output = "0" + output;
  }
  return output;
};
