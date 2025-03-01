"use client"

import { useGetAllMealsApiQuery } from "@/redux/api/meals/meals"


const Meals = () => {
    const {data, isLoading} = useGetAllMealsApiQuery({})
    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(data)
  return (
    <div>Meals</div>
  )
}

export default Meals