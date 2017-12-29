import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from './PageTemplate';
import Table from './Table';

const HomePageContainer = props => {
  const { title } = props;
  return (
    <PageTemplate pageTitle={title}>
      <Table pageTitle={title} />
    </PageTemplate>
  );
};

HomePageContainer.propTypes = {
  title: PropTypes.string.isRequired
};

export default HomePageContainer;
