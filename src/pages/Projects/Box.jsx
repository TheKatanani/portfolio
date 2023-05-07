import React from 'react'
import { StyledBox } from './styled'
import { useTranslation } from 'react-i18next'
import Skills from '../../components/ui/Skills'
// import { Link } from 'react-router-dom'
import Links from '../../components/common/Links'

const Box = ({ demo,repo, title , subTitle, discription,img,skills }) => {
  const { t } = useTranslation()

  return (
    <StyledBox {...{img}}>
      <div >
        <header>
          <div className="title">
            <h2>{t(title)}</h2>
            {subTitle&&<p>{subTitle}</p>}
          </div>
        <Skills data={skills}/>
        </header>
        </div>
        {img&&
        <div className="imgArea">
          <img src={img} alt=""></img>
          <div className="hidden">
        <ul className='discription'>
          {
            discription.map((li, i) => {
              return <li key={i}>{t(li)}</li>
            })
          }
        </ul>
        {/* <div className='linkes'>
          <Link to={demo} target='_blank'>demo</Link>
          <Link to={repo} target='_blank'>repo</Link>
        </div> */}
        <Links {...{repo , demo}}/>
          </div>
        </div>
        }
    </StyledBox>
  )
}

export default Box