import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "120px auto",
      width: "500px",
    }}>
      <h1>NFT Staking Dapp Built at Movementlabs Benin Buildathon</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}