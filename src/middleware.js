export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/admindashboard/:path*", "/courses/:path*"]
}