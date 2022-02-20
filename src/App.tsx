import { NetworkType } from '@airgap/beacon-sdk';
import React, { useState } from 'react';
import './App.css';

import { authorizeWallet, DAppConnection } from './authorization';

function hasMessage(value: unknown): value is { message: string } {
  return typeof value === 'object' && value !== null && 'message' in value;
}

function App() {
  const [connection, setConnection] = useState<DAppConnection>();

  const connectWallet = async () => {
    try {
      const connection = await authorizeWallet(NetworkType.HANGZHOUNET);
      setConnection(connection);
    } catch (e) {
      if ((e as any)?.name === 'NotGrantedTempleWalletError') {
        return;
      }

      const outputArg = hasMessage(e) ? e.message : e;
      console.error(e);
      alert(`Error: ${outputArg}`);
    }
  };

  const resetConnection = async () => {
    setConnection(undefined);
  };

  return (
    <div>
      {connection ? (
        <>
          <span>Network: Hangzhounet</span>
          <button onClick={resetConnection}>
            {connection.pkh}
          </button>
        </>
      ) : (
        <>
          <button onClick={connectWallet}>Connect</button>
        </>
      )}
    </div>
  );
}

export default App;