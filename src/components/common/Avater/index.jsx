// import AvaterImage from '../../../assets/images/Avater6.png'
import { AvaterStyled } from './styled'

const Avater = ({img}) => {
  console.log(img)
  return (
    <AvaterStyled className='avater' src={img} alt="" />
  )
}

export default Avater