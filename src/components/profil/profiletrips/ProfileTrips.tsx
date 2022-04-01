import User from './../../../models/User'
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProfileTrips = ({ user }: { user: User }) => {

  const columns: GridColDef[] = [
    {
      field: 'from',
      headerName: 'From',
      width: 150,
    },
    {
      field: 'until',
      headerName: 'Until',
      width: 150,
    },
    {
      field: 'car',
      headerName: 'Car',
      width: 150,
      renderCell: (params: GridRenderCellParams<number>) => (
        <strong>
          <Link to={`/car/${params.value}`} target="_blank">
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ marginLeft: 1, mt: 3, mb: 2, bgcolor: "secondary.main" }}>
              Link to car
            </Button>
          </Link>
        </strong>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: (params: GridRenderCellParams<number>) => (
        <strong>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ marginLeft: 1, mt: 3, mb: 2, bgcolor: "secondary.main" }}>
            <DeleteForeverIcon />
          </Button>
        </strong>
      ),
    }
  ];

  let rows = user.bookings.map(trip => ({ id: trip.id, from: trip.from, until: trip.until, car: trip.carId, delete: 0 }))

  return (
    <div>
      {user.bookings.length > 0 ? <Container sx={{ marginTop: 5, height: 375, width: 675 }}>
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
        <p>Book your next dreamcar</p>
      }
    </div>
  )
}

export default ProfileTrips