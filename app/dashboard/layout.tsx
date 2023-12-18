import { ReactNode } from "react";
import { TabBar } from "./tab-bar";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="">
            {children}
            <TabBar />
        </div>
    )
}