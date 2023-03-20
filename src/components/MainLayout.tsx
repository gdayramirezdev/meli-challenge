import React from "react";

interface MainLayoutProps {
  children?:
  | React.ReactElement
  | React.ReactElement[];
}

export function MainLayout ({ children }: MainLayoutProps): React.ReactElement<any> {
  return (
    <main>
      {children}
    </main>
  );
}