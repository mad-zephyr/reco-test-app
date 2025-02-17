import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.sass';

type TTableRow = HTMLAttributes<HTMLTableRowElement> & {};

export const TableRow: FC<PropsWithChildren<TTableRow>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <tr className={`${styles.tableRow} ${className}`} {...rest}>
      {children}
    </tr>
  );
};
