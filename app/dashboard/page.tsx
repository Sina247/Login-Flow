"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardPage() {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) router.replace("/auth");
	}, [user]);

	return (
		<div className={styles.dashboard}>
			<h1 className={styles.h1}>Welcome to the Dashboard</h1>
			{user && (
				<p>
					{user.name.first} {user.name.last}
				</p>
			)}
		</div>
	);
}
