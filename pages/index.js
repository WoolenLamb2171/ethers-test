import { BrowserProvider, formatEther, InfuraProvider, parseEther } from "ethers";
import { useEffect, useRef, useState } from "react";

const index = () => {
    const [maticBalance, setMatichBalance] = useState();
    const [currentAccount, setCurrentAccount] = useState();
    const provider = new InfuraProvider("maticmum");

    const toRef = useRef();
    const amountRef = useRef();

    const handleConnectWalletClick = async () => {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setCurrentAccount(accounts[0]);
        console.log(accounts);
        console.log(maticBalance);
    }
    
    const getBalance = async () =>{
        const balance = await provider.getBalance(currentAccount);
        return formatEther(balance);
    }

    useEffect(()=>{
        (async () => {
            try{
                if(currentAccount){
                    setMatichBalance(await getBalance());
                }
            }
            catch(error){
                console.error(error);
            }
        })()
    }, [currentAccount])

    const handleSendSubbmit = async (event)=>{
        event.preventDefault()
        try{
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to: toRef.current.value, 
                value: parseEther(amountRef.current.value)
            });
            const response = await tx.wait();
            console.log("response: ", response);
            setMatichBalance(await getBalance())
        }
        catch(error){
            console.error(error);
        }
    }
    
    return ( 
    <div>
        <h1>Address: {currentAccount}</h1>
        <h1>balance: {maticBalance}</h1>
        <button onClick={handleConnectWalletClick}>Connect Wallet</button>
        <h1>Send some matic</h1>
        <form onSubmit={handleSendSubbmit}>
            <labe htmlFor="to">To</labe>
            <input ref={toRef} name="to" type="text"  />
            <label htmlFor="amout">Amout of matic</label>
            <input ref={amountRef} type="number" step=".1" name="amout"/>
            <button>Send matic</button>
        </form>

    </div> 
    );
}
 
export default index;