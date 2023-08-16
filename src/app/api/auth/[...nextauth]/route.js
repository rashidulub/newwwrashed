import User from "@/models/userModels/userModel";
import bdConnect from "@/utils/dbConnect";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
                name: { label: "name", type: "text", placeholder: "jsmith" },
                email: { label: "email", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { name, email, password } = credentials;
                console.log(name, email, password)
                try {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const user = await User.create({ name, email, password: hashedPassword });
                    return user;
                } catch (error) {

                }
            }
        })

    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(credentials, 'credentials')
            console.log(user, 'user credentials')
            console.log(account, 'account credentials')
            console.log(profile, 'profile credentials')
            console.log(email, 'email credentials')
            if (account.type === 'oauth') {
                return await signInWithOAuth({ account, profile })
            }
            return true;
        },
        async jwt({ token, trigger, session }) {
            console.log(token, trigger,)
            return token;
        },
        async session({ session, token }) {
            console.log(session, 'session ')
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