import Link from "next/link";

const index = () => {
    return (
        <ul>
            <li>
                <Link href="provider_and_signer">ProviderAndSigner</Link>
            </li>
            <li>
                <Link href="primitives">Primitives</Link>
            </li>
        </ul>
    );
}
 
export default index;