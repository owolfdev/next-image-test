import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Hi</div>
      <Image src="/0_0.png" alt="Vercel Logo" width={500} height={500} />
      <img src="/0_0.png" alt="ddd" />
    </main>
  );
}
