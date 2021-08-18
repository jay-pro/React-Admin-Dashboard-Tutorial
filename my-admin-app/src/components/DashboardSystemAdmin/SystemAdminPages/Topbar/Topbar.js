import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
} from "@material-ui/icons"; /* Icon de cho depp :v : NotificationsNone: thong bao, Language: ngoai ngu, Setting: cai dat */

function Topbar() {
  return (
    <div className="sa-topbar">
      <div className="sa-topbarWrapper">
        <div className="sa-topLeft">
          <span className="sa-logo">System Admin</span>
        </div>
        <div className="sa-topRight">
          <div className="sa-topbarIconContainer">
            {" "}
            {/* icon thong bao */}
            <NotificationsNone />
            <span className="sa-topIconBadge">2</span>
          </div>
          <div className="sa-topbarIconContainer">
            {" "}
            {/* icon ngoai ngu */}
            <Language />
            <span className="sa-topIconBadge">2</span>
          </div>
          <div className="sa-topbarIconContainer">
            {" "}
            {/* icon cai dat */}
            <Settings />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptdXJdRPk5ZhtbbkFnplFyrwOEaJ8rI-xh64BiudtZSWg9upt-QxaPw4I1Q_fkWdYHy4&usqp=CAU"
            alt=""
            className="sa-topAvatar"
          />{" "}
          {/* anh dai dien */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
