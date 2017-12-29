import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import PageContent from './PageContent';

const PageTemplate = props => {
  const { pageTitle, children } = props;
  return (
    <PageContainer>
      <Sidebar />
      <PageHeader title={pageTitle} />
      <PageContent displayBlock="true">{children}</PageContent>
    </PageContainer>
  );
};

PageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node
};

PageTemplate.defaultProps = {
  children: null
};

export default PageTemplate;
