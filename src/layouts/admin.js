import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import aboutList from "../components/aboutList";

export default function AdminLayout() {
  const dataProvider = jsonServerProvider("http://localhost:8080");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="about" list={aboutList} />
    </Admin>
  );
}
