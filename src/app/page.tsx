"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="s" />
      </Head>
      <main className="flex min-h-screen items-center justify-between md:flex-row sm:flex-col">
        <Header />
        <div
          className="flex flex-col justify-center align-middle md:h-screen w-full sm:w-1/2 py-24 sm:p-24 z-10"
          style={{ backgroundColor: "white", color: "#191414" }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl py-1 font-lora font-medium">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Measure Your Progress, Master Your Goals.")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .start();
                }}
              />
            </h1>
            <p className="text-1xl md:text-xl py-4 font-thin text-gray-300">
              Empowers you to monitor and analyze your fitness journey with
              precision. Achieve your goals effortlessly with our intuitive
              tracking tools and personalized insights
            </p>
            <div className="flex justify-center">
              <Button
                title="Login"
                style={{
                  fontSize: "1.25rem",
                  borderRadius: "1.5rem",
                  padding: "0.5rem 2rem",
                  margin: "0 10px",
                }}
                onClick={() => {
                  router.push("/home/login");
                }}
              />
              <Button
                title="Register"
                style={{
                  fontSize: "1.25rem",
                  backgroundColor: "#cccccc",
                  borderRadius: "1.5rem",
                  padding: "0.5rem 2rem",
                  margin: "0 10px",
                }}
                onClick={() => {
                  router.push("/home/register");
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute md:block w-full md:w-1/2 md:relative"
          style={{
            backgroundImage: `url("/images/bg.jpeg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "-100px",
            minHeight: "100vh",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#2dc5f0",
              opacity: "0.4",
            }}
          />
        </div>
        <a
          className="absolute bottom-0 right-0 p-2 cursor-pointer"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={42} />
        </a>
      </main>
    </>
  );
}
