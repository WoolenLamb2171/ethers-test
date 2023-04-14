import { formatEther, InfuraProvider } from "ethers";
import { useEffect, useState } from "react";

const index = () => {
    const [ethBalance, setEthhBalance] = useState();
    const provider = new InfuraProvider("maticmum");
    
    const getBalance = async () =>{
        const balance = await provider.getBalance(
            "0x9559CDD39b8Fc8fE166475f4c88e96f07C4Af2c5"
        );
        
        return formatEther(balance);
    }

    useEffect(()=>{
        getBalance()
        .then(balance => {
            setEthhBalance(balance)
            console.log(balance)
        })
        .catch(error => console.error(error))
    }, [])
    
    return ( <h1>balance: {ethBalance}</h1> );
}
 
export default index;