"use client"
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navigation from './navigation'
import NavigationMobile from './navigation_mobile'
import MobileNavBtn from './mobile_nav_btn'

const navLinks = [
    { name: 'Dev', href: '/dev' },
    { name: 'Algos', href: '/algo' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
]

export default function Navbar() {
    const pathname = usePathname()  

    return (
        <Disclosure as="nav" className="bg-slate-800 w-full ">
        {({ open }) => (
            <>
            <div className="w-full px-2 sm:px-6 lg:px-8 m-0 p-0 ml-2">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <MobileNavBtn open={open}/>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start relative">
                    <Navigation navLinks={navLinks} pathname={pathname}/>
                </div>
                </div>
            </div>

            <NavigationMobile navLinks={navLinks} pathname={pathname}/>
            </>
        )}
        </Disclosure>
    )
}
