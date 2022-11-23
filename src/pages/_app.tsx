import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={inter.className}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
