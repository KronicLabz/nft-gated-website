import { 
  useAddress,
  useMetamask,
  useContractAddress,
  useClaimNFT, 
  useNetwork,
  useNetworkMismatch,
  useUser,
  useLogin,
} from "@thirdweb-dev/react";

import { ChainId } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";

// replace this with your contract address
const contractAddress = "0xDF9e9D5328eC0217f5Dc60CB28898e8c64EE6447";

export default function Login() {
  const address = useAddress(); // Get the user's address
  const connectWithMetamask = useMetamask(); // Connect with Metamask

  const [, switchNetwork] = useNetwork(); // Switch network
  const networkMismatch = useNetworkMismatch(); // Check if the network is correct

  // const editionDropContract = useContractAddress("0xDF9e9D5328eC0217f5Dc60CB28898e8c64EE6447"); // Get the EditionDrop contract

  // const { mutate: claimNFT, isLoading: isClaiming } = 
  //  useClaimNFT(contractAddress); // Claim NFT

  const login = useLogin(); // Login
  const { user } = useUser(); // Get the user

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <p>Welcome, {address.slice(0,6)}...</p>

          <button
            className={styles.mainButton}
            style={{ width: 256 }}
            onClick={login}
            >
            Login
            </button>
        </>
      ) : (
        <>
          <button
            className={styles.mainButton}
            style={{ width: "fit-content", paddingRight: 16, paddingLeft: 16 }}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </button>
        </>

      )}
      </div>

  );
}
