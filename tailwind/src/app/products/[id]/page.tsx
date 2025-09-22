import { items } from "@/data/items"
export default function Dynamic({params}:{params:{id:string}}){
   const product = items.find((i)=>i.id === params.id);
   if(!product){
    return(
        <h1>Not Found</h1>
    )
   }
    return<>
        <h1>{product?.title}</h1>
        <h1>{product?.id}</h1>
       <h1>{product?.description}</h1>
    </>
}