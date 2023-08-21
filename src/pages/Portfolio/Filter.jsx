import React from 'react'
import useFetch from '../../hook/useFetch';
import { mainApi } from '../../assets/API';
import { StyledFilter } from './styled';

const Filter = ({filter,setFilter}) => {
  const { data, loading, error } = useFetch(`${mainApi}categories`);
  
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return error.message
  }
  return (
    <StyledFilter {...{filter}}>
      <li className='all' onClick={()=>setFilter(null)}>all</li>
      {data.data.map(el => (
      <li key={el.id} className={el.attributes.type} onClick={()=>setFilter(el.attributes.type)}>
        {el.attributes.type}
      </li>
    ))}</StyledFilter>
  )
}

export default Filter