import { Connect } from "@/components/Wagmi/Connect";
import { Account } from "@/components/Wagmi/Account";
import { NetworkSwitcher } from "@/components/Wagmi/NetworkSwitcher";
import { SignMessage } from "@/components/Wagmi/SignMessage";

export default function Home() {
  return (
    <>
      <Connect />
      <Account />
      <NetworkSwitcher />
      <SignMessage />
    </>
  );
}
