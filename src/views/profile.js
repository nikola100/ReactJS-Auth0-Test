import React from "react";
import { JsonToTable } from "react-json-to-table";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 text-dark p-4">
          <JsonToTable json={user} /> {/*Uses react-json-to-table package to display user's information in a table*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
