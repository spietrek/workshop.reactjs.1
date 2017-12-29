import React from 'react';
import PropTypes from 'prop-types';

const Table = props => {
  const { pageTitle } = props;
  return <div>{pageTitle} table content</div>;
};

Table.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default Table;
