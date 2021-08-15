import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,000</span>
          <span className="featuredMoneyRate">
            -$200 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Lượt đăng ký</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200</span>
          <span className="featuredMoneyRate">
            -20 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Lượt ghé thăm</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">340</span>
          <span className="featuredMoneyRate">
            +120 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
