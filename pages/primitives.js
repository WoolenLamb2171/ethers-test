import { Contract } from "ethers";
import defaultProvider from "../abi/defaultProvider";
import { useEffect, useState } from "react";
import walletProvider from "../abi/walletProvider"

const Primitives = () => {
  const[isTrue, setIsTrue] = useState();
  const [smallUint, setSmallUint] = useState(BigInt(0));
  const [bigUint, setBigUint] = useState(BigInt(0));
  const primitives = new Contract(
    process.env.primitivesAddress,
    process.env.abi,
    defaultProvider
  );

  const getPrimitivesWithSigner = async() =>{
    const signer = await walletProvider.getSigner();
    const primitivesWithSigner = primitives.connect(signer);
    // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);
    return primitivesWithSigner;

  }

  useEffect(() => {
    (async () => {
      try{
        const isTrue = await primitives.isTrue();
        console.log("isTrue: ", isTrue);
        setIsTrue(isTrue);

        const smallUint = await primitives.smallUint();
        console.log("smallUint: ", typeof smallUint);
        setSmallUint(smallUint);

        const bigUint = await primitives.bigUint();
        console.log("bigUint: ", bigUint);
        setBigUint(bigUint);

      } catch(error){
        console.error(error);
      }
    })();
  });

  const handleSetTrue = async(isTrue) =>{
    try{
      const primitivesWithSigner = await getPrimitivesWithSigner();
      const tx = await primitivesWithSigner.setTrue(isTrue);
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log(response);
    } catch(error){
      console.error(error);
    }
  }

  return <div>
      <h1>Primitives</h1>
      <h3>Bool: {isTrue ? "true" : "false"}</h3>
      <button onClick={() => handleSetTrue(true)}>setTrue</button>
      <button onClick={() => handleSetTrue(false)}>setFalse</button>
      <h3>SmallUint: {smallUint.toString()}</h3>
      <h3>BigUint: {bigUint.toString()}</h3>
    </div>
};

export default Primitives;