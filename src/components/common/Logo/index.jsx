import { useContext } from 'react';
import { ThemeContext } from '../../../Context';
import { actions } from '../../../assets/actions';
import useFirebase from '../../../hook/useFirebase';

const Logo = () => {
  const [theme,] = useContext(ThemeContext);
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'info' })
  if (loading) {
    return <p>Loading...</p>
  }

  const Dark = data[0]?.logo.dark
  const Light = data[0]?.logo.light
  if (error) {
    return error.message
  }
  return (
    <img className='logo' src={theme.theme === "light" ? Light : Dark} alt='logo' />
  )
}

export default Logo