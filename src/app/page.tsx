import logo from "@/app/icon.svg";
import Image from "next/image";

// Add artificial delay to see loading state
const getData = async () => {
  // This simulates a network request that takes 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //? Uncomment the line below to see error ui of error.tsx
  // throw new Error("PREVIEW_ERROR_PAGE_UI");
  return { name: "NextStarter" };
};

const Home = async () => {
  // This will trigger Suspense boundary and show loading.tsx
  const data = await getData();

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
        <h1 className="text-2xl font-bold">{data.name}</h1>
      </main>
    </div>
  );
};

export default Home;
