import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FbApi";
import Topbar from "../components/Elements/Topbar";
import Profile from "../pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Profile currentUser={currentUser} />
    </div>
  );
}
