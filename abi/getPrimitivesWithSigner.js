import walletProvider from "./walletProvider";
import { primitives } from "./primitives";

export const getPrimitivesWithSigner = async() =>{
    const signer = await walletProvider.getSigner();
    const primitivesWithSigner = primitives.connect(signer);
    // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);
    return primitivesWithSigner;
}