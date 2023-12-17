import React from "react";

import type { Alert } from "../components/Alerts";

export type Heading = {
  text: string;
  depth: number;
  ref: React.RefObject<any> | null;
  id: string;
  value: string;
};

export type Store = {
  AlertQueue: [Alert[], React.Dispatch<React.SetStateAction<Alert[]>>];
  showError: (msg: Alert["msg"]) => void;
  showSuccess: (msg: Alert["msg"]) => void;
  MdHeadings: [Heading[], React.Dispatch<React.SetStateAction<Heading[]>>];
  addMdHeading: (
    text: Heading["text"],
    depth: Heading["depth"],
    ref: Heading["ref"],
    id: Heading["id"],
    value: Heading["value"]
  ) => void;
};

export const GlobalContext = React.createContext<Store>({} as Store);
// From https://stackoverflow.com/questions/63080452/react-createcontextnull-not-allowed-with-typescript

function GlobalProvider({ children }: React.PropsWithChildren) {
  const aq = React.useState<Alert[]>([]);
  const [alertQueue, setAlertQueue] = aq;
  const mdh = React.useState<Heading[]>([]);
  const [mdHeadings, setMdHeadings] = mdh;

  const addMdHeading = (
    text: Heading["text"],
    depth: Heading["depth"],
    ref: Heading["ref"],
    id: Heading["id"],
    value: Heading["value"]
  ) =>
    setMdHeadings((h) => [
      ...h,
      {
        text,
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
    addMdHeading: (
      text: Heading["text"],
      depth: Heading["depth"],
      ref: Heading["ref"]
    ) => {},
  };
};

export default GlobalProvider;
