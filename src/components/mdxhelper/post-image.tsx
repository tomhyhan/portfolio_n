import Image from 'next/image'
import React from 'react'

export default function PostImage({imagesrc, classAttr}: {
    imagesrc: string,
    classAttr: string
}) {
  return (
    <div className={classAttr}>
        <Image src={imagesrc} fill={true} alt={imagesrc} />
    </div>
  )
}
