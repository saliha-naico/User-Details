import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import ButtonComponent from '../../components/Button/Button';
import { Container, Grid } from "@material-ui/core";
import Label from '../../components/Label/Label';
import { useForm } from "react-hook-form";
import "./RegistrationPage.scss";
import { useHistory,Link } from "react-router-dom";

type userData = {
  FirstName: string;
  LastName: string;
  Email: string;
  Username: string;
  Password: string;
  Mobile: number;
  Title:string;
};

export default function Registeration() {
  const history = useHistory();
  const { register, handleSubmit, errors} = useForm<userData>();
  const onSubmit = (data: userData) => {
    localStorage.setItem('Username',data.Username);
    localStorage.setItem('Password',data.Password);
    localStorage.setItem('Email',data.Email);
    localStorage.setItem('Mobile', JSON.stringify(data.Mobile));
    localStorage.setItem('FirstName',data.FirstName);
    localStorage.setItem('LastName',data.LastName);
    localStorage.setItem('Title',data.Title);
      history.push('/');
  };


  return (
    <Auxillary>
      <Container maxWidth="sm">
        <Grid item xs={12}>
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Label label="Username">Username</Label>
            <input name="Username" type="text" ref={register({ required: true })} />
            {errors.Username && <p>Please Enter a valid Username.</p>}
            <Label label="Title">Name Title</Label>
            <input name="Title" type="text" ref={register()} />
            <Label label="FirstName">FirstName</Label>
            <input name="FirstName" type="text" ref={register({ required: true })} />
            {errors.FirstName && <p>Please Enter a valid FirstName.</p>}
            <Label label="LastName">LastName</Label>
            <input name="LastName" type="text" ref={register()} />
            <Label label="Email">Email</Label>
            <input name="Email" type="text" ref={register()} />
            <Label label="Password">Password</Label>
            <input name="Password" ref={register({ required: true })} type="Password" />
            {errors.Password && <p>Please Enter a valid Password.</p>}
            <input name="Mobile"  ref={register()} type="tel" />
            <ButtonComponent label="Register" type="submit " ></ButtonComponent>
            <Link to="/">Login</Link>
          </form>
        </Grid>
      </Container>
    </Auxillary>
  );
}
