import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.sass';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};
