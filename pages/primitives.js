import { Contract } from "ethers";
import defaultProvider from "../abi/defaultProvider";
import { useEffect, useRef, useState } from "react";
import walletProvider from "../abi/walletProvider"

const Primitives = () => {
  const[isTrue, setIsTrue] = useState();
  const [smallUint, setSmallUint] = useState(BigInt(0));
  const [bigUint, setBigUint] = useState(BigInt(0));

  const smallUintRef = useRef();
  const bigUintRef = useRef();

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

  const handleNewSmallUintSubmit = async (event) =>{
    event.preventDefault();
    try{
      const primitivesWithSigner = await getPrimitivesWithSigner();
      const tx = await primitivesWithSigner.setSmallUint(
        BigInt(
          smallUintRef.current.value
        )
      );
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log(response);
    } catch(error){
      console.error(error);
    }
  }

  const handleNewBigUintSubmit =  async (event) =>{
    event.preventDefault();
    try{
      const primitivesWithSigner = await getPrimitivesWithSigner();
      const tx = await primitivesWithSigner.setBiglUint(
        BigInt(
          bigUintRef.current.value
        )
      )
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log(response);
    }catch(error){
      console.error(error);
    }
  }

  return <div>
      <h1>Primitives</h1>

      <h3>Bool: {isTrue ? "true" : "false"}</h3>

      <button onClick={() => handleSetTrue(true)}>setTrue</button>

      <button onClick={() => handleSetTrue(false)}>setFalse</button>

      <form onSubmit={handleNewSmallUintSubmit}>
        <label htmlFor="SmallUint">New small uint:</label>
        {/* uint8 can not be greater than 255 */}
        <input name="SmallUint" ref={smallUintRef} type="number" min={0} max={255}></input>
        <button>Set new small uint</button>
      </form>

      <h3>SmallUint: {smallUint.toString()}</h3>

      <form onSubmit={handleNewBigUintSubmit}>
        <label htmlFor="BigUint">New big uint:</label>
        <input name="BigUint" ref={bigUintRef} type="text"></input>
        <button>Set new big uint</button>
      </form>

      <h3>BigUint: {bigUint.toString()}</h3>
    </div>
};

export default Primitives;