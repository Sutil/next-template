import { useCurrentUser } from "@/lib/firebase/current-user";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center p-10">
      <header>
        <div className="w-32 h-32 bg-primary"></div>
      </header>
      <section className="w-full flex justify-center">
        <div className="w-full sm:w-96">{children}</div>
      </section>
    </div>
  );
}
