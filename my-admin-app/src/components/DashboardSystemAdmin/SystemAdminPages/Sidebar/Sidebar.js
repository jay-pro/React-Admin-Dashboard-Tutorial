import React from "react";
import "./sidebar.css";
import { Check, Close, MoreHoriz } from "@material-ui/icons"; //Title quản lý khóa học
import { Event, Today, DateRange } from "@material-ui/icons"; //Title thống kế hệ thống
import { Add, Build, Cancel } from "@material-ui/icons"; //Title Quản lý users
import { AccountCircle, ExitToApp } from "@material-ui/icons"; //Title System Admin Account

function Sidebar() {
  return (
    <div>
      <div className="sa-sidebar">
        <div className="sa-sidebarWrapper">
          <div className="sa-sidebarMenu">
            <h3 className="sa-sidebarTitle">Quản lý khóa học</h3>
            <ul className="sa-sidebarList">
              <li className="sa-sidebarListItem" /* "sidebarListItem active" */>
                <MoreHoriz className="sa-sidebarIcon" />
                Khóa học chưa duyệt
              </li>
              <li className="sa-sidebarListItem">
                <Check className="sa-sidebarIcon" />
                Khóa học đã duyệt
              </li>
              <li className="sa-sidebarListItem">
                <Close className="sa-sidebarIcon" />
                Khóa học bị từ chối
              </li>
            </ul>
          </div>

          <div className="sa-sidebarMenu">
            <h3 className="sa-sidebarTitle">Quản lý users</h3>
            <ul className="sa-sidebarList">
              <li className="sa-sidebarListItem">
                <Add />
                Thêm users
              </li>
              <li className="sa-sidebarListItem">
                <Build />
                Sửa users
              </li>
              <li className="sa-sidebarListItem">
                <Cancel />
                Xóa users
              </li>
            </ul>
          </div>

          <div className="sa-sidebarMenu">
            <h3 className="sa-sidebarTitle">Thống kê hệ thống</h3>
            <ul className="sa-sidebarList">
              <li className="sa-sidebarListItem">
                <Event />
                Theo tuần
              </li>
              <li className="sa-sidebarListItem">
                <Today />
                Theo tháng
              </li>
              <li className="sa-sidebarListItem">
                <DateRange />
                Theo năm
              </li>
            </ul>
          </div>

          <div className="sa-sidebarMenu">
            <h3 className="sa-sidebarTitle">System Admin Account</h3>
            <ul className="sa-sidebarList">
              <li className="sa-sidebarListItem">
                <AccountCircle />
                Chỉnh sửa tài khoản
              </li>
              <li className="sa-sidebarListItem">
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
