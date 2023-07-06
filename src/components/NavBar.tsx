"use client";

import React from 'react'

export default function NavBar(navLinks : {name: string, href: string}[]) {
    return (
        <>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
     
            return (
              <Link
                className={isActive ? 'text-blue' : 'text-black'}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            )
          })}
        </>
      )
