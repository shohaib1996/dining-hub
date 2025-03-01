import { baseApi } from "../baseApi";

const allMeals = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllMealsApi: build.query({
            query: () => ({
                url: '/meals',
                method: 'GET'
            })
        })
    })
})

export const {
   useGetAllMealsApiQuery
} = allMeals;