import React from 'react';
import PageTemplate from './PageTemplate';

const UnknownPageContainer = () => {
  const pageTitle = '[Unknown Page]';
  return <PageTemplate pageTitle={pageTitle}>Page Not Found</PageTemplate>;
};

export default UnknownPageContainer;
