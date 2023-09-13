import { DenamoComment } from '@/lib/Type'
import Image from 'next/image'
import React from 'react'

export default function CommentDetail({comment}:{
    comment: DenamoComment
}) {
    const date = comment.GSI1SK.S.split("T")[0]
  return (
    <>
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <Image width={24} height={24}
                        className="mr-2 w-6 h-6 rounded-full"
                        src={comment.userImage.S}
                        alt="user Image" />
                        {comment.userEmail.S}
                </p>
                <p className="text-sm text-gray-600 ">
                    <time dateTime={date}
                    title={date}>{date}</time>
                </p>
            </div>
        </footer>
        <p className="text-gray-500 mx-5">
            {comment.comment.S}
        </p>
    </>
  )
}
