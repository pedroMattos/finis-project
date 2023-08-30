"use client"
import Sidebar from "@/components/views/Sidebar"
import { DashboardPageSection, DashboardView } from "./Dashboard.styles"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <DashboardPageSection>
            <Sidebar />
            <DashboardView>
                {children}
            </DashboardView>
        </DashboardPageSection>
    )
  }