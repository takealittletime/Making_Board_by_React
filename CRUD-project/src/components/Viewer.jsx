import './Viewer.css'
import Comment from './Comment';

const Viewer = ({title, createdDate, content}) => {
  return (
    <div className='Viewer'>
      <h4 className='date_section'>게시 날짜:{createdDate}</h4>
      <section className='content_section'>
      <p className='content_p'>{content}</p>
      </section>
      <section className='comment_section'>
        <Comment/>
      </section>
    </div>
  )
}

export default Viewer;