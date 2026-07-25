import Documentations from "./components/documentations"
import Detailed from "./components/Detailed"
import Comparision from "./components/Comparision"

export default function PricingSection() {
    return (
        <>
            <Comparision />
            <Detailed />
            <Documentations />
        </>
    )
}