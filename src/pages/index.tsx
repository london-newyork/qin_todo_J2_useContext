import type { NextPage } from "next";
import Head from "next/head";
import { AddTask } from "src/components/AddTask";
import { BtnArea } from "src/components/btn/BtnArea";
import { SomeTimeBtn } from "src/components/btn/SomeTimeBtn";
import { TodayBtn } from "src/components/btn/TodayBtn";
import { TomorrowBtn } from "src/components/btn/TomorrowBtn";
import { Layout } from "src/components/layout";
import { SomeTimeTitle } from "src/components/Title/SomeTimeTitle";
import { TodayTitle } from "src/components/Title/TodayTitle";
import { TomorrowTitle } from "src/components/Title/TomorrowTitle";

const Home: NextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="p-2 bg-red-400">Home</h2>
      <BtnArea>
        <TodayBtn />
        <TomorrowBtn />
        <SomeTimeBtn />
      </BtnArea>
      <TodayTitle />
      <TomorrowTitle />
      <SomeTimeTitle />
      <button onClick={handleClick}>Button</button>
      <AddTask />
    </Layout>
  );
};

export default Home;
