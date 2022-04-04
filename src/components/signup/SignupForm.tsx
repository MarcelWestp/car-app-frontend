import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Datepicker from './Datepicker'
import PostUser from './../../models/PostUser'
import { useSelector,useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "./../../state/index"
import { RootState } from './../../state/reducers/index'
import { format } from 'date-fns'
import { useNavigate, } from "react-router-dom";


const theme = createTheme();

const Signup = () => {

  const [userName, setUserName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [firstName, setFirstName] = React.useState<string>("")
  const [lastName, setLastName] = React.useState<string>("")
  const [dob, setDob] = React.useState<Date>(new Date())
  const [address, setAddress] = React.useState<string>("")
  const [houseNumber, setHouseNumber] = React.useState<string>("")
  const [zip, setZip] = React.useState<string>("")
  const [city, setCity] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("")

  const dispatch = useDispatch();
  const { postUser } = bindActionCreators(actionCreators, dispatch);

  const user = useSelector((state: RootState) => state.user);

  let navigate = useNavigate();

  React.useEffect(() => {
    if (user.id !== 0) {
      navigate(`/profile`)
    }
  }, [user]);

  const handleSubmit = () => {
    if (userName !== "" || email !== "" || password !== "" ||
    passwordConfirm !== "" || firstName !== "" || lastName !== "" ||
    email !== "" || address !== "" || city !== "" ||
    zip !== "" || houseNumber !== "" || dob.toLocaleString() !== undefined) {
      if (password === passwordConfirm) {
        let dateOfBirth: string = format(dob, 'yyyy-MM-dd')
        let addUser: PostUser = {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          email: email,
          password: password,
          dateOfBirth: dateOfBirth,
          address: {
            street: address,
            number: houseNumber,
            city: city,
            zip: Number(zip),
          },
          ratings: [],
        }
        postUser(addUser);
      }
    }
  };

  const handleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setUserName)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setEmail)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Firstname"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setFirstName)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Lastname"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setLastName)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Datepicker value={dob} setValue={setDob} />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="Address"
                  name="adress"
                  autoComplete="adress"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setAddress)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="houseNumber"
                  label="Housenumber"
                  name="housenumber"
                  autoComplete="housenumber"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setHouseNumber)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="zip"
                  label="Zip"
                  name="zip"
                  autoComplete="zip"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setZip)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setCity)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setPassword)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Password confirm"
                  type="password"
                  id="passwordconfirm"
                  autoComplete="new-password"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeHandler(event, setPasswordConfirm)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" >
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup