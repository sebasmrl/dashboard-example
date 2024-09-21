//lrc

import { Sidebar } from "../../components";

//import Image from "next/image";

export default function DashboadLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-slate-100  w-screen h-screen overflow-y-scroll antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
          
            <div className="flex">

                <Sidebar />
                
                <div className="w-full text-slate-900  ">
                    {children}
                </div>
            </div>
        </div>
    );
}