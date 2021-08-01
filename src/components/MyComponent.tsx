import React from "react";

interface MyComponentProps {
  firstName: string;
  lastName: string;
}

export const MyComponent = (props: MyComponentProps): JSX.Element => {
  return (
    <span>
      {props.firstName} {props.lastName}.
    </span>
  );
};
