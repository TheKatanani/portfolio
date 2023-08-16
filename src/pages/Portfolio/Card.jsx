import React from 'react'
import { StyledCard } from './styled'
import Skills from '../../components/ui/Skills'
import Links from '../../components/common/Links'
import { mainApi } from '../../assets/API'
import { Link } from 'react-router-dom'
import { More } from '../../assets/Icons'

const Card = ({id, demo, repo, title, discription, image, technologies }) => {
  const img = `${mainApi.split("/api/")[0]}${image.data.attributes.formats.small.url}`//thumbnail medium

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
          {discription.substr(0,130)} <Link to={`/project/${id}`}><More/></Link>
        </p>
      
          <Skills data={technologies} />
      </main>
              <Links {...{repo , demo}}/>

    </StyledCard>
  )
}

export default Card