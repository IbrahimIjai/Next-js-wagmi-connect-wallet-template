import { createClient, configureChains, mainnet } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import {
  baseGoerli,
  boba,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
} from "wagmi/chains";

const CHAINS = [bscTestnet, mainnet];
// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// Configure chains for connectors to support
const { chains, provider, webSocketProvider } = configureChains(CHAINS, [
  infuraProvider({ apiKey: process.env.INFURA_ID! }), publicProvider(),
]);

export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi demo",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "...",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});
