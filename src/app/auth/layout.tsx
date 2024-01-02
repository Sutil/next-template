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
    <div className="w-full h-full flex flex-col items-center p-2">
      <header>
        <div className="w-32 h-32 bg-primary"></div>
      </header>
      <section className="w-full">{children}</section>
      <footer>footer</footer>
    </div>
  );
}
