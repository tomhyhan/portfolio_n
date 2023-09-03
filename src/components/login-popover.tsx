"use client"
import React from 'react'
import { Popover, Transition  } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut } from 'next-auth/react'

export default function LoginPopover({loginComponent}: {
    loginComponent: React.ReactNode
}) {
  return (
    <Popover className="relative">
    <Popover.Button>{loginComponent}</Popover.Button>

    <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
        <Popover.Panel className="absolute z-10 -translate-x-2/3 bg-white text-slate-700 p-1 mt-1 rounded-xl">
        <div className="flex flex-col">
            <button className="w-24 text-end p-2 hover:bg-slate-200 hover:rounded-xl text-sm"
            onClick={() => signOut()}
            >Sign out</button>
        </div>

        {/* <img src="/solutions.jpg" alt="" /> */}
        </Popover.Panel>
    </Transition>
  </Popover>
  )
}
