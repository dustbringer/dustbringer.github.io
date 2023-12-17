export const removeKey = (obj: { [k in string]?: any }, key: string) => {
  const { [key]: _, ...ret } = obj;
  return ret;
};

export const removeKeys = (obj: { [k in string]?: any }, keys: string[]) =>
  keys.reduce((acc, cur) => removeKey(acc, cur), obj);
