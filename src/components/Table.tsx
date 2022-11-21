import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useEffect, useState } from 'react';
import classes from './Table.module.scss';

const COLUMN_DEFS = [
  { field: 'athlete', minWidth: 200, headerCheckboxSelection: true, checkboxSelection: true, },
  { field: 'age', maxWidth: 90 },
  { field: 'country', minWidth: 150 },
  { field: 'year', maxWidth: 90 },
  { field: 'date', minWidth: 150 },
  { field: 'sport', minWidth: 150 },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];

const DEFAULT_COL_DEF = {
  sortable: true,
  flex: 1,
  minWidth: 50,
};

export default function Table() {
  const [rowData, setRowData] = useState();

  const cellClickedListener = useCallback((event: any) => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  return (
    <div className={classes.root}>
      <h2>Table</h2>
      <div className={`ag-theme-alpine ${classes.table}`}>
        <AgGridReact
          rowData={rowData}
          columnDefs={COLUMN_DEFS}
          defaultColDef={DEFAULT_COL_DEF}
          onCellClicked={cellClickedListener}
        />
      </div>
    </div>
  )
};
