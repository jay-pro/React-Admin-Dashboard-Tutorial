import React from "react";
import "./sidebar.css";
import { Check, Close, MoreHoriz } from "@material-ui/icons"; //Title quản lý khóa học
import { Event, Today, DateRange } from "@material-ui/icons"; //Title thống kế hệ thống
import { Add, Build, Cancel } from "@material-ui/icons"; //Title Quản lý users
import { AccountCircle, ExitToApp } from "@material-ui/icons"; //Title System Admin Account

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quản lý khóa học</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem" /* "sidebarListItem active" */>
                <MoreHoriz className="sidebarIcon" />
                Khóa học chưa duyệt
              </li>
              <li className="sidebarListItem">
                <Check className="sidebarIcon" />
                Khóa học đã duyệt
              </li>
              <li className="sidebarListItem">
                <Close className="sidebarIcon" />
                Khóa học bị từ chối
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quản lý users</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <Add />
                Thêm users
              </li>
              <li className="sidebarListItem">
                <Build />
                Sửa users
              </li>
              <li className="sidebarListItem">
                <Cancel />
                Xóa users
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Thống kê hệ thống</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <Event />
                Theo tuần
              </li>
              <li className="sidebarListItem">
                <Today />
                Theo tháng
              </li>
              <li className="sidebarListItem">
                <DateRange />
                Theo năm
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">System Admin Account</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AccountCircle />
                Chỉnh sửa tài khoản
              </li>
              <li className="sidebarListItem">
                <ExitToApp />
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
