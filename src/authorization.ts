import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
import { MichelCodecPacker, TezosToolkit } from '@taquito/taquito';
import { ReadOnlySigner } from './ReadOnlySigner';

const appName = "Hermes Dashboard"

export const client = new DAppClient({
  name: appName,
  iconUrl: `${process.env.REACT_APP_BASE_URL}/favicon.ico`
})

const michelEncoder = new MichelCodecPacker();

export class WalletNotConnectedError extends Error {
    constructor() {
      super('Wallet was not connected');
    }
}

function rpcURL(network: NetworkType): string {
    switch (network) {
        case NetworkType.HANGZHOUNET:
            return 'https://hangzhounet.smartpy.io'
        default:
            return 'https://mainnet-node.madfish.solutions'
    }
};

export interface DAppConnection {
    address: string;
    pk: string;
    balance: number;
    tezos: TezosToolkit;
    network: NetworkType;
}

export const authorizeWallet = async (network: NetworkType = NetworkType.HANGZHOUNET): Promise<DAppConnection> => {
    
    var activeAccount = await client.getActiveAccount()
    if (!activeAccount) {

        await client.requestPermissions( { network: { type: network }} )
            .catch((error) => {
                console.log('error during permission request', error)
            }
        )
        activeAccount = await client.getActiveAccount()
    }
    if (!activeAccount) {
        throw new WalletNotConnectedError();
    }

    if (!activeAccount.network.type) {
        throw new Error("Please provide network type");
    }
    console.log(activeAccount.address, activeAccount.network.type)

    const tezos = new TezosToolkit(rpcURL(activeAccount.network.type));
    tezos.setPackerProvider(michelEncoder);
    tezos.setSignerProvider(new ReadOnlySigner(activeAccount.address, activeAccount.publicKey));
    
    const wallet_balance = await tezos.tz.getBalance(activeAccount.address)
    const balance = wallet_balance.toNumber() / 1000000
    
    return { address: activeAccount.address, pk: activeAccount.publicKey, balance: balance, tezos, network }
};