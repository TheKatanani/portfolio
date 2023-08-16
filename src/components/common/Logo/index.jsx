import { useContext } from 'react';
import { ThemeContext } from '../../../Context';
import { mainApi } from '../../../assets/API';
import useFetch from '../../../hook/useFetch';

const Logo = () => {
  const [theme, ] = useContext(ThemeContext);
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);
  const Dark =`${mainApi.split("/api/")[0]}${data?.data.attributes.logo.data[0].attributes.url}`
  const Light =`${mainApi.split("/api/")[0]}${data?.data.attributes.logo.data[1].attributes.url}`
  if (loading) {
    return <p>...Loadintg</p>
  }else {
    
  }
  if (error) {
    return error.message
  }
  
  return (
    <img className='logo' src={theme.theme === "light" ? Light : Dark} alt='logo'/>
  )
}

export default Logo