import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "jc-theme";

/** Header light/dark toggle. Applies the `dark` class on <html> so every section re-themes. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  // Read the stored (or system) preference after hydration to avoid mismatches.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefers =
      stored === "dark" ||
      (stored === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={() => {
        const next = !dark;
        setDark(next);
        window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      }}
      className={`inline-flex items-center justify-center size-10 rounded-full border border-line text-ink transition-all duration-200 hover:border-terra hover:text-terra hover:scale-105 active:scale-95 ${className}`}
    >
      {dark ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
