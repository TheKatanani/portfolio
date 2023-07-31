import React from 'react';
import ReactDOM from 'react-dom';
import { PortalStyled } from './styled';
import { useContext } from 'react';
import { MenuContext } from '../../../Context';

const Portal = ({ children ,card}) => {
  const [show , setShow]=useContext(MenuContext);
  if (!show){
    return null;
  }
  return ReactDOM.createPortal(
    <PortalStyled className="portal" {...{ card }}>
      <div className="layout"
        onClick={(e) => {
          e.stopPropagation();
          setShow(false);
        }}
      ></div>
      <div className="children">
        {children}
      </div>
    </PortalStyled>
    ,
    document.getElementById('portal')
  );
};

export default Portal;
