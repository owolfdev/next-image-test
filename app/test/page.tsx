import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Next Image component</div>
      <Image
        src="/0_0.png"
        alt=""
        width={200}
        height={200}
        // loader={({ src }) => `${src}`}
      />
      <div>img element</div>
      <img src="/0_0.png" alt="ddd" />
    </main>
  );
}
