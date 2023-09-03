import { authOptions } from "@/lib/authoption"
import { getServerSession } from "next-auth/next"
import { FaUserCircle } from "react-icons/fa";

import LoginBtn from "./login-btn"
import Image from 'next/image'
import LoginPopover from './login-popover';

export default async function Login() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return <LoginBtn />
    }
    
    const component = session?.user?.image ? <Image src={session?.user?.image} width={35} height={35} alt="User Image" className="rounded-lg cursor-pointer"/> : <FaUserCircle size="32px" className="cursor-pointer text-indigo-400" />

    return (
        <div className="bg-slate-800 flex
     items-center text-white pr-5 pt-1">
            <LoginPopover loginComponent={component}/>
        </div>
    )
}
