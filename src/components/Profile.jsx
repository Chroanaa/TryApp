import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(isAuthenticated, user);
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    isAuthenticated && (
      <div className="flex flex-row">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
