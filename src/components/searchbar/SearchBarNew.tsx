import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

const SearchBarNew = () => {
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
          <TextField
            id="outlined-search"
            label="Search Location"
            type="search"
            sx={{ mr: "7px" }}
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
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <IconButton
            color="primary"
            aria-label="upload picture"
            size="large"
            component={Link}
            to='/search'
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SearchBarNew;
