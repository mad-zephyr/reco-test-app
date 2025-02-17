import clsx from 'clsx';
import { FC, PropsWithChildren, TdHTMLAttributes } from 'react';

import styles from './styles.module.sass';

type TCell = TdHTMLAttributes<HTMLTableCellElement> & {
  borderBottom?: boolean;
};

export const Cell: FC<PropsWithChildren<TCell>> = ({
  children,
  borderBottom = true,
  ...rest
}) => {
  return (
    <td
      className={clsx(styles.td, { [styles.td__border]: borderBottom })}
      {...rest}
    >
      {children}
    </td>
  );
};
