import * as React from 'react';
import {ButtonGroup, Button} from  '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import {Check as CheckIcon, Clear as ClearIcon} from '@material-ui/icons';

const renderActionButtons = (params) => {
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        style={{color:"green"}}
        onClick={() => {
            console.log(params.row.id)
        }}
      >
        <CheckIcon/>
      </Button>
      <Button
      style={{color:"red"}}
      onClick={() => {
        console.log(params.row.id)
      }}
      >
        <ClearIcon/>
      </Button>
  </ButtonGroup>
  )
}

export default function Demo() {
  const data  = {
    columns : [
      {
        field: "id",
        hide: true,
        editable: false
      },
      {
        field: "name",
        headerName: "Name",
        width: 150,
        hide: false,
        editable: false,
      },
      {
        field: "salesid",
        headerName: "Sales ID",
        width: 150,
        hide: false,
        editable: false
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        hide: false,
        editable: false
      },
      {
        field: "reqProdTier",
        headerName: "Request Product Tier",
        width: 250,
        hide: false,
        editable: false
      },
      {
        field: 'actionBtns',
        headerName: 'Actions',
        width: 150,
        renderCell: renderActionButtons,
        disableClickEventBubbling: true,
    },
      ],
    rows: [
      {
        id: "1",
        name: "Santanu",
        salesid: "3018427",
        email: "santanu.panda@lowes.com",
        reqProdTier: "Business User"
      },
      {
        id: "2",
        name: "Mohit",
        salesid: "3018422",
        email: "mohit@lowes.com",
        reqProdTier: "Business Developer"
      },
      {
        id: "3",
        name: "Santanu",
        salesid: "3018427",
        email: "santanu.panda@lowes.com",
        reqProdTier: "Business User"
      },
      {
        id: "4",
        name: "Mohit",
        salesid: "3018422",
        email: "mohit@lowes.com",
        reqProdTier: "Business Developer"
      },
      {
        id: "5",
        name: "Santanu",
        salesid: "3018427",
        email: "santanu.panda@lowes.com",
        reqProdTier: "Business User"
      },
      {
        id: "6",
        name: "Mohit",
        salesid: "3018422",
        email: "mohit@lowes.com",
        reqProdTier: "Business Developer"
      }
    ]
  }

  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <div style={{ height: "400px", width: '55vw' }}>
      <DataGrid
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
            console.log(newSelection)
            setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
        autoHeight={true}
        pageSize={20}
        {...data}
      />
    </div>
  );
}
