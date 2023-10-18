import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInUser } from "@/backend/services/user.service";
import { ValidationFailedError } from "@/backend/error/customErrors";

export default NextAuth({
providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
        username: { label: "RUT", type: "text", placeholder: "12.345.678-9" },
        password: { label: "Password", type: "password" }
        },
        async authorize(credentials: any, req: any) {
            try {
                const {username, password} = credentials
                const user = await signInUser({rut: username, password})
                if (user){
                    return user
                } else {
                    return null
                }
            } catch (error: ValidationFailedError | any) {
                return error.name || null
            }
        }
    })
    ],
  callbacks: {
    async jwt(token, user) {
      // Add user data to the token (optional)
      if (user) {
        token.id = user.id;
        token.username = user.username;
        // Add other user data as needed
      }
      return token;
    },
    async session(session, token) {
      // Add user data to the session (optional)
      session.user = token;
      return session;
    },
  },
});
