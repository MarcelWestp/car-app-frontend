import User from './../../../models/User'
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators } from "./../../../state/index"

const ProfileTrips = ({ user }: { user: User }) => {

  const dispatch = useDispatch();
  const { deleteBookingById } = bindActionCreators(actionCreators, dispatch);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, cellValues: any) => {
   deleteBookingById(cellValues.row.id)
  };

  const columns: GridColDef[] = [
    {
      field: 'from',
      headerName: 'From',
      width: 250,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'until',
      headerName: 'Until',
      width: 250,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'car',
      headerName: 'Car',
      width: 250,
      headerAlign: 'center',
      align: 'center',
      renderCell: (cellValues:any) => (
        <strong>
          <Link to={`/car/${cellValues.value}`} target="_blank" style={{ textDecoration: 'none' }}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ marginLeft: 1, mt: 3, mb: 2, bgcolor: "primary.main" }}>
              Link to car
            </Button>
          </Link>
        </strong>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 250,
      headerAlign: 'center',
      align: 'center',
      renderCell: (cellValues:any) => (
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

  let rows = user.bookings.map(trip => ({ id: trip.id, from: trip.from, until: trip.until, car: trip.carId, delete: 0 }))
  
  return (
    <div>
      {user.bookings.length > 0 ? <Container sx={{ marginTop: 5, height: 500, width: 1045 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          rowHeight={75}
          disableSelectionOnClick
        />
      </Container>
        :
        <Typography component="p" variant="body2">
          Book your next dreamcar
        </Typography>
      }
    </div>
  )
}

export default ProfileTrips