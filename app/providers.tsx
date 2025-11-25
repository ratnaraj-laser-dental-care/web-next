"use client";

import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <IconContext.Provider
        value={{ color: "yellow", className: "global-class-name" }}
      >
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
}
