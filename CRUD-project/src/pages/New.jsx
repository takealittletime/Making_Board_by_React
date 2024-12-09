import './New.css'

import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import Editor from '../components/Editor';
import { PostDispatchContext } from '../App';

const New = () => {
  const { onCreate } = useContext(PostDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(
      input.title,
      input.createdDate,
      input.content
    );
    nav('/',{replace:true});
  }

  return (
    <div className="New">
      <div className="header_section">
        <Header 
          leftChild={<Button onClick= {()=>{nav((-1))}} text={'< 뒤로가기'}/>}
          title={"글 쓰기"}
        />
      </div>
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New;