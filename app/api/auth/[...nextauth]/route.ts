import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"


const authOptions:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    callbacks:{
        async session({session,token}:any){
            session.user.username = session.user?.name?.split(' ').join('').toLowerCase()
            session.user.uuid = token.sub
            return session
        }
    },
    secret:process.env.SECRET_KEY
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}