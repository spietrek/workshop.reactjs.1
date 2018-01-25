import React from 'react';
import PageTemplate from './PageTemplate';

const UnknownPageContainer = () => {
  const title = '[Unknown Page]';
  return <PageTemplate title={title}>Page Not Found</PageTemplate>;
};

export default UnknownPageContainer;
