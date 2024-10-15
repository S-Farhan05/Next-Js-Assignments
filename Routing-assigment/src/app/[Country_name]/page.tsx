import React from "react"

const country_details:any = {
    Pakistan: { name: 'Pakistan', population:'235.8 million ' ,capital:'Islamabad'},
    India :{name :'India' , population:'1.4 billion',capital:'New Dehli'},
    Russia:{name :'Russia' , population:'144.2 million',capital:'Moscow.'},
    Iran :{name :'Iran' , population:'88.55 million ',capital:'Tehran'},
    China :{name :'China' , population:'1.412 billion',capital:'Beijing'},
    America :{name :'America' , population:'333.3 million ',capital:'Washington, D.C.'},
}


export default function Country_info({params}:{params:{Country_name :string}})
{const countryName = country_details[params.Country_name]
    // return(
    //     <h1>{countryName}</h1>)
    
    
    // if (!countryName) {
    //     return (
    //       <div>
    //         <h1>{countryName}</h1>
    //         <h1>Typescipt fool asking</h1>
    //       </div>
    //     );
    //   }
    return(
       <>
        <h1 id="head">Country:{countryName.name}</h1>
        <h1 id="head">Population:{countryName.population}</h1>
        <h1 id="head">Capital:{countryName.capital}</h1>
       </> 
    )
}