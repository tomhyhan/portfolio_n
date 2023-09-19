import { CommentController } from '@/lib/Type'
import React, { memo, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react'
import CommentDetail from './comment-body';
import DeletedComment from './comment-delete';


export default function Comment({commentController,slug,margin,parentid,commentForm}: {
    commentController: CommentController
    slug: string,
    margin: number,
    parentid: string,
    commentForm: (parentId: string) => JSX.Element
}) {
    const marginText = `${margin.toString()}px`


    if (!commentController.data || !(parentid in commentController.data)) {
        return <></>
    }

    const handleEdit = async (commentId:string, parentId:string) => {
        if (commentController.editCommentRef.current == null) {
            return
        }
        await commentController.editComment(commentId, commentController.editCommentRef.current.value, parentId)
    }

    return (
    <>
        {commentController.data[parentid].map(comment => {
            return (
                <div key={uuidv4()} 
                ref={commentController.isNew?.current === comment.pk.S? commentController.commentRef : null}>
                    <article  className={`text-base bg-white  border-l-2 border-l-slate-200 pl-2 mb-5`}
                        style={{marginLeft: marginText}}
                        >
                        {comment.deleted.BOOL 
                        ? <DeletedComment />
                        :
                        <>
                            <CommentDetail comment={comment} commentController={commentController}/>
                            <Disclosure>
                                <div className="flex items-center mt-4 space-x-4 mx-5">
                                    {commentController.isEditing === comment.pk.S 
                                    ? <button className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                                    onClick={() => handleEdit(comment.pk.S, comment.parentid.S)}
                                    >Edit</button>
                                    : <></>}
                                    <Disclosure.Button className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                                    Reply
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className=" ml-5">
                                    {commentForm(comment.pk.S)}
                                </Disclosure.Panel>
                            </Disclosure>
                        </>
                        }
                    </article>
                    <Comment slug={slug} commentController={commentController} margin={margin + 30} parentid={comment.pk.S} commentForm={commentForm}></Comment>
                </div>
            )
        })}
    </>
    )
}

