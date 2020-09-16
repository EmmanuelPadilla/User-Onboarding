import React from "react";

export default function AdvancedForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="formContainer" on Submit={onSubmit}>
      <div className="formsubmit">
        <h2>Add New User</h2>
        <button disabled={disabled}>SUBMIT</button>
        <div className="errors">
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>

        <div className='formImputs'>
            <h4>Please Enter your Information</h4>

            <label> First Name

                <input
                value={values.first_name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>

            <label> Last Name
                <input
                value={values.first_name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>

            <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label> TOS

                <input
                value={values.tos}
                onChange={onChange}
                name='tos'
                type='checkbox'
                />
            </label>
        </div>
    </form>
  );
}
