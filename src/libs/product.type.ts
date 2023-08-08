import { TProductReport } from "./report.type"

export declare namespace GetProductReport {
    type Args = object
    type Data = TProductReport[]
} 

export declare namespace GetProductCategory {
    type Args = object
    type Data = {
        id : string,
        name : string
    }[]
    type Response = {
        status : string,
        message : string,
        response : Data
    }
}