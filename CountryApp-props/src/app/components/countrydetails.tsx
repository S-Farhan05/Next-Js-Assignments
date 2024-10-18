function Details({countryName }: {countryName :string}){
    const country_details:any = {
        Pakistan: { name: 'Pakistan', population:'235.8 million ' ,capital:'Islamabad'},
        India :{name :'India' , population:'1.4 billion',capital:'New Dehli'},
        Russia:{name :'Russia' , population:'144.2 million',capital:'Moscow.'},
        Iran :{name :'Iran' , population:'88.55 million ',capital:'Tehran'},
        China :{name :'China' , population:'1.412 billion',capital:'Beijing'},
        America :{name :'America' , population:'333.3 million ',capital:'Washington, D.C.'},
    }
    const Info = country_details[countryName];
    
    
     
 return(
   <div id="page"><h1>Country : {Info.name}</h1>
    <h1>Population : {Info.population}</h1>
    <h1>Capital : {Info.capital}</h1>
    </div>
    
    
   
 )
}
export default Details;