import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

export default function Navigation({navLinks} : {navLinks: { name: string, href: string }[], pathname: string}) {
    const pathname = usePathname()
    return (
        <>
            <div className="flex flex-shrink-0 items-center">
                  <Link href={"/"} className="text-white text-2xl">Tom</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {navLinks.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        "rounded-md px-3 py-2 text-sm font-medium"
                        )
                        
                        }
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                    )
                })}
                </div>
            </div>
            <ul className="ml-auto text-white flex flex-shrink-0 items-center ">
                <li className="mr-2">
                    <a href="https://github.com/tomhyhan"
                    target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size="32px" />
                    </a>
                </li>
                <li className="">
                    <a href="https://www.linkedin.com/in/tom-han-802a43200/"
                    target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size="32px" />
                    </a>
                </li>
            </ul>
        </>
        
      )
}