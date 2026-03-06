
import { ethers } from "ethers"

const CONTRACT_ADDRESS = "0xd5B803bD5444A35A9f5d795C10a2dd95DabBe291"


const ABI = [
  {"abi":[{"type":"function","name":"campaigns","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"title","type":"string","internalType":"string"},{"name":"description","type":"string","internalType":"string"},{"name":"target","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"amountCollected","type":"uint256","internalType":"uint256"},{"name":"image","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"createCampaign","inputs":[{"name":"_owner","type":"address","internalType":"address"},{"name":"_description","type":"string","internalType":"string"},{"name":"_target","type":"uint256","internalType":"uint256"},{"name":"_deadline","type":"uint256","internalType":"uint256"},{"name":"_image","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"donateToCampaign","inputs":[{"name":"_id","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"getCampaigns","inputs":[],"outputs":[{"name":"","type":"tuple[]","internalType":"struct Crowdfunding.Campaign[]","components":[{"name":"owner","type":"address","internalType":"address"},{"name":"title","type":"string","internalType":"string"},{"name":"description","type":"string","internalType":"string"},{"name":"target","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"amountCollected","type":"uint256","internalType":"uint256"},{"name":"image","type":"string","internalType":"string"},{"name":"donators","type":"address[]","internalType":"address[]"},{"name":"donations","type":"uint256[]","internalType":"uint256[]"}]}],"stateMutability":"view"},{"type":"function","name":"getDonators","inputs":[{"name":"_id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address[]","internalType":"address[]"},{"name":"","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"numberOfCampaigns","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"}]}
]

export async function connectContract() {
  const ethereum = (window as any).ethereum
  
  if (!ethereum) {
    alert("Install MetaMask")
    return
  }
  
   const provider = new ethers.BrowserProvider(ethereum)

  await provider.send("eth_requestAccounts", [])

  const signer = await provider.getSigner()

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    ABI[0].abi,
    signer
  )

  return contract
}