import type { ReactNode } from "react";
import "./Badge.css";

type BadgeProps = {
    children: ReactNode;
    variant?: "dark" | "success" | "warning";
};

export default function Badge({ children, variant = "dark" }: BadgeProps) {
    return <span className={`badge badge--${variant}`}>{children}</span>;
}
