import React from 'react';
import styled from 'styled-components';

const SPage = styled.div`
  height: 100%;
  &.page-enter {
    opacity: 0;
  }
  &.page-enter-active {
    opacity: 1;
    transition: opacity 650ms ease-in 650ms;
  }
  &.page-exit {
    opacity: 1;
  }
  &.page-exit-active {
    opacity: 0;
    transition: opacity 650ms ease-out;
  }
`;

const Page = ({ children, ...otherProps }) => {
  return (
    <SPage className='page' {...otherProps}>
      {children}
    </SPage>
  );
};

export default Page;