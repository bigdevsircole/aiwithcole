import type { Metadata } from "next";
import SuccessClient from "../success/SuccessClient";

export const metadata: Metadata = {
  title: "Enrollment Confirmed | AI WITH COLE",
  description: "Welcome to the AI With Cole Masterclass. Your access and instructions to get started.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function SuccessWebAppPage() {
  return <SuccessClient />;
}
