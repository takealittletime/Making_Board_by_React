import './Posts.css'
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import usePosts from '../hooks/usePosts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import usePageTitle from "../hooks/usePageTitle"


const Posts = ()=>{
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 글 읽기`)

  const curPostsItem = usePosts(params.id);

  if (!curPostsItem){
    return <div>데이터 로딩중...</div>
  }

  const { title, createdDate, content } = curPostsItem;

  return (
    <div className='Posts'>
      <Header
        leftChild={<Button onClick={()=>{
          nav(-1);
        }} text={'< 뒤로가기'}/>} 
        title={title}
      />
      <section className='content_section'>
        <Viewer createdDate={createdDate} content={content}/>
      </section>
    </div>
  )
}

export default Posts;