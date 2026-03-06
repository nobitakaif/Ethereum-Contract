import { useEffect } from "react"
import { connectContract } from "./abi"




export default function App() {
  
 
  return <div className="">
    <button onClick={async()=>{
      const contract = await connectContract()
      const tx = await contract?.createCampaign(
        '0x51Da53C99304eE89297b6aee40383eBC1A82a0E5',
        'help for students',
        10000000000000,
        1740000,
        'image-url'
      )
      console.log(await tx.wait())
      console.log("successfull")
    }}> get contract</button>

    <button onClick={async()=>{
      const contract = await connectContract()
      console.log(await contract?.getCampaigns())
    }}>
      getDeails
    </button>
  </div>
}


