import type { Metadata } from "next";
import Header from "./header/header";
import MainGuard from "./main-guard";

export const metadata: Metadata = {
  title: {
    template: "%s | My app",
    default: "My app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainGuard />
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}
