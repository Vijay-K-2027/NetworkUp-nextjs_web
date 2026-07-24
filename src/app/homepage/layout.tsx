import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
            <CTABanner />
            <Footer />
        </>
    )
}