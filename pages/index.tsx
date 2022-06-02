import Head from "next/head";
import { Layout } from "@/components";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Deploying </div>
    </Layout>
  );
};

export default Home;
