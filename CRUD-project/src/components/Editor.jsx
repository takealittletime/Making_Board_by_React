import './Editor.css'

import Button from "./Button";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Editor = ({initData, onSubmit}) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    title:"",
    createdDate: new Date().toLocaleDateString(),
    content:"",
  });

  useEffect(()=>{
    if (initData){
      setInput({
        ...initData,
        createdDate : new Date(Number(initData.createdDate))
      })
    }
  },[initData])

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // if (name == 'createdDate'){
    //   value = new Date(value);
    // }

    setInput({
      ...input,
      [name]:value,
    });
  }

  const onClickSubmitButton = ()=>{
    // const updatedInput = {
    //   ...input,
    //   createdDate: new Date(),
    // };
    onSubmit(input);
  }
  
  return (
  <div className='Editor'>
      <section className='title_section'>
        <h4>글 제목</h4>
        <input 
          name = 'title'
          onChange={onChangeInput}
          type='text'
          placeholder='글 제목...'
        />
      </section>
      {/* <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input 
          name="createdDate"
          value = {input.createdDate}
          type="date"
        />
      </section> */}
      <section className="content_section">
        <h4>글 쓰기</h4>
        <textarea
          name='content'
          value={input.content}
          onChange = {onChangeInput}
          placeholder='여기에 작성...'
        />
      </section>
      <section className='button_section'>
        <Button onClick={()=>{nav(-1)}} type={'cancel'} text='취소하기'/>
        <Button type={'post'} onClick={onClickSubmitButton} text='작성하기'/>
      </section>
    </div>
  )
}

export default Editor;