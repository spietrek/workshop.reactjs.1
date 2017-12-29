import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPageTitle = styled.h1`
  color: #6699cb;
  font-weight: 100;
  font-size: 36px;
  margin-top: 0;
`;

const PageTitle = props => <StyledPageTitle>{props.title}</StyledPageTitle>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
