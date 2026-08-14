import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In to Your Account | NetworkUp.io",
    description: "Access your NetworkUp.io workspace to manage campaigns, monitor analytics, and engage with professional leads.",
    keywords: ["networkup login", "signin networkup", "outreach portal", "linkedin manager signin"],
    alternates: {
        canonical: "https://networkup.io/homepage/login"
    },
    openGraph: {
        title: "Log In to Your Account | NetworkUp.io",
        description: "Access your NetworkUp.io workspace to manage campaigns, monitor analytics, and engage with professional leads.",
        url: "https://networkup.io/homepage/login",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-login.png",
                width: 1200,
                height: 630,
                alt: "Log In to NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Log In to Your Account | NetworkUp.io",
        description: "Access your NetworkUp.io workspace to manage campaigns, monitor analytics, and engage with professional leads.",
        images: ["https://networkup.io/og-login.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function Login() {
    return (
        <h1>Login</h1>
    )
}