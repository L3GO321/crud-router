import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { addPost, routesPath, getPost } from '../../utils'

export const NewPost = ({ postId = 0, goToView = null }) => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (postId) {
      console.log('postId: ', postId)
      const fetchData = async () => {
        const post = await getPost(postId)

        if (post) {
          setValue(post.content)
        }
      }

      fetchData()
    } else {
      const prevContent = localStorage.getItem('notFinished')
      setValue(prevContent || '')
    }
  }, [])

  const goToMain = () => {
    navigate(routesPath.posts)
  }

  const publishPost = async () => {
    if (!value) return
    const status = await addPost({ id: postId, content: value })

    if (status === 'ok') {
      goToMain()
      localStorage.removeItem('notFinished')
    }
  }

  const cancelCreation = () => {
    if (postId) {
      goToView?.('view')
    } else {
      if (value) {
        localStorage.setItem('notFinished', value)
      }
      goToMain()
    }
  }

  return (
    <div style={{ border: '1px solid #B7B7B7FF', padding: '20px', width: '400px', margin: '20px 0', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '15px' }}>
      <div
        style={{ position: 'absolute', top: '5px', right: '10px', cursor: 'pointer', fontSize: '20px' }}
        onClick={cancelCreation}
      >✖</div>
      <textarea
        rows='10'
        cols='40'
        value={value}
        style={{ marginTop: '20px' }}
        onChange={(e) => setValue(e.target.value)} />

      <button onClick={publishPost}>Опубликовать</button>
    </div>
  )
}