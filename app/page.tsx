import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Hi</div>
      <Image
        src="https://qhfrqatbwoddkjwqhbso.supabase.co/storage/v1/object/public/expenses/1686001999045_qrcode%20(1).jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={500}
        height={500}
        priority
      />
      <img
        src="https://qhfrqatbwoddkjwqhbso.supabase.co/storage/v1/object/public/expenses/1686001999045_qrcode%20(1).jpg"
        alt="ddd"
      />
    </main>
  );
}
