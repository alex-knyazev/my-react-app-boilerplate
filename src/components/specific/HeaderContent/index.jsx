import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

import routes from '@/constants/routes';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link to={routes.MAIN_PAGE}>Main page</Link>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {};

export default Header;
