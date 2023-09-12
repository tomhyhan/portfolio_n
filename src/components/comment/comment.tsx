import { CommentBody, CommentWithReplies } from '@/lib/Type'
import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react'
import CommentForm from './comment-form';
import CommentDetail from './comment-body';

export default function Comment({comments,slug,postComment,margin}: {
    comments: CommentWithReplies[],
    slug: string,
    postComment: (body: CommentBody) => any,
    margin: number
}) {
    const marginText = `${margin.toString()}px`
  return (
    <>
        {comments.map(commentBlock => (
            <>
                <article key={uuidv4()} className={`text-base bg-white  border-l-2 border-l-slate-200 pl-2 mb-5`}
                    style={{marginLeft: marginText}}
                    >
                    <CommentDetail comment={commentBlock.comment} />
                    <Disclosure>
                        <div className="flex items-center mt-4 space-x-4 mx-5">
                            <Disclosure.Button className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                            Reply
                            </Disclosure.Button>
                        </div>
                        <Disclosure.Panel className=" ml-5">
                            <CommentForm slug={slug} postComment={postComment}
                            parentId={commentBlock.comment.pk.S}/>
                        </Disclosure.Panel>
                    </Disclosure>
                </article>
                <Comment slug={slug} comments={commentBlock.replies} postComment={postComment} margin={margin + 30}></Comment>
            </>
        ))}
    </>
    )
}
