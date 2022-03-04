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
      <div className="flex flex-col items-start py-6 px-4 space-y-4 w-full min-h-full sm:flex-row sm:justify-between sm:py-16 sm:px-[81px] sm:space-y-0 sm:space-x-4">
        <TodayTodo />
        <TomorrowTodo />
        <SomeTimeTodo />
      </div>
    </Layout>
  );
};

export default Home;
