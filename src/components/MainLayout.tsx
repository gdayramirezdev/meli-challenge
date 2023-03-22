import React from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  children?:
  | React.ReactElement
  | React.ReactElement[];
  initialSearch: string;
}

export function MainLayout ({ children, initialSearch }: MainLayoutProps): React.ReactElement<any> {
  return (
    <main>
      <Header initialSearch={initialSearch}/>
      {children}
    </main>
  );
}