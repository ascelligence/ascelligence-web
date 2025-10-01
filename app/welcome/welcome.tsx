import logoLight from "./logo-light.svg";

export function Welcome() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-8">
            <div className="flex flex-col items-center gap-12 max-w-4xl w-full">
                {/* Logo Section */}
                <div className="w-full max-w-xs md:max-w-sm animate-fade-in">
                    <img
                        src={logoLight}
                        alt="Ascelligence Logo"
                        className="w-full h-auto drop-shadow-xs"
                    />
                </div>

                {/* Products Section */}
                <div className="w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                        {products.length === 1
                            ? `✨ Meet Our First App — ${products[0].name}`
                            : "Our Applications"}
                    </h2>

                    {/* Products Container */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl overflow-hidden relative">
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                            {/* Active Products */}
                            {products.map((product, index) => (
                                <a
                                    key={product.name}
                                    href={product.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        animation: `slideUp 0.5s ease-out ${
                                            index * 0.1
                                        }s both`,
                                    }}
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {product.icon}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-gray-800 mb-1">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 max-w-[140px]">
                                            {product.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                            <div className="hidden md:flex">
                                {/* Skeleton Apps with Eclipse Effect */}
                                {skeletonCount > 0 &&
                                    [...Array(skeletonCount)].map((_, i) => (
                                        <div
                                            key={`skeleton-${i}`}
                                            className="relative flex flex-col items-center gap-3 p-6 opacity-20"
                                            style={{
                                                animation: `slideUp 0.5s ease-out ${
                                                    (products.length + i) * 0.1
                                                }s both`,
                                            }}
                                        >
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-md">
                                                <div className="w-10 h-10 rounded-lg bg-white/30"></div>
                                            </div>
                                            <div className="text-center space-y-1">
                                                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                            </div>
                                            {/* Eclipse overlay effect */}
                                            <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white/80 rounded-2xl pointer-events-none"></div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/* Bottom message - only show if there are skeletons */}

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-500">
                                We might be building something new 👀
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-700 mt-10">
                        © {new Date().getFullYear()} Ascelligence AB (Sweden),
                        Org. no. 559542-8698. All rights reserved.
                    </p>
                </div>
            </div>
        </main>
    );
}

const products = [
    {
        name: "Kyvic",
        description: "AI-resistant CAPTCHA service",
        href: "https://kyvic.com",
        icon: (
            <img
                src={"/kyvic-logo.svg"}
                alt="Kyvic Logo"
                className="rounded-2xl border-1 border-neutral-300"
            />
        ),
    },
    // Add more products here like:
    // {
    //     name: "Product Name",
    //     description: "Short description",
    //     href: "https://example.com",
    //     icon: <svg>...</svg>
    // },
];

const skeletonCount = 2;
