"use client";

import Avatar from "@/components/avatar/Avatar";
import BarChart from "@/components/chart/Chart";
import SelectBox from "@/components/selectbox/SelectBox";
import { USDcurrency } from "@/utils/helpers";
import React from "react";
import topSellingData from '@/data/selling_product_data.json'
import { TReport } from "@/libs/report.type";
import listReportData from '@/data/list_of_report.json'
import { useGetProductReportsQuery } from "@/redux/features/product.api";
const listReport : TReport[] = listReportData.lists
import backupData from '@/data/chartData.json'

export default function Home() {

  const {data : data } = useGetProductReportsQuery({})
  

  const [productSold, setProductSold] = React.useState<TReport>(listReport[0])
  const [topSelling, setTopSelling] = React.useState<TReport>(listReport[0])

  const handleChangeProduct = (val:any) => {
    setProductSold(val)
  }

  const hanldeChangeTopSelling = (val: any) => {    
    setTopSelling(val)
  }

  const chartData = React.useMemo(() => {
    if (data && data.length > 0) {
      return data
    }else{
      return backupData.data
    }
  }, [data])

  
  


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
            <SelectBox value={productSold} onChange={handleChangeProduct} lists={listReport} />
          </div>
          {
            chartData &&  <BarChart data={chartData} />
          }
         
        </section>
        <section className="rounded-[15px] w-full bg-white md:w-fit md:min-w-[380px]">
          <div className=" flex justify-between items-center pb-10 px-6 py-5">
            <p className="text-[14px] md:text-[17px]  font-semibold">
              Top selling product
            </p>
            <SelectBox lists={listReport} value={topSelling} onChange={hanldeChangeTopSelling}  />
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
              //@ts-ignore
              topSellingData[topSelling.id].map((data, index) => (
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
