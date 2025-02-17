import { FC, useState } from 'react';

import { tableData } from '../../assets/mocks';
import { AppDetails } from '../../common/components';
import { Htag } from '../../common/ui';
import { Sidebar, Table } from '../../modules';
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
      <Table data={tableData.table} onSetDetails={handleSeeDetails} />

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
