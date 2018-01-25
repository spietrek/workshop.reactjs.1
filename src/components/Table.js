import React from 'react';
import PropTypes from 'prop-types';

const Table = props => {
  const { title } = props;
  return <div>{title} table content</div>;
};

Table.propTypes = {
  title: PropTypes.string.isRequired
};

export default Table;
