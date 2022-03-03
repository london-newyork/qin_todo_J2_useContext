import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-start py-6 px-4 space-y-4 w-full min-h-full bg-green-100 sm:flex-row sm:justify-between sm:py-16 sm:px-[81px] sm:space-y-0 sm:space-x-4">
        <div className="w-full h-[100px] bg-red-100 sm:flex-1">今日する</div>
        <div className="w-full h-[200px] bg-orange-100 sm:flex-1">明日する</div>
        <div className="w-full h-[300px] bg-yellow-100 sm:flex-1">今度する</div>
      </div>
    </Layout>
  );
};

export default Home;
