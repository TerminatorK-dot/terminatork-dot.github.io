
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as Theme || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove("light", "dark");
    
    // Store user preference
    if (theme !== "system") {
      localStorage.setItem("theme", theme);
      root.classList.add(theme);
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    }
  }, [theme]);

  return { theme, setTheme };
}
