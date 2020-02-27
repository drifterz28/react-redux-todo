import React from 'react';
import FilterLink from './Link';
import * as c from '../constants';

const Footer = () => (
  <p>
    {' '}
    <FilterLink filter={c.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={c.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={c.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Footer;
