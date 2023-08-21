import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import useFetch from '../../hook/useFetch';
import { mainApi } from '../../assets/API';
import { Container } from '../../style/components';
import { StyledDetails } from './styled';
import Links from '../../components/common/Links';
import Skills from '../../components/ui/Skills';

const ProjectDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${mainApi}projects/${id}?populate=description.features,technologies,category,links,mockup,image`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return error.message;
  }
  const { title, subTitle, description, mockup, links, technologies, category } = data.data.attributes;
  const img = mockup.data.attributes.formats.small.url
  return (
    <StyledDetails>
      <Container className='container'>
        <div className="card">
          <div className="flex">
            <div className="content">
              <header>

              <h1>{title}</h1>
              <h2>{subTitle}</h2>
              </header>
              <main>

              <div>
                <strong>category: </strong>{category.data.attributes.type}
              </div>
              <Skills data={technologies} />
              <div className='discription'>
                <p>
                  {description.header}
                </p>
                <ul>
                  {
                    description.features.map(el=>(
                      <li key={el.id}>{el.feature}</li>
                    ))
                  }
                </ul>
                <p>
                  {description.footer}
                </p>
              </div>
              </main>
              <Links repo={links.repo} demo={links.demo} />

            </div>
            <img src={img} alt="" />
          </div>
        </div>
      </Container>
    </StyledDetails>
  );
};

export default ProjectDetails;