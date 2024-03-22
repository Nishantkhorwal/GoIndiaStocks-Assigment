import * as fs from 'fs'
import { NextResponse } from 'next/server'

// export default function handler ( req: NextApiRequest , res:NextApiResponse){
//     fs.readFile("../../DiscussionFourm.json" ,'utf-8',(err,data)=>{
//         console.log('')
//     })
//     res.status(200).json({message: "hello"})
// }
export async function GET() {
    return NextResponse.json({
        hello : "world",
    })
    
}