import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { Post } from './components/Post/Post';

import { getPosts, routesPath } from '../../utils'

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()

      if (posts) {
        setPosts(posts)
      }
    }

    fetchPosts()
  }, [])

  const goToCreate = () => {
    navigate(routesPath.postsCreate)
  }

  return (
    <>
      <button
        onClick={goToCreate}
        style={{ marginBottom: '30px' }}>
        Создать пост
      </button>
      <div>
        {posts.length ?
          posts.map(post => (
            <Post key={post.id} post={post} />
          )) :
          <div>Постов нет</div>}
      </div>
    </>
  )
}