import React from 'react'
import { StyledCard } from './styled'
import Skills from '../../components/ui/Skills'
import Links from '../../components/common/Links'

const Card = ({ demo, repo, title, discription, img, skills }) => {

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <div className='skills'>
          {
            skills.map((li, i) => {
              return <span key={i}> #{li} </span>
            })
          }
          </div>
          {/* <Skills data={skills} /> */}
      </main>
      {/* <footer className='linkes'>
        <Link to={demo} target='_blank'>demo</Link>
        <Link to={repo} target='_blank'>repo</Link>
      </footer> */}
              <Links {...{repo , demo}}/>

    </StyledCard>
  )
}

export default Card