import React, {  useEffect } from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import ButtonComponent from '../../components/Button/Button';
import { Container, Grid } from "@material-ui/core";
import Label from '../../components/Label/Label';
import { useForm } from "react-hook-form";
import "./style.scss";
import { useHistory,Link } from "react-router-dom";
type FormData = {
  Username: string;
  Password: string;
};

export default function Login() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
   let username= localStorage.getItem('Username');
   let password= localStorage.getItem('Password');
   if(username&&password){
    if (data?.Username === username && data?.Password === password) {
      history.push('/home');
    }
   }
    else {
      alert("Authentication Error")
    }
  };


  return (
    <Auxillary>
      <Container maxWidth="sm">
        <Grid item xs={12}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label label="Username">Username</Label>
            <input name="Username" type="text" ref={register({ required: true })} />
            {errors.Username && <p>Please Enter a valid Username.</p>}
            <Label label="Password">Password</Label>
            <input name="Password" ref={register({ required: true })} type="Password" />
            {errors.Password && <p>Please Enter a valid Password.</p>}
            <ButtonComponent label="Login" type="submit " ></ButtonComponent>
            <Link to="/register">Register</Link>
          </form>
        </Grid>
      </Container>
    </Auxillary>
  );
}
