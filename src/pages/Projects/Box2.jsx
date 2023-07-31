import React from 'react'
import {  StyledBox2 } from './styled'
import { useTranslation } from 'react-i18next'
import Skills from '../../components/ui/Skills'
import Links from '../../components/common/Links'

const Box = ({ demo, repo, title, subTitle, discription, img, skills }) => {
  const { t } = useTranslation()

  return (
    <StyledBox2 className='box2' {...{ img }}>
      <div className='contact'>
        <header>
          <div className="title">
            <h2>{t(title)}</h2>
            {subTitle && <p>{subTitle}</p>}
          </div>
        </header>
          <Skills data={skills} />
        <main>
            <ul className='discription'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis magni mollitia praesentium reprehenderit placeat vel odit veniam neque perferendis provident id alias enim totam modi, nulla inventore ratione asperiores.</p>
            </ul>
            <Links {...{ repo, demo }} />
        </main>
      </div>
        <div className="imgArea">
          <img src={img} alt=""></img>
        </div>
          
    </StyledBox2>
  )
}

export default Box