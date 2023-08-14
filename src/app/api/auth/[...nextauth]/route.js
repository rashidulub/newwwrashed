import User from "@/models/userModels/userModel";
import bdConnect from "@/utils/dbConnect";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

bdConnect()
export const authOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(credentials, 'credentials')
            if (account.type === 'oauth') {
                return await signInWithOAuth({ account, profile })
            }
            return true;
        },
        async jwt({ token, trigger, session }) {
            return token;
        },
        async session({ session, token }) {
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

async function signInWithOAuth({ account, profile }) {
    console.log(account)
    const user = await User.findOne({ email: profile.email })
    console.log(user)
    if (user) {
        return true
    }
    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider
    })
    await newUser.save()
    console.log(newUser)
    return true;
}