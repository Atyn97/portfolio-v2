import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fatin Nooraina</title>
        <meta
          name="Fullstack developer portfolio"
          content="Fullstack developer portfolio"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-center w-full">
            <div>
              <Image
                src={profilePic}
                alt="FatinNooraina"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
