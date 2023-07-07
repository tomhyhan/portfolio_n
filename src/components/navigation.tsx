import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

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
        </>
        
      )
}