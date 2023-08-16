import React from 'react';
import { BlueButton } from '../../../style/components';
import { mainApi } from '../../../assets/API';
import useFetch from '../../../hook/useFetch';

const CvDownloader = ({  Name }) => {
  const { data, loading, error } = useFetch(`${mainApi}cv?populate=*`);
  const url =  `${mainApi.split("/api/")[0]}${data?.data.attributes.cv.data.attributes.url}`
  console.log(url)
  if (error) {
    return error.message
  }
  return (
    <div>
      <BlueButton className='cvButton' as='a' download={Name} href={url} disabled={loading || !url}>
        {loading ? 'Downloading...' : 'Download CV'}
      </BlueButton>
    </div>
  );
};

export default CvDownloader;