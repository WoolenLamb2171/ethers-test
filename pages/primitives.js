import { useEffect, useRef, useState } from "react";
import { getPrimitivesWithSigner } from "../abi/getPrimitivesWithSigner";
import { primitives } from "../abi/primitives";
import { useAppContext } from "../hooks/useAppContext";
import { hexlify } from "ethers";

const Primitives = () => {
  const[isTrue, setIsTrue] = useState();
  const [smallUint, setSmallUint] = useState(BigInt(0));
  const [bigUint, setBigUint] = useState(BigInt(0));
  const [smallBytes, setSmallBytes] = useState("");
  const [bigBytes, setBigBytes] = useState("");

  const smallUintRef = useRef();
  const bigUintRef = useRef();
  const smallBytesRef = useRef();
  const bigBytesRef = useRef();

  const {contextState, updateContextState} = useAppContext();
  const currentAccount = contextState?.currentAccount;

  useEffect(() => {
    (async () => {
      try{
        const isTrue = await primitives.isTrue();
        // console.log("isTrue: ", isTrue);
        setIsTrue(isTrue);

        const smallUint = await primitives.smallUint();
        // console.log("smallUint: ", typeof smallUint);
        setSmallUint(smallUint);

        const bigUint = await primitives.bigUint();
        // console.log("bigUint: ", bigUint);
        setBigUint(bigUint);

        const smallBytes = await primitives.smallBytes();
        console.log("smallBytes: ", smallBytes);
        console.log("smallBytes type: ", typeof smallBytes);
        setSmallBytes(smallBytes);

        const bigBytes = await primitives.bigBytes();
        console.log("bigBytes: ", bigBytes);
        console.log("bigBytes type: ", typeof bigBytes);
        setBigBytes(bigBytes);

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

  const handleNewSmallBytesSubmit = async (event) =>{
    event.preventDefault();

    const utf8Encode = new TextEncoder();
    //конвертируем строку в массив байтов
    const bytesArr = utf8Encode.encode(smallBytesRef.current.value);
    console.log("bytesArr: ",bytesArr);
    const bytes = hexlify(bytesArr);
    console.log("bytes: ", bytes);

    try{
      const primitivesWithSigner = await getPrimitivesWithSigner();
      const tx = await primitivesWithSigner.setSmallBytes(bytes);
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log("response: ", response);
    }catch(error){
      console.error(error)
    }
  }

  const handleNewBigBytesSubmit = async (event) => {
    event.preventDefault();

    const utf8Encode = new TextEncoder();
    //конвертируем строку в массив байтов
    const bytesArr = utf8Encode.encode(bigBytesRef.current.value);
    console.log("bytesArr: ",bytesArr);
    const bytes = hexlify(bytesArr);
    console.log("bytes: ", bytes);

    try{
      const primitivesWithSigner = await getPrimitivesWithSigner();
      const tx = await primitivesWithSigner.setBigBytes(bytes);
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log("response: ", response);
    }catch(error){
      console.error(error);
    }
  }

  return <div>
      <h1>Primitives</h1>

      <h2>Address: {currentAccount}</h2>

      <h3>Bool: {isTrue ? "true" : "false"}</h3>

      <button onClick={() => handleSetTrue(true)}>setTrue</button>

      <button onClick={() => handleSetTrue(false)}>setFalse</button>

      <h3>SmallUint: {smallUint.toString()}</h3>

      <form onSubmit={handleNewSmallUintSubmit}>
        <label htmlFor="SmallUint">New small uint:</label>
        {/* uint8 can not be greater than 255 */}
        <input name="SmallUint" ref={smallUintRef} type="number" min={0} max={255}></input>
        <button>Set new small uint</button>
      </form>

      <h3>BigUint: {bigUint.toString()}</h3>

      <form onSubmit={handleNewBigUintSubmit}>
        <label htmlFor="BigUint">New big uint:</label>
        <input name="BigUint" ref={bigUintRef} type="text"></input>
        <button>Set new big uint</button>
      </form>

      <h3>SmallBytes: {smallBytes}</h3>

      <form onSubmit={handleNewSmallBytesSubmit}>
        <label htmlFor="SmallBytes">New small bytes:</label>
        <input name="SmallBytes" type="text" ref={smallBytesRef}></input>
        <button>Set new small bytes</button>
      </form>

      <h3>BigBytes: {bigBytes}</h3>

      <form onSubmit={handleNewBigBytesSubmit}>
        <label htmlFor="BigBytes">New big bytes:</label>
        <input name="BigBytes" ref={bigBytesRef} type="teaxt"></input>
        <button>Set new big bytes</button>
      </form>
    </div>
};

export default Primitives;