import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { CommentController, DenamoComment } from '@/lib/Type';

export default function CommentEdit({comment, commentController}:{
    comment: DenamoComment,
    commentController: CommentController
}) {
    const {data, status} = useSession()
    if (status === "unauthenticated" || data?.user?.email !== comment.userEmail.S) {
        return <></>
    }

    const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await commentController.deleteComment(comment.pk.S, comment.parentid.S)
    }
    
    const handleEdit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        commentController.handleIsEditing(comment.pk.S)
    }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          <PiDotsThreeOutlineBold className="w-5 h-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        type="submit"
                        className={clsx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                        )}
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    )}
                </Menu.Item>
            <form method="DELETE" onSubmit={handleDelete}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                     Delete
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    
  )
}
