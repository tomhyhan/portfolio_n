import { CommentController, CommentList } from '@/lib/Type'
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react'
import CommentDetail from './comment-body';
import DeletedComment from './comment-delete';
import { handleError } from '@/lib/error/handle-error';

export default function Comment({commentController,slug,margin,parentid,commentForm}: {
    commentController: CommentController
    slug: string,
    margin: number,
    parentid: string,
    commentForm: (parentId: string) => JSX.Element
}) {
    const [error, setError] = useState<unknown|null>(null);

    if (error) {
        throw error
    }

    const marginText = `${margin.toString()}px`
    const commentRef = useRef<HTMLDivElement|null>(null)
    useEffect(() => { 
        commentRef.current?.scrollIntoView({behavior: "smooth"})
    }, [commentRef.current])

    if (!commentController.data || !(parentid in commentController.data)) {
        return <></>
    }

    const handleEdit = async (commentId:string, parentId:string) => {
        if (commentController.editCommentRef.current == null) {
            return
        }
        try {
            await commentController.editComment(commentId, commentController.editCommentRef.current.value, parentId)
            console.log("edit success")
        } catch (error) {
            handleError(error, setError)
        }
    }

    return (
    <>
        {commentController.data[parentid].map(comment => (
            <div key={uuidv4()} 
            ref={commentController.isNew === comment.pk.S? commentRef : null}>
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
        ))}
    </>
    )
}
