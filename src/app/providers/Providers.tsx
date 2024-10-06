'use client';

import { UserProvider } from "../contexts/userContext";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {

  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}
