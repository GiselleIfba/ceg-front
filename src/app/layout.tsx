'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from './global.style';
import NavBar from '@/components/header/header';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
main{
background-color: ${(props) => props.theme.colors.bg};
position: absolute;
top:75px;
width: 100%;
height: auto;
}
`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});
const poppins =  Poppins({ subsets: ['latin'], weight:['200','400','600']})

export const metadata: Metadata = {
  title: 'Soares Shopping',
  description: 'The Better Shopping For Your Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="utf-8">
      <body className={poppins.className}><QueryClientProvider client={queryClient} contextSharing={true}><ThemeProvider theme={theme}><GlobalStyle /><NavBar />{children}</ThemeProvider></QueryClientProvider></body>
    </html>
  )
}
