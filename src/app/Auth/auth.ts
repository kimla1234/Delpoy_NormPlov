import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
		}),
	],
});