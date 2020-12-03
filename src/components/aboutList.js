import React from "react";
import {
  List,
  Datagrid,
  TextField,
  // DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const aboutList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="_id" /> */}
        <TextField source="name" />
        <TextField source="dob" />
        <TextField source="address" />
        <TextField source="zip" />
        <TextField source="email" />
        <TextField source="phone" />
        <EditButton basePath="/about" />
        <DeleteButton basePath="/about" />
      </Datagrid>
    </List>
  );
};

export default aboutList;
