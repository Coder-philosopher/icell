import { useTheme as useThemeContext } from "@/components/ui/theme-provider";

export const useTheme = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
};
