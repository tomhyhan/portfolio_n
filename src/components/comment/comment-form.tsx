import { CommentBody, CommentList, DenamoComment } from '@/lib/Type'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function CommentForm({slug, postComment, parent, comments} : {
    slug: string,
    postComment: (body: CommentBody) => any,
    parent: string,
    comments: CommentList
}) {
    const {data: session } = useSession()
    
    const handleCommentSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()  
        if (!session || !session.user) {
            return
        }
        const commentVal = event.currentTarget.comment.value

        const body = {
            comment: commentVal,
            email: session.user.email!,
            image: session.user.image!,
            post: slug,
            parentId: parent
        }
         await postComment(body)

        // @ts-ignore
        event.target.comment.value = ""
    }

    return (
        <form className="my-6" onSubmit={handleCommentSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment"
                    disabled={!session? true: false}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none outline-none"
                    rows={5}
                    placeholder={!session? "Please login to comment": "write comment..."} 
                    required></textarea>
            </div>
            <div className="flex justify-end">
                <input type="submit"
                    className="ml-auto py-2.5 px-4 text-xs font-medium text-center bg-sky-500 rounded-lg focus:ring-4 text-white focus:ring-primary-200 cursor-pointer hover:bg-primary-800" value="Post" />
            </div>
        </form>
    )
}
