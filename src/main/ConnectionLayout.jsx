import React, { useMemo, useState } from "react";
import Connections from "../pages/Connections";
import { getCurrentUser } from "../api/FbApi";
import Topbar from "../components/Elements/Topbar";

export default function ConnectionLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Connections currentUser={currentUser} />
    </div>
  );
}
