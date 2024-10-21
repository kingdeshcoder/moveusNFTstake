import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xBcFA714E3155191004cb2fF1CC62672382F214e9";
const rewardTokenContractAddress = "0x14587015dB86301Ba0468B2e344222363889CFa1";
const stakingContractAddress = "0x878fE5168308A18D12f6ffa0d3a36E553f2b594C";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});