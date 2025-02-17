import { ReactNode } from 'react';

export type TColumn = { title: string };

type TApp = {
  id: string | number;
  name: string;
  avatar: string;
  category: string;
};

type TConnector = {
  name: string;
  avatar: string;
  lastUsed: Date;
};

type TUser = {
  avatar: string;
  email: string;
};

export type CellData = {
  app: TApp;
  connector: TConnector;
  users: TUser[];
};

export type TTable = {
  data: {
    head: TColumn[];
    rows: CellData[];
  };
  body: ReactNode;
};
