import defaultProvider from "./defaultProvider";
import { Contract } from "ethers";

export const primitives = new Contract(
    process.env.primitivesAddress,
    process.env.abi,
    defaultProvider
);