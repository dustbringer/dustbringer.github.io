export const removeKey = <T>(obj: { [k in string]?: T }, key: string) => {
  const { [key]: _, ...ret } = obj;
  return ret;
};

export const removeKeys = <T>(obj: { [k in string]?: T }, keys: string[]) =>
  keys.reduce((acc, cur) => removeKey(acc, cur), obj);
