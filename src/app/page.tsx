import logo from "@/app/icon0.svg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col items-center justify-center">
        <Image
          alt="Next.js logo"
          width={100}
          height={38}
          src={logo}
          priority
        />
        <h1 className="text-2xl font-bold">NextStarter</h1>
      </main>
    </div>
  );
};

export default Home;
