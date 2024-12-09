import { useNavigate } from 'react-router-dom';

import './Join.css'
import Header from "../components/Header";
import Button from "../components/Button";


const Join = ()=>{
  const nav = useNavigate();

  return (
    <div className="Join">
      <div>
        <Header 
          leftChild={<Button onClick={()=>{nav(-1)}} text={'< 뒤로가기'} />}
          title={'회원가입'}
        />
      </div>
      <section className="form_section">
        <h4>사용자 이름</h4>
        <input type="text" placeholder="홍길동"></input>
        <h4>아이디</h4>
        <input type="text" placeholder="ID"></input>
        <h4>비밀번호</h4>
        <input type="password" placeholder="PW"></input>
      </section>
      <section className="button_section">
        <Button text={'회원가입'} type={'post'}/>
      </section>
    </div>
  )
}

export default Join;