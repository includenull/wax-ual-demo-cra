import React from 'react';
import { JsonRpc } from 'eosjs';
import { UALProvider } from 'ual-reactjs-renderer';
import { Anchor } from 'ual-anchor';
import { Wax } from 'ual-wax';
import Main from './Main';

const App = () => {
  const appName = "wax-ual-demo";

  const chains = {
    chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
    rpcEndpoints: [
      {
        protocol: 'https',
        host: 'wax.greymass.com',
        port: 443,
      }
    ],
  }

  const endpoint = `${chains.rpcEndpoints[0].protocol}://${chains.rpcEndpoints[0].host}:${chains.rpcEndpoints[0].port}`;
  const rpc = new JsonRpc(endpoint);

  const anchor = new Anchor([chains], { appName: appName });
  const wcw = new Wax([chains]);

  return (
    <UALProvider
      appName={appName}
      authenticators={[anchor, wcw]}
      chains={[chains]}
    >
      <Main rpc={rpc} />
    </UALProvider>
  );
}

export default App;
