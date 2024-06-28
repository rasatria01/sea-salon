import Image from "next/image";
import logo from "@/public/seasalon.svg";
import mono from "@/public/logo-mono.svg"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 ">
      <div id="home" className="h-screen bg w-screen flex justify-start items-center">
        <div className="ml-16 w-1/2 ">
          <div className="w-1/2">
            <Image
              src={mono}
              height={180}
              width={540}
              alt="logo"
            />
            <p>Hai</p>
          </div>
        </div>
      </div>
      <div id="product" className="h-screen bg-green-500 w-screen">
        <Image
          src={logo}
          height={180}
          width={540}
          alt="logo"
        />
      </div>
    </main>
  );
}
