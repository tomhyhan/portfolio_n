import React from 'react'

export default function Information({children} : {
    children: React.ReactNode
}) {
  return (
    <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-5">
      <p className="font-bold">Info</p>
      <div className="text-sm">{children}</div>
    </div>
  )
}
