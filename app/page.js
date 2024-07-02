import Image from "next/image";
import logo from "@/public/seasalon.svg";
import mono from "@/public/iso-mono.svg"
import Review from "@/components/review/review";
export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)]  flex-col items-center justify-between w-full    z-0  ">
      <section id="home" className="h-screen bg absolute top-0  w-full ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 h-1/2 lg:pl-12 md:pl-8 flex gap-8 flex-col md:items-start md:text-left items-center text-center">
            <div className="flex-col flex w-fit">
              <Image
                src={mono}
                height={"auto"}
                alt="logo"
              />
              <h6 className="font-thin w-full text-center text-sm">Beauty and Elegance Redefined</h6>
            </div>
            <p className="mb-8 leading-relaxed">Crave a transformative experience? SEA Salon delivers.  Creating personalized beauty using top products. Relax in our luxurious haven and explore our hair, nail, facial, and makeup services. Beauty meets expertise at SEA Salon.</p>

          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <p className="hidden">hehehe</p>
          </div>

        </div>
      </section>
      <section className="h-[92vh]  relative w-full"></section>
      <Review />
      
    </main>
  );
}
