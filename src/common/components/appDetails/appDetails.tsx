import { TableCell, TableRow } from '@mui/material';
import { FC } from 'react';

import { TableView } from '../../../modules';
import { CellData } from '../../../modules/table/table.interface';
import styles from './styles.module.sass';

type TAppDetails = { data: CellData };

export const AppDetails: FC<TAppDetails> = ({ data }) => {
  const { app, users, connector } = data;

  return (
    <div className={styles.main}>
      <div>
        <img src={app.avatar} alt={app.name} />
        <span>{app.name}</span>
      </div>

      <div className={styles.info}>
        <div>
          <span>App name: </span> <span>{app.name}</span>
        </div>
        <div>
          <span>Category:</span> <span>{app.category}</span>
        </div>
        <div>
          <span>Users:</span> <span>{users.length}</span>
        </div>
        <div>
          <span>Connector:</span>
          <span>
            <img src={connector.avatar} alt={app.name} />
          </span>
        </div>
        <div>
          <span>Last claification:</span>
          <span>{connector.lastUsed.getDate()}</span>
        </div>
      </div>

      <TableView
        data={{ head: [{ title: 'username' }], rows: [] }}
        body={
          <>
            {users.map((item, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.email}
                </TableCell>
              </TableRow>
            ))}
          </>
        }
      />
    </div>
  );
};
