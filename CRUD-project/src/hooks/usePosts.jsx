import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostStateContext } from "../App";

const usePosts = (id) => {
  const data = useContext(PostStateContext);
  const [curPostsItem, setCurPostsItem] = useState();
  const nav = useNavigate();

  useEffect(()=>{
    const currentPostsItem = data.find((item)=>(String(item.id) === String(id)));

    if (!currentPostsItem){
      window.alert('존재하지 않는 일기입니다.');
      nav('/',{replace: true});
    }

    setCurPostsItem(currentPostsItem);
  }, [id, data])

  return curPostsItem;
};

export default usePosts;