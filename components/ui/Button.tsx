import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button className={styles.button} {...props} />;
}
