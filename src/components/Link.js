import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({ active, filter, children, setVisibilityFilter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href='#'
      onClick={e => {
        e.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => ({
    filter: ownProps.filter,
    active: ownProps.filter === state.visibilityFilter
  }),
  ({
    setVisibilityFilter
  })
)(Link);
