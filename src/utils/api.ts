export const extractSearchParams = <T extends object>(
  url: string,
  match: (obj: any) => boolean
): T => {
  const _url = new URL(url);
  function isType(type: object): type is T {
    return match(type);
  }

  const obj = Object.fromEntries(_url.searchParams);
  if (isType(obj)) {
    return obj;
  }
  throw new Error(`the passed url ${url} doesn't match the selected type`);
};
