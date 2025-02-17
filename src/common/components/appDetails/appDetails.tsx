import { FC } from 'react';

import { Table } from '../../../modules';
import { CellData } from '../../../modules/table/table.interface';
import styles from './styles.module.sass';

type TAppDetails = { data: CellData };

export const AppDetails: FC<TAppDetails> = ({ data }) => {
  const { app, users, connector } = data;

  return (
    <div>
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

      <div>
        <Table data={{ head: [{ title: 'username' }], rows: [] }} />
      </div>
    </div>
  );
};
