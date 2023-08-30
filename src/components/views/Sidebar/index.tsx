import { SidebarWrapper } from "./Sidebar.styles"

type SidebarItemActiveState = {
    active?: string
}

export default function Sidebar({ active } : SidebarItemActiveState) {


    return (
        <SidebarWrapper>
            <p>Sou a sidebar</p>
        </SidebarWrapper>
    )
}