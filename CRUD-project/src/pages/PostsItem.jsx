import './PostsItem.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const PostsItem = ({id, title, createdDate, content}) => {
  const nav = useNavigate();

  return (
    <div className='PostsItem'>
      <div className='info_section' onClick={()=>{
      nav(`/posts/${id}`)}}>
        <div className='title'>
          {title}
        </div>
        <div className='created_date'>
          {createdDate}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button onClick={()=>{nav(`/edit/${id}`)}} text='수정하기' />
      </div>
    </div>);
}

export default PostsItem;