import { FC, PropsWithChildren } from 'react';

import { Htag } from '../../common/ui';
import styles from './styles.module.sass';

type TSidebar = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar: FC<PropsWithChildren<TSidebar>> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const handleClose = () => {
    onClose();
  };
  return isOpen ? (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Htag tag="h3" title={title} />

        <button onClick={handleClose}>Close</button>
      </div>
      {children}
    </aside>
  ) : (
    <></>
  );
};
