import localFont from 'next/font/local'
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import DirProvider from '@/components/direction-provider';
import { Toaster } from "@/components/ui/toaster"

const Estedad = localFont({ src: '../fonts/Estedad-FD[KSHD,wght].ttf' })

export const metadata = {
  title: {
    template: '%s | لگد',
    default: 'لگد',
  },
  description: "دنیایی از احتمالات",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <DirProvider dir="rtl">
      <html lang="fa" dir="rtl" suppressHydrationWarning={true}>
        <body className={`${Estedad.className} relative overflow-x-hidden`} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </DirProvider>
  );
}
