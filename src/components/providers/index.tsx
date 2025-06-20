import { ThemeProvider } from './theme';

type ProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      {children}
    </ThemeProvider>
  );
}
