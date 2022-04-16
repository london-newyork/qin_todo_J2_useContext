import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";
import { SomeTimeTodo } from "src/components/Todo/SomeTimeTodo";
import { TodayTodo } from "src/components/Todo/TodayTodo";
import { TomorrowTodo } from "src/components/Todo/TomorrowTodo";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="
        flex
        flex-col
        gap-y-14
        mx-4
        mt-6
        md:flex-row
        md:gap-x-28
        md:gap-y-0
        md:justify-between
        md:mx-auto
        md:mt-[70px]
        md:w-[1000px]"
      >
        <TodayTodo />
        <TomorrowTodo />
        <SomeTimeTodo />
      </div>
    </Layout>
  );
};

export default Home;
