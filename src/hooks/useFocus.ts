// From https://stackoverflow.com/questions/28889826/how-to-set-focus-on-an-input-field-after-rendering
// (ts https://gist.github.com/carpben/de968e377cbac0ffbdefe1ab56237573)

import * as React from "react";

export default function useFocus<T extends HTMLElement = HTMLElement>() {
  const ref = React.useRef<T>(null);
  const setFocus = () => ref?.current?.focus?.();

  return [ref, setFocus] as const;
}
