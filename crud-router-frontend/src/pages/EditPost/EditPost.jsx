import { useState, useEffect } from "react"

import { useParams, useNavigate } from 'react-router-dom';

import { NewPost } from "../NewPost/NewPost"

import { deletePost, routesPath, getPost } from '../../utils'

export const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [viewType, setViewType] = useState('view')
  const [postData, setPostData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(id)

      if (post) {
        setPostData(post)
      }
    }

    fetchData()
  }, [])

  const deletePostById = async () => {
    const status = await deletePost(id)

    if (status === 'ok') {
      navigate(routesPath.posts)
    }
  }

  return (
    <div>
      {viewType === 'view' &&
        <div
          style={{ border: '1px solid #B7B7B7FF', padding: '20px', width: '400px', margin: '20px 0', display: 'flex', flexDirection: 'column', rowGap: '15px' }}
        >
          <div>ID: {postData.id}</div>
          <div style={{ fontSize: '20px' }}>{postData.content}</div>
          <button onClick={() => setViewType('edit')}>Изменить</button>
          <button onClick={deletePostById}>Удалить</button>
        </div>
      }
      {viewType === 'edit' && <NewPost postId={id} goToView={setViewType} />}
    </div>
  )
}