import React from "react";
import { MyComponent } from "./MyComponent";
import { NotHMRComponent } from "./NotHMRComponent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>
        Hello <MyComponent firstName="John" lastName="Cage" />
      </h1>
    </div>
  );
};

export default App;
