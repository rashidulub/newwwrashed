'use client'
import { signOut } from "next-auth/react"
const SignOut = () => {
    return (
        <div>
            <button onClick={signOut} className="btn btn-md">Sign Out</button>
        </div>
    )
}

export default SignOut