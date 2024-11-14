import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";


export default function DashboardLayout({children}){
    return(
        <div>
            <div className="w-64 h-screen fixed">
                <Sidebar/>
            </div>

            <div className="md:ml-64">
                <Header/>
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
    )
}