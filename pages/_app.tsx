
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { client } from "@/utils/wagmi/wagmiContex";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
