"use client";

import { signOut } from "next-auth/react";

const LogOut = () => {
	return (
		<div>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default LogOut;
