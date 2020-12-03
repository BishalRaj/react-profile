import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
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
      </Datagrid>
    </List>
  );
};

export default aboutList;
