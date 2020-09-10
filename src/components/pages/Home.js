import React from "react";
import Users from "../Users";
import Search from "../Search";

export default function Home() {
  return (
    <React.Fragment>
      <Search />
      <Users />
    </React.Fragment>
  );
}
