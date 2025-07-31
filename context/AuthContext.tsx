"use client";

import { createContext, useEffect, useState } from "react";
import { User } from "@/types";

type AuthContextType = {
	user: User | null;
	login: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	login: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem("user");
		if (stored) setUser(JSON.parse(stored));
	}, []);

	const login = (user: User) => {
		localStorage.setItem("user", JSON.stringify(user));
		setUser(user);
	};

	return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};
