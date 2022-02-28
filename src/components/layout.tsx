import type { ReactNode, VFC } from "react";
import { AddTask } from "src/components/addTask";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <AddTask />
    </>
  );
};
