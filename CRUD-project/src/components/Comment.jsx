import './Comment.css'
import Button from './Button';

const Comment = () => {
  return (
    <div className='Comment'>
      <div className='comment_write_section'>
        <h4>댓글</h4>
        <textarea placeholder='댓글을 작성하세요'></textarea>
      <div className='button_section'>
        <Button type='post' text='댓글 작성'/>
      </div>
      </div>
    </div>
  )
}

export default Comment;