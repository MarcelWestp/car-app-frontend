import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate, } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../state/index";
import { RootState } from "./../../state/reducers/index";

const LoginForm = () => {

  const dispatch = useDispatch();
  const { getValidateUser } = bindActionCreators(
    actionCreators,
    dispatch
  );

  let navigate = useNavigate();

  const userValidate = useSelector((state: RootState) => state.user);

  const handleSubmit =  () => {
    if (email !== "" && password !== "") {
      getValidateUser(email, password);
    } else {
      /*TODO Snackbar with error message "Username / email or password are required*/
    }
  };

  React.useEffect(() => {
    if (userValidate.id !== 0) {
      navigate(`/profile`);
    }
  }, [userValidate]);

  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value as string)
  }

  return (
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: '72vh'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(event, setEmail)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(event, setPassword)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}
              onClick={handleSubmit}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" style={{ textDecoration: 'none' }} >Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/signup" style={{ textDecoration: 'none' }} >{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
};

export default LoginForm;
