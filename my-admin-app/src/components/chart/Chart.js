import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
//link: https://recharts.org/en-US/examples

function Chart() {
  const data = [
    /* tìm đữo */
    {
      month: "Tháng 1",
      uv: 4000,
    },
    {
      month: "Tháng 2",
      uv: 3000,
    },
    {
      month: "Tháng 3",
      uv: 2000,
    },
    {
      month: "Tháng 4",
      uv: 2780,
    },
    {
      month: "Tháng 5",
      uv: 1890,
    },
    {
      month: "Tháng 6",
      uv: 2390,
    },
    {
      month: "Tháng 7",
      uv: 3490,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">Thống kê doanh thu</h3>

      {/* <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}/>
          <XAxis dataKey="month" stroke="#5550bd" />
          <Line type="monotone" dataKey="uv" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  );
}

export default Chart;
