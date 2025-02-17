import { FC } from 'react';

import { Cell, TableRow } from './components';
import styles from './styles.module.sass';
import type { CellData, TTable } from './table.interface';

export const Table: FC<TTable> = ({ data, onSetDetails }) => {
  const { head, rows } = data;

  const handleSort = () => {
    console.log('sort');
  };

  const handleSeeDetails = (data: CellData) => {
    if (onSetDetails) {
      onSetDetails(data);
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <TableRow>
          {head.map((col, i) => {
            return (
              <Cell key={i} scope="col">
                <span style={{ display: 'flex', columnGap: '8px' }}>
                  {col.title}
                  <div onClick={handleSort}>sort</div>
                </span>
              </Cell>
            );
          })}
        </TableRow>
      </thead>

      <tbody>
        {rows.map((item, i) => {
          return (
            <TableRow
              className={styles.row}
              key={i}
              onClick={() => handleSeeDetails(item)}
            >
              <Cell scope="row">
                <span>
                  <img alt={item.app.name} src={item.app.avatar} />
                  {item.app.name}
                </span>
              </Cell>
              <Cell>{item.app.category}</Cell>
              <Cell>{item.connector.avatar}</Cell>
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
};
