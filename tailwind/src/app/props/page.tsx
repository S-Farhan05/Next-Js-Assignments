// export const getStaticProps = async ()=>{
// const res = await fetch("https://jsonplaceholder.typicode.com/users")
// const data = await res.json()





// return{
//     Props: {data:data}
// }
// }


export default async function Props(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users"
       
       ,{cache:"no-store"} // this is server prop no store and keeps refresh every call ,next:{revalidate:60} inside casche bracket
        // ,{cache:"force-cache"}
    );
    const data = await res.json();
    return(
        <>
        <div >
            {data.map((user:any)=>(
                <div key={user.id}>
                   <a>
                    <h3>{user.name}</h3>
                   </a>

                </div>
            )


            )}
        </div>
        </>
    )
}