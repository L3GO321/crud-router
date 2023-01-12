import { useNavigate } from 'react-router-dom';
import { routesPath } from '../../../../utils'

export const Post = ({ post }) => {
  const navigate = useNavigate()

  const goToEdit = () => {
    navigate(routesPath.postsEdit.replace(/:id/, post.id))
  }

  return (
    <div
      style={{ border: '1px solid #B7B7B7FF', padding: '20px', width: '400px', margin: '20px 0', display: 'flex', flexDirection: 'column', rowGap: '15px', cursor: 'pointer' }}
      onClick={goToEdit}
    >
      <div>ID: {post.id}</div>
      <div>Дата создания: {post.created}</div>
      <div style={{ fontSize: '20px' }}>{post.content}</div>
    </div>
  )
}