import { IProducts } from './../_models/product';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProducts[];
}