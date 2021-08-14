import React from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons'; /* Icon de cho depp :v : NotificationsNone: thong bao, Language: ngoai ngu, Setting: cai dat */

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">System Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer"> {/* icon thong bao */}
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer"> {/* icon ngoai ngu */}
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer"> {/* icon cai dat */}
                        <Settings />
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptdXJdRPk5ZhtbbkFnplFyrwOEaJ8rI-xh64BiudtZSWg9upt-QxaPw4I1Q_fkWdYHy4&usqp=CAU"
                        alt="" className="topAvatar" /> {/* anh dai dien */}
                </div>
            </div>
        </div>
    )
}

export default Topbar
