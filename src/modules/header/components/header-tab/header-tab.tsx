import clsx from 'clsx';
import { AnchorHTMLAttributes, FC } from 'react';
import { NavLink, useLocation } from 'react-router';

import styles from './styles.module.sass';

type THeaderTab = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  nav: string;
};

export const HeaderTab: FC<THeaderTab> = ({ title, nav }) => {
  const { pathname } = useLocation();

  const navTo = `/${nav}`;

  return (
    <NavLink
      className={clsx(styles.link, {
        [styles.active]: pathname === navTo,
      })}
      to={navTo}
      end
      // {...rest}
    >
      {title}
    </NavLink>
  );
};
