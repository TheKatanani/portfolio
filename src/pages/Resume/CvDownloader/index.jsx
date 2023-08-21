import React from 'react';
import { BlueButton } from '../../../style/components';
import { mainApi } from '../../../assets/API';
import useFetch from '../../../hook/useFetch';

const CvDownloader = ({ name }) => {
  const { data, loading, error } = useFetch(`${mainApi}cv?populate=*`);
  const url = data?.data.attributes.cv.data.attributes.url;

  if (loading) {
    return <span>...Loading</span>;
  }

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