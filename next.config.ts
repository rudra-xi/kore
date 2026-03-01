import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	
	allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.dicebear.com",
				pathname: "/9.x/**",
			},
		],
	},
};

export default nextConfig;
