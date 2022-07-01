import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NewComment({post , comment}) {
  const router = useRouter()
  const [content, setContent] = useState('')

  return (
      <div className="">
              <form
      className='flex flex-col mt-10'
      onSubmit={async (e) => {
        e.preventDefault()
        if (!content) {
          alert('Enter some text in the comment')
          return
        }
        const res = await fetch('/api/comment', {
          body: JSON.stringify({
            post: post.id,
            content: content,
            comment: comment?.id,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
        router.reload(window.location.pathname)
      }}
    >
      <textarea
        className='border outline-none p-4 w-full text-lg font-medium bg-transparent outline-none color-primary '
        rows={5}
        cols={50}
        placeholder='What Are Your Thoughts?'
        onChange={(e) => setContent(e.target.value)}
      />
      <div className='mt-5 flex justify-end border-l border-b pb-2 pr-2 border-r border-gray-300'>
        <button className=' font-bold bg-gray-900 text-gray-500 px-4 py-2 rounded-full'>
          Comment
        </button>
      </div>
    </form>
      </div>

  )
}