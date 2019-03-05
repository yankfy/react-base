import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import PageLayout from "@/pages/_layout/PageLayout";
import HomePage from "@/pages/home/Home";
import { TodoPage } from "@/pages/todo/Todo";
import AboutPage from "@/pages/about/About";
import ListPage from "@/pages/list/List";

export const routes: RouteConfig[] = [
  {
    path: "/home",
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: "/todo",
    component: () => <TodoPage />,
  },
  {
    path: "/about",
    component: () => <AboutPage />,
  }
  ,
  {
    path: "/list",
    component: () => <ListPage />,
  },
];

export const route = (
  <Switch>
    <Route path="/" component={PageLayout} />
  </Switch>
);
