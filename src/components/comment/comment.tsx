import { CommentList } from '@/lib/Type'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react'
import CommentDetail from './comment-body';

export default function Comment({comments,slug,margin,parentid,commentForm}: {
    comments: CommentList,
    slug: string,
    margin: number,
    parentid: string,
    commentForm: (parentId: string) => JSX.Element
}) {
    const marginText = `${margin.toString()}px`
    if (!(parentid in comments)) {
        return <></>
    }
  return (
    <>
        {comments[parentid].map(comment => (
            <div key={uuidv4()}>
                <article  className={`text-base bg-white  border-l-2 border-l-slate-200 pl-2 mb-5`}
                    style={{marginLeft: marginText}}
                    >
                    <CommentDetail comment={comment} />
                    <Disclosure>
                        <div className="flex items-center mt-4 space-x-4 mx-5">
                            <Disclosure.Button className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                            Reply
                            </Disclosure.Button>
                        </div>
                        <Disclosure.Panel className=" ml-5">
                            {commentForm(comment.pk.S)}
                        </Disclosure.Panel>
                    </Disclosure>
                </article>
                <Comment slug={slug} comments={comments} margin={margin + 30} parentid={comment.pk.S} commentForm={commentForm}></Comment>
            </div>
        ))}
    </>
    )
}
