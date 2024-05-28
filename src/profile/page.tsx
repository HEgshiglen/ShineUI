import React from "react";
import TextField from "components/TextField";
import Checkbox from "components/Checkbox";

export const Profile = () => {
  return (
    <div>
      <h1>Тавтай морилно уу.</h1>
      <div>
        <TextField size="base" contrast="light" label="Enter your name" />
        <TextField size="small" contrast="dark" label="Enter your password" />
        <Checkbox label="" contrast="dark" />
      </div>
    </div>
  );
};
