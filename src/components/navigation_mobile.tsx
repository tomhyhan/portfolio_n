import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export default function NavigationMobile({navLinks, pathname} : {navLinks: { name: string, href: string }[], pathname: string}) {
  return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={clsx(
                      isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white ',
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
)
}
