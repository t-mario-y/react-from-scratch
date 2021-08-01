import React from "react";
import { MyComponent } from "./MyComponent";

export const App = (): JSX.Element => {
  return (
    <div>
      <h1>
        Hello <MyComponent firstName="John" lastName="Cage" />
      </h1>
    </div>
  );
};
