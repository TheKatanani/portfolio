import React from 'react'
import { StyledBox2 } from './styled'
import Skills from '../../components/ui/Skills'
import { Link } from 'react-router-dom'
import { Code, Demo } from '../../assets/Icons'

const Box = (props) => {
  // const { links: { demo, repo }, title, subTitle, discription, image, technologies } =props
  const img = props.mockup.data.attributes.url

  return (
    <StyledBox2 className='box2' {...{ img }}>
      <div className='contact'>
        <header>
          <div className="title">
            <h2>{props.title}</h2>
            {props.subTitle && <p>{props.subTitle}</p>}
          </div>
        </header>
        <main>
          <div className='skillsContainer'>
            <Skills data={props.technologies} />
            <div className='linkes'>
              <Link to={props.links.demo} target='_blank'><Demo/></Link>
              <Link to={props.links.repo} target='_blank'><Code/></Link>
            </div>
          </div>
          <div className='discription'>
            <p>{props.description.header.substring(0, 250)}
              <Link to={`/project/${props.id}`}>...<span className='more'>more</span></Link>
            </p>
          </div>
        </main>
      </div>
      <div className="imgArea">
        <img src={img} alt=""></img>
      </div>

    </StyledBox2>
  )
}

export default Box