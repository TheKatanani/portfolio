
import { SkillsStyled } from './styled'

const Skills = ({data}) => {
  return (
    <SkillsStyled className="skills">
    {data?.map((el, i) => <span key={i}> #{el}</span>)}
  </SkillsStyled>
  )
}

export default Skills