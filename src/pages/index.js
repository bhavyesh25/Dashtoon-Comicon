import Head from "next/head";
import { Form, Layout } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Comicon</title>
        <meta name="description" content="Comic Creator Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Layout>
        <Form />
      </Layout>
    </>
  );
}
