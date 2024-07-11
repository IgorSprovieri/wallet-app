import { Dispatch, SetStateAction, createContext } from "react";
import { StorageUser } from "../storage";

type Props =
  | undefined
  | {
      user: StorageUser | undefined;
      setUser: Dispatch<SetStateAction<StorageUser>>;
    };

export const UserContext = createContext<Props>(undefined);
