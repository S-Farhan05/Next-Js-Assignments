import React from "react"
import Details from "../components/countrydetails"
export default function Country_info({params}:{params:{Country_name :string}})
{const countryName  = params.Country_name; 
    return<Details countryName={countryName}/>
   
}