import { Contract } from "ethers";
import defaultProvider from "../abi/defaultProvider";
import { useEffect } from "react";

const Primitives = () => {
  const abi = process.env.abi;
  const primitives = new Contract(
    process.env.primitivesAddress,
    abi,
    defaultProvider
  );

  useEffect(() => {
    (async () => {
      const isTrue = await primitives.isTrue();
      console.log("isTrue: ", isTrue);
    })();
  });

  return <h1>Primitives</h1>;
};

export default Primitives;
