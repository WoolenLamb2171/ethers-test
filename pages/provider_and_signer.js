import { formatEther, parseEther } from "ethers";
import { useEffect, useRef, useState } from "react";
import defaultProvider from "../abi/defaultProvider";
import walletProvider from "../abi/walletProvider";
import { useAppContext } from "../hooks/useAppContext";

const ProviderAndSigner = () => {
    const [maticBalance, setMatichBalance] = useState();
    const {contextState, updateContextState} = useAppContext();
    const currentAccount = contextState?.currentAccount;

    const toRef = useRef();
    const amountRef = useRef();

    const handleConnectWalletClick = async () => {
        const accounts = await walletProvider.send("eth_requestAccounts", []);
        const accountsMM = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [],
        })
        console.log(accounts);
        console.log(maticBalance);
        console.log(accountsMM);
        updateContextState({currentAccount: accounts[0]});
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
            <labe htmlFor="to">To</labe>
            <input ref={toRef} name="to" type="text"  />
            <label htmlFor="amout">Amout of matic</label>
            <input ref={amountRef} type="number" step=".1" name="amout"/>
            <button>Send matic</button>
        </form>

    </div> 
    );
}
 
export default ProviderAndSigner;
