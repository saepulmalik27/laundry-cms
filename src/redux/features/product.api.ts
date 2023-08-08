import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../services/baseQuery";
import { GetProductCategory, GetProductReport } from "@/libs/product.type";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery : baseQuery,
    refetchOnFocus: true,
    endpoints :builder => ({
        getProductReports: builder.query<GetProductReport.Data, GetProductReport.Args>({
            query: ({ ...params }) => ({
                url: "/platform/product/report",
                method: "GET",
                params: {
                    ...params,
                },
            }),
        }),
        getProductCategories : builder.query<GetProductCategory.Data, GetProductReport.Args>({
            query: ({ ...params }) => ({
                url: "/platform/product/categories",
                method: "GET",
                params: {
                    ...params,
                },
                transformResponse : (response : GetProductCategory.Response) => {
                    return response.response
                } 
            }),
        }),
    })

})

export const {
    useGetProductCategoriesQuery,
    useGetProductReportsQuery
} = productApi

