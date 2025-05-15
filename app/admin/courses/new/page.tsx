"use client"

import type React from "react"

import { useRouter } from "next/navigation"

import { Header } from "../../components/Header"
import { Aside } from "../../components/Aside"
import { MainContent } from "../../components/MainContent"

export default function NewCoursePage() {
    const router = useRouter()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row flex-1">
                <Aside />
                <MainContent />
            </div>
        </div>
    )
}
