import { Posts, NewPost, EditPost } from "../../pages"

export const routesPath = {
  posts: '/',
  postsCreate: '/posts/new',
  postsEdit: '/posts/:id'
}

export const routes = [
  {
    path: routesPath.posts,
    element: <Posts />
  },
  {
    path: routesPath.postsCreate,
    element: <NewPost />
  },
  {
    path: routesPath.postsEdit,
    element: <EditPost />
  }
]