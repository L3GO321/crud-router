const postsApi = 'http://localhost:7777/posts'

export const getPosts = async () => {
  try {
    const response = await fetch(postsApi)

    if (response.ok) {
      const data = await response.json()
      return data
    }

    throw new Error(response.statusText)
  } catch (error) {
    console.error('GET_POSTS: ', error.message)
    alert('При получении списка постов произошла ошибка')
  }
}

export const getPost = async (postId) => {
  try {
    const response = await fetch(`${postsApi}/${postId}`)

    if (response.ok) {
      const data = await response.json()
      return data
    }

    throw new Error(response.statusText)
  } catch (error) {
    console.error('GET_POST: ', error.message)
    alert('При получении данных поста произошла ошибка')
  }
}

export const addPost = async (post) => {
  try {
    const response = await fetch(postsApi, {
      method: 'POST',
      body: JSON.stringify(post)
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return 'ok'
  } catch (error) {
    console.error('ADD_POSTS: ', error.message)
    alert('При создании/редактировании поста произошла ошибка')
    return 'error'
  }
}

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${postsApi}/${postId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return 'ok'
  } catch (error) {
    console.error('DELETE_POSTS: ', error.message)
    alert('При удалении поста произошла ошибка')
    return 'error'
  }
}
