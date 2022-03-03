import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 items-stretch bg-blue-100">{props.children}</main>
      <div className="sm:hidden">
        <Footer />
      </div>
    </div>
  );
};
