
import { SkillsStyled } from './styled'

const Skills = ({ data }) => {
  return (
    <SkillsStyled className="skills">
      {data?.map((el) => <span key={el.id}> #{el.Item}</span>)}
    </SkillsStyled>
  )
}

export default Skills