import Header from "./header/header";
import MainGuard from "./main-guard";

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
