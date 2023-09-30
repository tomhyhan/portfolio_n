import Image from 'next/image'
import React from 'react'

export default function PostImage({imagesrc}: {
    imagesrc: string
}) {
  return (
    <div className="my-5 w-full h-[50rem] relative">
        <Image src={imagesrc} fill={true} alt={imagesrc} />
    </div>
  )
}
