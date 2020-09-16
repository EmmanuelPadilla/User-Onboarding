import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Hang on a sec while I get that for you...</h3>;
  }

  return (
    <div className="userContainer">
      <h2>
        Name: {details.first_name} {details.last_name}
      </h2>
      <h4>Email: {details.email}</h4>
      <h4>I have read Terms of service.{details.tos}</h4>
    </div>
  );
}

export default User;
