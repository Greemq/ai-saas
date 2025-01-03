import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = async ({children}: { children: React.ReactNode }) => {
    // const apiLimitCount = await getApiLimitCount();
    // const isPro = await checkSubscription();
    const apiLimitCount = 1000000;
    const isPro = true;

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
