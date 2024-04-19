import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  return (
    isAuthenticated && (
      <div className="flex flex-row">
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
