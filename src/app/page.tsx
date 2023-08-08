"use client";

import Avatar from "@/components/avatar/Avatar";
import BarChart from "@/components/chart/Chart";
import SelectBox from "@/components/selectbox/SelectBox";
import { USDcurrency } from "@/utils/helpers";
import SVG from "react-inlinesvg";

const listReport = [
  {
    name: "this week",
    id: "this_week",
  },
  {
    name: "this month",
    id: "this_month",
  },
  {
    name: "today",
    id: "today",
  },
];

const topSellingData = [{
  name : "Item A",
  spent : 180
},{
  name : "Item B",
  spent : 80
},{
  name : "Item C",
  spent : 76
}]

const chartData = [
  {
    created_at: "20 Jul 2023",
    total: 25,
    income: "80",
  },
  {
    created_at: "21 Jul 2023",
    total: 30,
    income: "120",
  },
  {
    created_at: "22 Jul 2023",
    total: 49,
    income: "20",
  },
  {
    created_at: "23 Jul 2023",
    total: 48,
    income: "420",
  },
  {
    created_at: "24 Jul 2023",
    total: 30,
    income: "30",
  },
  {
    created_at: "25 Jul 2023",
    total: 31,
    income: "40",
  },
  {
    created_at: "26 Jul 2023",
    total: 15,
    income: "230",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <div className="hidden md:flex justify-between p-6 items-center bg-white">
        <h3 className="page-title select-none">Home</h3>
        <Avatar/>
      </div>
      <div className="mx-8 my-5 flex flex-col gap-8">
        <section className="rounded-[15px] bg-white px-6 py-5">
          <div className="border-b flex justify-between items-center pb-4">
            <p className="text-[14px] md:text-[17px] font-semibold">
              Product Sold
            </p>
            <SelectBox lists={listReport} />
          </div>
          <BarChart data={chartData} />
        </section>
        <section className="rounded-[15px] w-full bg-white md:w-fit md:min-w-[380px]">
          <div className=" flex justify-between items-center pb-10 px-6 py-5">
            <p className="text-[14px] md:text-[17px]  font-semibold">
              Top selling product
            </p>
            <SelectBox lists={listReport} />
          </div>
          <div className="text-secondary-200 text-[13px]" >
            <div className="flex justify-between items-center pb-2 border-b border-lightblue-200 font-medium px-6">
              <div>
                <p className="capitalize">name</p>
              </div>
              <div>
                <p className="capitalize">spent</p>
              </div>
            </div>
            {
              topSellingData.map((data, index) => (
                <div key={index} className="flex justify-between items-center py-4 hover:bg-lightblue-50 px-6">
                    <div>{data.name}</div>
                    <div>{USDcurrency.format(data.spent)}</div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </main>
  );
}
