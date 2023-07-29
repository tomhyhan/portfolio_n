"use client"

import React from 'react'
import { Disclosure } from '@headlessui/react'

export default function Collapse({children}: {
    children: React.ReactNode
}) {
  return (
    <div className="my-5">
    <Disclosure >
            {({open}) => (
                <>
                    <Disclosure.Button className="text-gray-600">
                        {open ? 
                        <span>-- hide --</span> : 
                        <span>-- show more --</span>}
                    </Disclosure.Button>
                    <Disclosure.Panel className="">
                        <div>{children}</div>
                    </Disclosure.Panel>
                </>)}
        </Disclosure>
    </div>
  )
}
