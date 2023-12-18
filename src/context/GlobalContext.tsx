import React from "react";

import type { Alert } from "../components/Alerts";
import type { Heading } from "../pages/markdown.d.ts";

export type HeadingRef = {
  ref: React.RefObject<any> | null;
} & Heading;

export type Store = {
  AlertQueue: [Alert[], React.Dispatch<React.SetStateAction<Alert[]>>];
  showError: (msg: Alert["msg"]) => void;
  showSuccess: (msg: Alert["msg"]) => void;
  MdHeadings: [HeadingRef[], React.Dispatch<React.SetStateAction<HeadingRef[]>>];
  addMdHeading: (
    depth: HeadingRef["depth"],
    ref: HeadingRef["ref"],
    id: HeadingRef["id"],
    value: HeadingRef["value"]
  ) => void;
};

export const GlobalContext = React.createContext<Store>({} as Store);
// From https://stackoverflow.com/questions/63080452/react-createcontextnull-not-allowed-with-typescript

function GlobalProvider({ children }: React.PropsWithChildren) {
  const aq = React.useState<Alert[]>([]);
  const [alertQueue, setAlertQueue] = aq;
  const mdh = React.useState<HeadingRef[]>([]);
  const [mdHeadings, setMdHeadings] = mdh;

  const addMdHeading = (
    depth: HeadingRef["depth"],
    ref: HeadingRef["ref"],
    id: HeadingRef["id"],
    value: HeadingRef["value"]
  ) =>
    setMdHeadings((h) => [
      ...h,
      {
        depth,
        ref,
        id,
        value,
      },
    ]);

  const store = {
    AlertQueue: aq,
    showError: (msg: Alert["msg"]) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "error",
          msg,
        },
      ]);
    },
    showSuccess: (msg: Alert["msg"]) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "success",
          msg,
        },
      ]);
    },
    MdHeadings: mdh,
    addMdHeading,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
}

export const emptyStore = () => {
  return {
    AlertQueue: [[], (a) => {}] as Store["AlertQueue"],
    showError: (msg: Alert["msg"]) => {},
    showSuccess: (msg: Alert["msg"]) => {},
    MdHeadings: [[], (h) => {}] as Store["MdHeadings"],
    addMdHeading: (depth: HeadingRef["depth"], ref: HeadingRef["ref"]) => {},
  };
};

export default GlobalProvider;
