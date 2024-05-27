"use client"

import Simpson from "@/components/Simpson/Simpson"
import SimpsonOne from "@/components/Simpson/SimpsonOne"
import SimpsonThree from "@/components/Simpson/SimpsonThree"
import { useRouter, useParams } from "next/navigation"

export default function SimpSonType() {
    const {type} = useParams()
    switch (type) {
        case "1":
            return (
                <SimpsonOne/>
            )
        case "3":
            return (
                <SimpsonThree/>
            )
        default:
            return (
                <Simpson/>
            )
    }
}