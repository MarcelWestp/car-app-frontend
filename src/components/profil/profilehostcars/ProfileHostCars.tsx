import User from './../../../models/User'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';



const ProfileHostCars = ({ user }: { user: User }) => {

  let rows = user.cars.map(car => ({ id: car.id, make: car.make, model: car.model, year: car.year, delete: 0 }))

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, cellValues: any) => {
      console.log(cellValues)
  };

  const columns: GridColDef[] = [
    {
      field: 'make',
      headerName: 'Make',
      width: 150,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 150,
    },
    {
      field: 'year',
      headerName: 'Year',
      type: 'number',
      width: 50,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: (cellValues) => (
        <strong>
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
            sx={{ marginLeft: 1, mt: 3, mb: 2, bgcolor: "primary.main" }}>
            <DeleteForeverIcon />
          </Button>
        </strong>
      ),
    }
  ];

  return (
    <div>
      <Button >
        <Link to="/hostacar">
          Host a Car
        </Link>
      </Button>
      {user.cars.length > 0 ? <Container sx={{ height: 375, width: 560 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Container>
        :
        <Typography component="p" variant="body2">
          Host your own car and make people happy.
        </Typography>
      }
    </div>
  )
}

export default ProfileHostCars