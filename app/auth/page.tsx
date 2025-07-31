"use client";

import { z } from "zod";
import styles from "./auth.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../../components/ui/Input";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	phone: z.string().regex(/^09\d{9}$/, { message: "Invalid mobile number" }),
});

type FormData = z.infer<typeof schema>;

export default function AuthPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const router = useRouter();
	const { login } = useAuth();

	const onSubmit = async () => {
		const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
		const data = await res.json();
		login(data.results[0]);
		router.push("/dashboard");
	};

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h2>Welcome Back</h2>
				<Input label="Phone Number" {...register("phone")} error={errors.phone?.message} />
				<Button type="submit">Sign In</Button>
			</form>
		</div>
	);
}
