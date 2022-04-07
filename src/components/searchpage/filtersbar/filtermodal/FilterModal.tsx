import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select  from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FilterModal = ({
  open,
  handleOpen,
  doors,
  handleDoorsChange,
  make,
  handleMakeChange,
  handleClear,
}: {
  open: boolean;
  handleOpen: Function;
  doors:string;
  handleDoorsChange: any;
  make: string;
  handleMakeChange: any;
  handleClear: any;
}) => {
  return (
    <div>
      <div className="name">Filter</div>
      <Modal
        open={open}
        onClose={() => handleOpen()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter
          </Typography >
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 2 }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Doors</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={doors}
                  label="Doors"
                  onChange={handleDoorsChange}
                >
                  <MenuItem value={0}>None</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, marginTop: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={make}
                  label="Make"
                  onChange={handleMakeChange}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
                  <MenuItem value={"Ford"}>Ford</MenuItem>
                  <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                  <MenuItem value={"BMW"}>BMW</MenuItem>
                  <MenuItem value={"Fiat"}>Fiat</MenuItem>
                  <MenuItem value={"Jeep"}>Jeep</MenuItem>
                  <MenuItem value={"Dodge"}>Dodge</MenuItem>
                  <MenuItem value={"Tesla"}>Tesla</MenuItem>
                  <MenuItem value={"Nissan"}>Nissan</MenuItem>
                  <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                  <MenuItem value={"Delorean"}>Delorean</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="outlined"
              size="medium"
              onClick={handleClear}
              sx={{ marginTop: 3 }}
            >
              Clear
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default FilterModal;
