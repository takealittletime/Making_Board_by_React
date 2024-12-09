import './PostsList.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PostsItem from './PostsItem';

const PostsList = ({data}) => {
  const nav = useNavigate();

  return(
    <div className='PostsList'>
      <div className='list_wrapper'>
        {data.map((item) =><PostsItem key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default PostsList;