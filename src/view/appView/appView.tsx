import { TableCell, TableRow } from '@mui/material';
import { FC, useState } from 'react';

import { tableData } from '../../assets/mocks';
import { AppDetails } from '../../common/components';
import { Htag } from '../../common/ui';
import { Sidebar, TableView } from '../../modules';
import { CellData } from '../../modules/table/table.interface';

const SIDEBAR_TITLE = 'App overview';

export const AppView: FC = () => {
  const [details, setDetails] = useState<CellData | null>();

  const handleCloseSidebar = () => {
    setDetails(null);
  };

  const handleSeeDetails = (data: CellData) => {
    setDetails(data);
  };

  return (
    <>
      <Htag tag="h1" title="App inventory" />
      <TableView
        data={tableData.table}
        body={
          <>
            {tableData.table.rows.map((cell, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleSeeDetails(cell)}
              >
                <TableCell component="th" scope="row">
                  {cell.app.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {cell.app.category}
                </TableCell>
                <TableCell component="th" scope="row">
                  {cell.app.id}
                </TableCell>
              </TableRow>
            ))}
          </>
        }
      />

      <Sidebar
        onClose={handleCloseSidebar}
        isOpen={!!details}
        title={SIDEBAR_TITLE}
      >
        {details && <AppDetails data={details} />}
      </Sidebar>
    </>
  );
};
