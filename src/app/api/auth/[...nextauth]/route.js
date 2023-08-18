import User from "@/models/userModels/userModel";
import bdConnect from "@/utils/dbConnect";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

bdConnect()
export const authOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                try {
                    const user = await User.findOne({ email: email })
                    if (!user) {
                        return null;
                    }
                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid) {
                        return null;
                    }
                    return user;
                } catch (error) {

                }
            }
        })

    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
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
    },
    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

async function signInWithOAuth({ account, profile }) {
    console.log(account)
    const user = await User.findOne({ email: profile.email })
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
    return true;
}