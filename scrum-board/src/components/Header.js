import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.section`
  background-color: orange;
`;

const ScrumBoardHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

function Header(){
  return (
    <StyledWrapper>
      <ScrumBoardHeader> 
        Help Queue
      </ScrumBoardHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}

export default Header;