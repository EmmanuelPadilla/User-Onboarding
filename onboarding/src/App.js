import React, { useEffect, useState } from "react";
import User from "./user";
import AdvancedForm from "./Form";
import "./App.css";
import schema from "./schema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const initialUser = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err, "i messed up");
      });
  };

  const postNewuser = (newUser) => {
    axios
      .post("https://regres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err, "couldnt post it");
      })
      .finally(() => {});
  };

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(valid => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: "",
  //       });
  //     });
  //     .catch(err => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0]
  //       })
  //     })
  // };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(value);
    setFormValues({
      ...formValues,
      [name]: "",
    });
  };

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      tos: formValues.tos,
    };
    postNewuser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Acme INC Employee Login</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <AdvancedForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
