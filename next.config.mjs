/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [],
  theme: {},
};

export default nextConfig;
