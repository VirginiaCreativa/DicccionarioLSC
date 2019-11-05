import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [onMarkNotif, setMarkNotif] = useState(true);
  const [onVocab, setVocab] = useState(true);
  const history = useHistory();

  const LI = styled.li`
    margin-right: 20px;
    line-height: 3.2;
  `;
  const BoxNavItem = styled.div`
    display: flex;
    padding: 6px 0 10px;
    line-height: 2.5;
  `;
  const Image = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 6px;
    border: 2px solid #ced6e0;

    border-radius: 100%;
  `;
  const P = styled.p`
    margin-bottom: 0px;
    color: #57606f;
    font-size: 0.75rem;
  `;
  return (
    <>
      <ul className="nav">
        <LI className="nav-item">
          {onVocab && (
            <box-icon
              name="add-to-queue"
              color="#a3a9af"
              size="20px"
              onClick={() => history.push('/vocabulario')}
            />
          )}
        </LI>
        <LI className="nav-item" onClick={() => history.push('/marcadores')}>
          {onMarkNotif && (
            <box-icon name="bookmark" color="#a3a9af" size="20px" />
          )}
        </LI>
        <LI className="nav-item">
          <BoxNavItem>
            <Image src="https://i.pravatar.cc/40" alt="Profile" />
            <P>Virginia Velásquez Soto</P>
          </BoxNavItem>
        </LI>
      </ul>
    </>
  );
};

export default Navbar;
