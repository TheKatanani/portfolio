import React from 'react'
import { StyledCard } from './styled'
import Skills from '../../components/ui/Skills'
import Links from '../../components/common/Links'
import { Link } from 'react-router-dom'
import { More } from '../../assets/Icons'

const Card = ({id, links:{demo, repo}, title, description, image, technologies }) => {
  const img = image.data.attributes.formats.small.url

  return (
    <StyledCard {...{ img }}>
      <header>
        <div className="imgArea">
          <img src={img} alt=""></img>
        </div>
      </header>
      <main>
        <h2 className='title'>{title}</h2>
        <p className='discription'>
          {description.header.substr(0,130)} <Link to={`/project/${id}`}><More/></Link>
        </p>
        <div className="skillsContainer">
          <Skills data={technologies} />
        </div>
      </main>
              <Links {...{repo , demo}}/>
    </StyledCard>
  )
}

export default Card