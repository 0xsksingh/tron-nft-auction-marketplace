import type { AppProps } from "next/app";
import { Chain, ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {


  const bttcchain : Chain = {
    id: 1029,
    name: "BitTorrent Chain Donau",
    nativeCurrency: {
      name: "BTT",
      symbol: "BTT",
      decimals: 18
    },
    rpcUrls: ["https://pre-rpc.bt.io/"],
    testnet: true,
  }
  return (
    <ThirdwebProvider
      activeChain={{
        ...bttcchain,
        chainId: bttcchain.id,
        nativeCurrency: bttcchain.nativeCurrency!,
        testnet: bttcchain.testnet!,
        // Add any missing required properties
        chain: "bttc",
        rpc: ["https://pre-rpc.bt.io/"],
        shortName: "bttc",
        slug: "bittorrent-chain",
      }}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
