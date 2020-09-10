import React from "react";
import { useStateValues } from "../context/StateProvider";

import Spinner from "../images/loading.gif";
import UserItem from "../components/UserItem";

const User = () => {
  const [{ users, loading }] = useStateValues();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="all-users">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default User;
