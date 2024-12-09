import { useReducer,useState, useRef, useEffect, createContext } from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css'

import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import NotFount from './pages/notFound';
import New from './pages/New';
import Posts from './pages/Posts';
import Edit from './pages/Edit';
import Button from './components/Button'

function reducer (state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    
    case 'CREATE':
      {
        nextState = [action.data, ...state];
        break;
      }

    case 'UPDATE':
      {
        nextState = state.map((item)=>
          String(item.id) == String(action.data.id)? action.data : item
        );
        break;
      }

    case 'DELETE':
      {
        nextState = state.filter((item) => String(item.id) != String(action.id));
        break;
      }

    default:
      return state;
  }

  return nextState;
}

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();



function App() {
  // mockData 셋업
  localStorage.setItem('posts',JSON.stringify(  
      [
        {id: 0, title:"여기에 글 제목이 들어간다.", createdDate: new Date().toLocaleDateString(),content:"여기에\n글 내용 작성...\n"},
        {id: 1, title:"이 데이터는 목업이다.", createdDate: new Date().toLocaleDateString(),content:"목업 데이터는\n로컬 스토리지에 저장하였다."},
        {id: 2, title:"React로 게시판 작성하기!", createdDate: new Date().toLocaleDateString(),content:"React를 이용했다."},
      ]
    )
  );

  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  useEffect(()=>{
    // 예외처리 1. storedData가 없는 경우
    const storedData = localStorage.getItem('posts')
    if (!storedData){
      setIsLoading(false);
      return;
    }

    // 예외처리 2. 형식이 Array가 아닌 경우
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    // 다음 id 계산
    let maxId = 0;
    parsedData.forEach((item)=>{
      if (Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId + 1;

    // 게시글 로딩
    dispatch({
      type: 'INIT',
      data: parsedData,
    });
    setIsLoading(false);
  },[]);

  // 새로운 글 추가
  const onCreate = (title, createdDate, content)=>{
    console.log("onCreate parameters:", { title, createdDate, content });
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        title,
        createdDate,
        content,
      }
    })
  }
  // 기존 글 수정
  const onUpdate = (id, title, createdDate, content)=>{
    dispatch({
      type:'UPDATE',
      data:{
        id,
        title,
        createdDate,
        content,
      }
    }
  );
  };
  // 기존 글 삭제
  const onDelete = (id)=>{
    dispatch({
      type:'DELETE',
      id,
    })
  }

  // 로딩 중
  if (isLoading){
    return <div>데이터 로딩중...</div>
  }

  return (
    <>
      <PostStateContext.Provider value={data}>
        <PostDispatchContext.Provider value=
        {
          { onCreate,
            onUpdate,
            onDelete,
          }
        }>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/join' element= {<Join/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/new' element= {<New/>}/>
            <Route path='/posts/:id' element= {<Posts/>}/>
            <Route path='/edit/:id' element= {<Edit/>}/>
            <Route path='*' element={<NotFount/>}/>
          </Routes>
        </PostDispatchContext.Provider>
      </PostStateContext.Provider>
    </>
  )
}

export default App
