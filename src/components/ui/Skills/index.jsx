
import { SkillsStyled } from './styled'

const Skills = ({ data }) => {
  return (
    <SkillsStyled className="skills">
      <ul>
        {data?.map((el) => <li key={el}> #{el}</li>)}
      </ul>
    </SkillsStyled>
  )
}

export default Skills