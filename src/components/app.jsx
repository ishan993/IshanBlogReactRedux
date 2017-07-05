import React from 'react';
import styled from 'styled-components';

const ChildrenWrapper = styled.div`
  margin-top: 37px;
  @media only screen and (min-width: 768px){
        margin-top: 65px;
    }
`;

const App = () => (
  <div className="parent">
    <ChildrenWrapper>
      {this.props.children}
    </ChildrenWrapper>
  </div>
);

export default App;


