import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC } from 'react';

// import styles from './styles.module.sass';
import type { TTable } from './table.interface';

export const TableView: FC<TTable> = ({ data, body }) => {
  const { head } = data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((item, i) => (
              <TableCell key={i}>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
};
