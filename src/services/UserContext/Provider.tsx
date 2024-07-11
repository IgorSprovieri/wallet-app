import { useState } from "react";
import { UserContext } from ".";
import { StorageUser } from "../storage";

type Props = {
  children: React.ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<StorageUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
