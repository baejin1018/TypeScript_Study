import React, { useState } from "react";

import Profile from "./Profile";

const box: JSX.Element = <div></div>;

function App() {
  const [user, setUser] = useState();
  return (
    <div>
      {box}
      <Profile name="철수"></Profile>
    </div>
  );
}

export default App;
