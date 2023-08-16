import React from 'react'
import { StyledBox2 } from './styled'
import Skills from '../../components/ui/Skills'
import Links from '../../components/common/Links'
import { mainApi } from '../../assets/API'
import { Link } from 'react-router-dom'
import { More } from '../../assets/Icons'

const Box = (props) => {
  // const { links: { demo, repo }, title, subTitle, discription, image, technologies } =props
  const img = `${mainApi.split("/api/")[0]}${props.mockup.data.attributes.url}`

  return (
    <StyledBox2 className='box2' {...{img}}>
      <div className='contact'>
        <header>
          <div className="title">
            <h2>{props.title}</h2>
            {props.subTitle && <p>{props.subTitle}</p>}
          </div>
        </header>
        <Skills data={props.technologies} />
        <main>
          <div className='discription'>
            <p>{props.discription.substring(0, 250)}
            <Link to={`/project/${props.id}`}><More/></Link>
            </p>
          </div>
          <Links repo={ props.links.repo} demo={props.links.demo} />
        </main>
      </div>
      <div className="imgArea">
        <img src={img} alt=""></img>
      </div>

    </StyledBox2>
  )
}

export default Box