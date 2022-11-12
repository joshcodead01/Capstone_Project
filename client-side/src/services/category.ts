import {privateApi} from "../app/baseApi"
import { Category, CreateCategory } from "../model";

const categoryApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllCategory: builder.query<Category[],string>({
            query: search => ({
                url: `category?search=${search}`,
                method: "GET"
            }), 
            providesTags: (result = [], error, arg) => [{type:'Category', id: arg}]
        }),
        createCategory: builder.mutation<void, CreateCategory>({
            query: body => ({
                url: `category`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"Category"}]
        }),
    }),
    overrideExisting: false
})
export default categoryApi;

export const { useCreateCategoryMutation, useGetAllCategoryQuery } = categoryApi