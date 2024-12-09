import './Home.css'
import Button from "../components/Button";
import Header from "../components/Header"
import PostsList from './PostsList';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PostStateContext } from '../App';

const Home = ()=>{
  const data = useContext(PostStateContext);
  const nav = useNavigate();

  return (
    <div className="Home">
      <div>
        <Header title="Home"/> 
      </div>
      <div className="menu-bar">
        <Button
          onClick = {()=>{
            nav(`/login`)
          }
          } 
          text={'로그인'}
          type={'main'}
        />
        <Button 
          onClick={()=>{
            nav('/join')
          }}
          text={'회원가입'}
          type={'main'}
        />
        <Button 
          onClick={()=>{
            nav('/new')
          }}
          text={'글 쓰기'}
          type={'main'}
        />
      </div>
      <div>
        <PostsList data={data}/>
      </div>
    </div>
  )
}

export default Home;