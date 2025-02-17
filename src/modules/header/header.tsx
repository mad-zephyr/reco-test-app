import { FC } from 'react';

import { paths } from '../../common/constants/paths';
import { HeaderTab } from './components';
import styles from './styles.module.sass';

type TTab = {
  title: string;
  url: string;
};

const TABS: TTab[] = [
  { title: 'Apps', url: paths.app },
  { title: 'Data', url: paths.data },
  { title: 'Identities', url: paths.identity },
  { title: 'Alerts', url: paths.alerts },
  { title: 'Investigation center', url: paths.investigation },
  { title: 'Configurations', url: paths.configuration },
];

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a href={'/'}>Logo</a>
      <nav className={styles.nav}>
        {TABS.map((tab, i) => (
          <HeaderTab key={i} title={tab.title} nav={tab.url} />
        ))}
      </nav>
    </header>
  );
};
