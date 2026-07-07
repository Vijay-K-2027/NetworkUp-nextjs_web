import Navbar from "@/app/homepage/components/Navbar";
import Hero from "@/app/homepage/components/Hero";
import DashboardPreview from "@/app/homepage/components/DashboardPreview";
import Teams from "@/app/homepage/components/Teams";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <DashboardPreview />
            <br></br>
            <br></br>
            <hr></hr>
            <Teams />
            <hr></hr>
        </>
    );
}