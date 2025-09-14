"use client"
import { useContext } from "react"
import { counterContext } from "@/context/context"
export default function Foot()
{
const value = useContext(counterContext)
return <div>
    <h1>{value}</h1>
</div>
}