import React from 'react';
import { BlueButton } from '../../../style/components';
import useFirebase from '../../../hook/useFirebase';
import { actions } from '../../../assets/actions';

const CvDownloader = ({ name }) => {
  // you can use getone insted
  const {data, loading, error} = useFirebase(actions.GET_ALL,{path:'resumeFile'}) 

  
  if (loading) {
    return <span>...Loading</span>;
  }
  const url = data[0]?.url;

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <div>
      <BlueButton
        className="cvButton"
        as="a"
        target='_blank'
        download={name}
        href={url}
        disabled={loading || !url}
      >
        {loading ? 'Downloading...' : 'Download CV'}
      </BlueButton>
    </div>
  );
};

export default CvDownloader;