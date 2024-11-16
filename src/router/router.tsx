import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "../pages/home";
import { RouteObj } from "./route-object";

export const Routes = () => {
  const routes: RouteObj[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return useRoutes(routes as RouteObject[]);
};
