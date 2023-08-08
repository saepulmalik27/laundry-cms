import React from "react";
import { twMerge } from "tailwind-merge";
import moment from 'moment'
interface BarChartProps {
  data: { created_at: string; total: number; income: string }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.total));

  return (
    <div className={twMerge("grid grid-cols-7 md:gap-4 lg:gap-10 h-64",)}>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-2 group  relative h-full flex flex-col items-center justify-end"
          title={`Date: ${item.created_at}\nTotal: ${item.total}\nIncome: ${item.income}`}
        >
          <p className="invisible group-hover:visible text-[10px] md:text-[13px] text-secondary-300 ">{item.total} <span className="hidden md:inline-block">items</span> </p>
          <div
            className="w-full bg-secondary-300 group-hover:bg-lightblue-500 rounded-md"
            style={{
              height: `${(item.total / maxValue) * 100}%`,
            }}
          ></div>
          <p className="text-[10px] md:text-[13px] text-stroke">{moment(item.created_at).format("DD/MM") }</p>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
