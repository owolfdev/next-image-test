import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <Button>Click me</Button>
      </div>
      <Image src="/lucha.png" height={200} width={200} alt="/"></Image>
      <Image
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        height={200}
        width={200}
        alt="/"
      ></Image>
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
    </div>
  );
}
