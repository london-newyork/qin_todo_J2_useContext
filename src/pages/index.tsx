import type { NextPage } from "next";
import Head from "next/head";
import { BtnArea } from "src/components/btn/BtnArea";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { SomeTimeBtn } from "src/components/btn/SomeTimeBtn";
import { TodayBtn } from "src/components/btn/TodayBtn";
import { TomorrowBtn } from "src/components/btn/TomorrowBtn";
import { Layout } from "src/components/layout";

const Home: NextPage = () => {
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
      <RadioBtnGroup>
        <RadioBtn variant="rose" value="task1">
          ここにタスクが入ります
        </RadioBtn>
        <RadioBtn variant="orange" value="task2">
          ここにタスクが入ります
        </RadioBtn>
        <RadioBtn variant="yellow" value="task3">
          ここにタスクが入ります
        </RadioBtn>
      </RadioBtnGroup>
    </Layout>
  );
};

export default Home;
