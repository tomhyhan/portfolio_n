import { authOptions } from "@/lib/authoption"
import { getServerSession } from "next-auth/next"

import LoginBtn from "./login-btn"
import Image from 'next/image'

export default async function Login() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return <LoginBtn />
    }

    return (
        <div className="bg-slate-800 flex
     items-center text-white py-auto pr-3">
            {session?.user?.image 
            ? <Image src={session?.user?.image} width={35} height={35} alt="User Image" className="rounded-lg"/> 
            : <div>DF</div>
            }
        </div>
    )
}
