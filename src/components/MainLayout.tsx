import React from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  children?:
  | React.ReactElement
  | React.ReactElement[];
}

export function MainLayout ({ children }: MainLayoutProps): React.ReactElement<any> {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}