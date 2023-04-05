import { useConnect, useDisconnect, useAccount } from "wagmi";

export function Connect() {


  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  // console.log(connectors);
  
  const { disconnect } = useDisconnect();

  return (
    <div>
      <div>
        {activeConnector && (
          <button onClick={() => disconnect()}>
            Disconnect from {activeConnector.name}
          </button>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== activeConnector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => {console.log(x);
              connect( {connector: x} ); }}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && " (connecting)"}
            </button>
          ))}
      </div>

      {error && <div>{error.message}</div>}
    </div>
  );
}
