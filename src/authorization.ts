import { DAppClient, NetworkType } from "@airgap/beacon-sdk"
import { act } from "react-dom/test-utils"

const appName = "Hermes Dashboard"

export class WalletNotConnectedError extends Error {
    constructor() {
      super('Wallet was not connected');
    }
  }

export interface DAppConnection {
    pkh: string;
    pk: string;
}

const client = new DAppClient({
    name: appName,
    iconUrl: `${process.env.REACT_APP_BASE_URL}/favicon.ico`
  })

export const authorizeWallet = async (newtwork: NetworkType = NetworkType.HANGZHOUNET): Promise<DAppConnection> => {
    
    var activeAccount = await client.getActiveAccount()
    if (!activeAccount) {

        await client.requestPermissions( { network: { type: newtwork }} )
            .catch((error) => {
                console.log('error during permission request', error)
            }
        )
        activeAccount = await client.getActiveAccount()
    }
    if (!activeAccount) {
        throw new WalletNotConnectedError();
    }

    const res = activeAccount;
    console.log(res.address)
    return { pkh: res.address, pk: res.publicKey }
};