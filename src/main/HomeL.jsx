import React, { useMemo, useState } from "react";
import Home from "../pages/Home";
import { getCurrentUser } from "../api/FbApi";
import Topbar from "../components/Elements/Topbar";

export default function HomeL() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Home currentUser={currentUser} />
    </div>
  );
}
