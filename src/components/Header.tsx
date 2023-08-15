'use client'

import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navigation from './navigation'
import NavigationMobile from './navigation_mobile'
import MobileNavBtn from './mobile_nav_btn'

const navLinks = [
  { name: 'Algos', href: '/algo' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
]
export default function Header() {
  const pathname = usePathname()  
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure as="nav" className="bg-slate-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-50">
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
