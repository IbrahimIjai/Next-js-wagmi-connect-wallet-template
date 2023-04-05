import { useAccount, useEnsName } from "wagmi";

export function Account() {
  const { address, isConnecting, isDisconnected } = useAccount();
  //   const { data: accountData } = useAccount();
  const { data, isError, isLoading } = useEnsName({ address: address });

  return (
    <div>
      {isLoading ? (
        <div>Fetching name…</div>
      ) : (
        isError && <div>Error fetching name</div>
      )}
      {isConnecting ? (
        <div>Connecting…</div>
      ) : isDisconnected ? (
        <div>Disconnected</div>
      ) : (
        <div>{address}</div>
      )}
    </div>
  );
}
