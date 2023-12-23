import React from 'react'
import { StyledFilter } from './styled';
import useFirebase from '../../hook/useFirebase';
import { actions } from '../../assets/actions';

const Filter = ({filter,setFilter}) => {
  const {data, loading, error} = useFirebase(actions.GET_ALL,{path:'categories'}) 
  
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return error.message
  }
  console.log(data)

  return (
    <StyledFilter {...{filter}}>
      <li className='all' onClick={()=>setFilter(null)}>all</li>
      {data.map(el => (
      <li key={el.id} className={el.type} onClick={()=>setFilter(el.type)}>
        {el.type}
      </li>
    ))}</StyledFilter>
  )
}

export default Filter