import React from 'react'

export default function Warning({children} : {
    children: React.ReactNode
}) {
  return (
<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-5">
  <p className="font-bold">Warning</p>
  <div className="text-sm">{children}</div>
</div>
  )
}
