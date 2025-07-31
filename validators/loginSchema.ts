import { z } from "zod";

export const loginSchema = z.object({
	phone: z.string().refine((val) => /^09\d{9}$/.test(val), {
		message: "The number must start with 09 and be 11 digits long",
	}),
});
