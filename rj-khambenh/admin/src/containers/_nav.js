import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Khám Bệnh"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Lệ Phí",
    to: "/khambenh/lephi",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Phiếu đăng ký khám bệnh",
    to: "/khambenh/phieudangkykhambenh",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Phiếu xuất nhập viện",
    to: "/khambenh/phieuxuatnhapvien",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bệnh nhân",
    to: "/khambenh/benhnhan",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bác sĩ",
    to: "/khambenh/bacsi",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Khoa",
    to: "/khambenh/khoa",
    icon: "cil-drop",
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
