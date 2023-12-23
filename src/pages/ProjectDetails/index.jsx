import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { Container } from '../../style/components';
import { StyledDetails } from './styled';
import Links from '../../components/common/Links';
import Skills from '../../components/ui/Skills';
import useFirebase from '../../hook/useFirebase';
import { actions } from '../../assets/actions';

const ProjectDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFirebase(actions.GET_ONE, { path: 'project', id })
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return error.message;
  }
  // const detailsData = data.filter(el => el.id === id)
  const { title, subTitle, description, mockup, demo, repo, technologies, category } = data;
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
                  <strong>category: </strong>{category}
                </div>
                <Skills data={technologies} />
                <div className='discription'>
                  <p>
                    {description?.header}
                  </p>
                  <ul>
                    {
                      description?.features.map(feature => (
                        <li key={feature?.id}>{feature?.data}</li>
                      ))
                    }
                  </ul>
                  <p>
                    {description?.footer}
                  </p>
                </div>
              </main>
              <Links repo={repo} demo={demo} />

            </div>
            <img src={mockup} alt="" />
          </div>
        </div>
      </Container>
    </StyledDetails>
  );
};

export default ProjectDetails;