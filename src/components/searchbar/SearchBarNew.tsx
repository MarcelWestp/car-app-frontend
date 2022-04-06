import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import citys from "./citys";

import { Link } from "react-router-dom";

const SearchBarNew = ({ handleLocationChange }: { handleLocationChange: any }) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        borderRadius: "55px",
        width: 630,
        height: 90,
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={citys.map((city) => city)}
            renderInput={(params) => (
              <TextField
                onChange={handleLocationChange}
                style={{ width: 200 }}
                sx={{ mr: "7px" }}
                {...params}
                label="Search Location"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="From"
              endText="Until"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} sx={{ mr: "7px" }} />
                  <TextField {...endProps} sx={{ mr: "7px" }} />
                </React.Fragment >
              )}
            />
          </LocalizationProvider >
          <IconButton
            color="primary"
            aria-label="upload picture"
            size="large"
            component={Link}
            to='/search'
          >
            <SearchIcon />
          </IconButton>
        </Toolbar >
      </Container >
    </AppBar >
  );
};

export default SearchBarNew;
