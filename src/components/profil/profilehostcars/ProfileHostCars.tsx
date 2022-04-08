import User from './../../../models/User'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators } from "./../../../state/index";

const ProfileHostCars = ({ user }: { user: User}) => {

  const dispatch = useDispatch();
  const { deleteCarById } = bindActionCreators(actionCreators, dispatch);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, cellValues: any) => {
    deleteCarById(cellValues.row.id)
  };
  
  const columns: GridColDef[] = [
    {
      field: 'make',
      headerName: 'Make',
      width: 250,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 250,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
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
  
  let rows = user.cars.map(car => ({ id: car.id, make: car.make, model: car.model, year: car.year, delete: 0 }))
  
  return (
    <div>
      <Button 
      variant="contained"
      color="primary"
      style={{ margin: '10px 0' }}
      >
        <Link to="/hostacar" style={{ textDecoration: 'none', color: 'white' }}>
          Host a Car
        </Link>
      </Button>
      {user.cars.length > 0 ? <Container sx={{ height: 500, width: 820 }}>
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
          Host your own car and make people happy.
        </Typography>
      }
    </div>
  )
}

export default ProfileHostCars