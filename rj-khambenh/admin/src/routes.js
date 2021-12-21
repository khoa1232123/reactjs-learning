import React from "react";
import Categories from "./views/Categories";
import Posts, { PostForm } from "./views/Posts";
import UpdateUser from "./views/users/UpdateUser";

// Button
const Charts = React.lazy(() => import("./views/Charts"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));

// Icon
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const CreateUser = React.lazy(() => import("./views/users/CreateUser"));

const Bacsi = React.lazy(() => import("./views/khambenh/Bacsi"));
const Khoa = React.lazy(() => import("./views/khambenh/Khoa"));
const Benhnhan = React.lazy(() => import("./views/khambenh/Benhnhan"));
const Pdkkb = React.lazy(() => import("./views/khambenh/Pdkkb"));
const Pxnv = React.lazy(() => import("./views/khambenh/Pxnv"));
const Lephi = React.lazy(() => import("./views/khambenh/Lephi"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },

  { path: "/charts", name: "Charts", component: Charts },

  { path: "/users", exact: true, name: "Users", component: Users },
  {
    path: "/users/create",
    exact: true,
    name: "Create User",
    component: CreateUser,
  },
  {
    path: "/users/update/:id",
    exact: true,
    name: "Update User",
    component: UpdateUser,
  },
  {
    path: "/users/find/:id",
    exact: true,
    name: "User Details",
    component: User,
  },
  {
    path: "/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },
  {
    path: "/posts",
    exact: true,
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/updated/:id",
    exact: true,
    name: "Post Update",
    component: PostForm,
  },
  {
    path: "/posts/create",
    exact: true,
    name: "Post Create",
    component: PostForm,
  },
  {
    path: "/khambenh/bacsi",
    exact: true,
    name: "Bác sĩ",
    component: Bacsi,
  },
  {
    path: "/khambenh/khoa",
    exact: true,
    name: "Khoa",
    component: Khoa,
  },
  {
    path: "/khambenh/benhnhan",
    exact: true,
    name: "Bệnh nhân",
    component: Benhnhan,
  },
  {
    path: "/khambenh/phieudangkykhambenh",
    exact: true,
    name: "Phiếu đăng ký khám bệnh",
    component: Pdkkb,
  },
  {
    path: "/khambenh/phieuxuatnhapvien",
    exact: true,
    name: "Phiếu xuất nhập viện",
    component: Pxnv,
  },
  {
    path: "/khambenh/lephi",
    exact: true,
    name: "Lệ Phí",
    component: Lephi,
  },
];

export default routes;
