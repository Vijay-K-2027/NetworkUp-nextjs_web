import Image from "next/image";

export default function Section2() {
    return (
        <section className="w-full max-w-4xl mx-auto my-15">
            <div className="flex flex-col items-center justify-center gap-y-5">
                <h1 className="text-md md:text-lg lg:text-xl text-black/60 font-medium text-left">The complexity of modern distributed systems has outpaced human cognitive capacity. Managing thousands of microservices, handling erratic webhook traffic, and ensuring robust API orchestration requires a fundamental shift in how we approach observability and control. Today, we're announcing a suite of Advanced AI Features designed specifically for the developer ecosystem.</h1>
            </div>
            <Image
                src="/product/feature/1.png"
                alt="Feature Image 1"
                width={1280}
                height={1080}
                priority={true}
                className="rounded-5xl  py-5"
            />
        </section>
    )
}