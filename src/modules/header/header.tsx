import { FC } from 'react';

import styles from './styles.module.sass';

type TTab = {
  title: string;
  url: string;
};

const TABS: TTab[] = [
  { title: 'Apps', url: '/' },
  { title: 'Data', url: '/' },
  { title: 'Identities', url: '/' },
  { title: 'Alerts', url: '/' },
  { title: 'Investigation center', url: '/' },
  { title: 'Configurations', url: '/' },
];

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a href={'/'}>Logo</a>
      <nav>
        <ul>
          {TABS.map((tab, i) => (
            <li key={i}>{tab.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
