import type React from "react"
import { Header } from "../../components/Header"
import { Aside } from "../../components/Aside"
import { MainContent } from "../../components/MainContent"

export default function NewCoursePage() {
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
