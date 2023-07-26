import { formatEther, parseEther } from "ethers";
import { useEffect, useRef, useState } from "react";
import defaultProvider from "../abi/defaultProvider";
import walletProvider from "../abi/walletProvider";
import { useAppContext } from "../hooks/useAppContext";
import connectMetaMask from "../utils/connectMetaMask";

const ProviderAndSigner = () => {
    const [maticBalance, setMatichBalance] = useState();
    const {contextState, updateContextState} = useAppContext();
    const currentAccount = contextState?.currentAccount;

    const toRef = useRef();
    const amountRef = useRef();

    const handleConnectWalletClick = async () => {
        // const accounts = await walletProvider.send("eth_requestAccounts", []);
        const accountMM = await connectMetaMask();
        // console.log(accounts);
        console.log(maticBalance);
        // console.log(accountsMM);
        updateContextState({currentAccount: accountMM});
    }
    
    const getBalance = async () =>{
        const balance = await defaultProvider.getBalance(currentAccount);
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
            const signer = await walletProvider.getSigner();
            const tx = await signer.sendTransaction({
                //указываем адрес получателя
                to: toRef.current.value, 
                //указываем количество денег, которые переводим
                value: parseEther(amountRef.current.value)
            });
            const response = await tx.wait();
            console.log("transaction complited");
            console.log("response: ", response);
            console.log("hash: ", tx.hash);
            setMatichBalance(await getBalance());
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
            <label htmlFor="to">To</label>
            <input ref={toRef} name="to" type="text"  />
            <label htmlFor="amout">Amout of matic</label>
            <input ref={amountRef} type="number" step=".1" name="amout"/>
            <button>Send matic</button>
        </form>

    </div> 
    );
}
 
export default ProviderAndSigner;
