import "../app/globals.scss";
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>Login Flow</title>
				<meta name="author" content="Sina Ahmadi" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>

			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
