import localFont from 'next/font/local'
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header/header';
import DirProvider from '@/components/direction-provider';

const Estedad = localFont({ src: '../fonts/Estedad-FD[KSHD,wght].ttf' })

export const metadata = {
  title: "لگد",
  description: "دنیایی از احتمالات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning={true}>
      <body className={`${Estedad.className} relative overflow-x-hidden`} suppressHydrationWarning={true}>
        <DirProvider dir="rtl">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </DirProvider>
      </body>
    </html>
  );
}
