import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Ascelligence | Innovation in Security & AI" },
        {
            name: "description",
            content:
                "Meet Kyvic, our AI-resistant CAPTCHA service designed to protect websites from automated scrapers and bots.",
        },
    ];
}

export default function Home() {
    return <Welcome />;
}
