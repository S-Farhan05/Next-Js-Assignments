import { callbackify } from "util";

type item = {
    // name?:string,
    id:string,
    title:string,
    description?:string,
    slug?:string
};

export const items:item[]=[
{ id: "1", title: "Laptop",description: "A powerful laptop" ,slug:"laptop"},

{ id: "2", title: "Mobile",description: "A powerful Mobile" ,slug:"mobile"},

{ id: "3", title: "Car",description: "A powerful Car" ,slug:"car"},

{ id: "4", title: "Bike",description: "A powerful Bike" ,slug:"bike"},

{ id: "5", title: "Orange",description: "A powerful Orange" ,slug:"orange"},
 

]


// import { NextResponse } from "next/server";
// import { items } from "@/data/items";

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const product = items.find((i) => i.id === params.id);

//   if (!product) {
//     return NextResponse.json({ message: "Not found" }, { status: 404 });
//   }

//   return NextResponse.json(product);
// }


// main page call

// type Product = {
//   id: string;
//   title: string;
//   description?: string;
// };

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
//   const product: Product = await res.json();

//   if (!product?.id) {
//     return <h1>Not Found</h1>;
//   }

//   return (
//     <>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//     </>
//   );
// }
