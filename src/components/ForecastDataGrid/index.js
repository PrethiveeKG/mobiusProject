import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const ForecastDataGrid = () => {
  const TableTitle = styled(Typography)(({ theme }) => ({
    width: "100%",
    fontWeight: 600,
    fontSize: "0.9rem",
    paddingBlockStart: theme.spacing(1),
  }));

  const Container = styled(Box)(({ theme }) => ({
    height: "500px",
    width: "100%",
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.85rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.9rem",
      },
    },
    "& .MuiDataGrid-cellContent": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.75rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.85rem",
      },
    },
  }));

  const columns = [
    {
      field: "particulars",
      headerName: "Particulars",
      width: 220,
    },
    {
      field: "jan",
      headerName: "Jan 23",
      type: "number",
      width: 110,
    },
    {
      field: "feb",
      headerName: "Feb 23",
      type: "number",
      width: 110,
    },
    {
      field: "mar",
      headerName: "Mar 23",
      type: "number",
      width: 110,
    },
    {
      field: "apr",
      headerName: "Apr 23",
      type: "number",
      width: 110,
    },
    {
      field: "may",
      headerName: "May 23",
      type: "number",
      width: 110,
    },
    {
      field: "jun",
      headerName: "Jun 23",
      type: "number",
      width: 110,
    },
  ];

  //   we will get data from API in real scenarios
  const rows = [
    {
      id: 1,
      particulars: "Revenue",
      jan: 3382,
      feb: 1528,
      mar: 4838,
      apr: 311,
      may: 793,
      jun: 1966,
    },
    {
      id: 2,
      particulars: "Cost of Revenue",
      jan: 1255,
      feb: 4820,
      mar: 3452,
      apr: 3259,
      may: 1222,
      jun: 607,
    },
    {
      id: 3,
      particulars: "Gross Profit",
      jan: 2195,
      feb: 3137,
      mar: 1272,
      apr: 1834,
      may: 4600,
      jun: 370,
    },
    {
      id: 4,
      particulars: "Bad Debts",
      jan: 3895,
      feb: 2173,
      mar: 3139,
      apr: 757,
      may: 4988,
      jun: 2911,
    },
    {
      id: 5,
      particulars: "General & Administrative",
      jan: 4749,
      feb: 3001,
      mar: 4777,
      apr: 3315,
      may: 1992,
      jun: 2862,
    },
    {
      id: 6,
      particulars: "Professional Services",
      jan: 2127,
      feb: 4156,
      mar: 3815,
      apr: 1770,
      may: 2766,
      jun: 948,
    },
    {
      id: 7,
      particulars: "Cash",
      jan: 2044,
      feb: 1420,
      mar: 3576,
      apr: 4437,
      may: 4148,
      jun: 3249,
    },
    {
      id: 8,
      particulars: "Accounts Receivable",
      jan: 2373,
      feb: 3247,
      mar: 2124,
      apr: 1155,
      may: 3905,
      jun: 2171,
    },
    {
      id: 9,
      particulars: "Property & Euqipment",
      jan: 1861,
      feb: 2146,
      mar: 3349,
      apr: 904,
      may: 2491,
      jun: 4419,
    },
    {
      id: 10,
      particulars: "Accounts Payable",
      jan: 595,
      feb: 4859,
      mar: 2008,
      apr: 4304,
      may: 3315,
      jun: 2496,
    },
    {
      id: 11,
      particulars: "Liablities",
      jan: 357,
      feb: 3143,
      mar: 4564,
      apr: 3052,
      may: 536,
      jun: 2917,
    },
    {
      id: 12,
      particulars: "Equity Capital",
      jan: 4918,
      feb: 2210,
      mar: 2390,
      apr: 1462,
      may: 475,
      jun: 3067,
    },
    {
      id: 13,
      particulars: "Retained Earnings",
      jan: 2150,
      feb: 976,
      mar: 3141,
      apr: 4145,
      may: 4079,
      jun: 1527,
    },
    {
      id: 14,
      particulars: "Shareholder Equity",
      jan: 4890,
      feb: 452,
      mar: 1685,
      apr: 1973,
      may: 882,
      jun: 3795,
    },
    {
      id: 15,
      particulars: "Perpetual Growth",
      jan: 1476,
      feb: 2097,
      mar: 1524,
      apr: 3753,
      may: 1820,
      jun: 1691,
    },
    {
      id: 16,
      particulars: "Enterprice Value",
      jan: 3902,
      feb: 846,
      mar: 4330,
      apr: 2597,
      may: 738,
      jun: 1916,
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <TableTitle>Data View</TableTitle>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Container>
  );
};

export default ForecastDataGrid;
