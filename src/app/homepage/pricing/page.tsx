import Documentations from "./components/documentations"
import Detailed from "./components/Detailed"
import Comparision from "./components/Comparision"
import Price from "./components/Price"

export default function PricingSection() {
    return (
        <>
            <Comparision />
            <Price />
            <Detailed />
            <Documentations />
        </>
    )
}