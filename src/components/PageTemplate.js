import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import PageContent from './PageContent';

const PageTemplate = props => {
  const { title, children } = props;
  return (
    <PageContainer>
      <Sidebar />
      <PageHeader title={title} />
      <PageContent displayBlock="true">{children}</PageContent>
    </PageContainer>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

PageTemplate.defaultProps = {
  children: null
};

export default PageTemplate;
