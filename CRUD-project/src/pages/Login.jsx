import { useNavigate } from 'react-router-dom';

import './Login.css'
import Header from '../components/Header';
import Button from "../components/Button";

const Login = ()=>{
  const nav = useNavigate();

  return (
    <div className="Login">
      
      <Header
        leftChild={<Button
          onClick={()=>{nav(-1)}}
          text={'< 뒤로가기'} />}  
        title={"Login"}
      />

      <div className="LoginForm">
        
        <label htmlFor="idIp">아이디</label>
        <input id="idIp"
        type="text" placeholder="ID"></input>

        <label htmlFor="pwIp">비밀번호</label>
        <input id="pwIp"
        type="password" placeholder="PW"></input>

        <Button className='loginButton' type={'post'} text={'로그인'}/>
      
      </div>
    </div>
  )
}

export default Login;