import { authorizeWallet, client, DAppConnection } from "./authorization";

import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useEffect
} from "react";

interface ConnectionContextType {
  connection?: DAppConnection;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const ConnectionContext = createContext<ConnectionContextType>(
  {} as ConnectionContextType
);

// Export the provider as we need to wrap the entire app with it
export function ConnectionProvider({children}: { children: ReactNode; }) {
  const [connection, setConnection] = useState<DAppConnection>();

  // // Check if there is a currently active session
  useEffect(() => {
    authorizeWallet()
      .then((connection) => setConnection(connection))
      .catch((_error) => {})
  }, []);
  
  function connectWallet() {
    authorizeWallet()
      .then((connection) => setConnection(connection))
      .catch((_error) => {})
  }

  function disconnectWallet() {
    client.clearActiveAccount()
    setConnection(undefined)
  }

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      connection,
      connectWallet,
      disconnectWallet
    }),
    [connection]
  );
  
  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <ConnectionContext.Provider value={memoedValue}>{children}</ConnectionContext.Provider>
  );
}

// Let's only export the `useConnectionContext` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useConnectionContext() {
  return useContext(ConnectionContext);
}