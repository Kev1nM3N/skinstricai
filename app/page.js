import Nav from "./components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 flex relative">
        <div className="flex-grow flex justify-between items-center">
        <div className="relative">
          <Image src="/images/Rectangle 2779.png" width={300} height={400} alt="right square" />
          <div className="absolute top-1/2 right-28 -translate-y-1/2 flex items-center space-x-2 text-[clamp(0.65rem,2vw,1rem)]">
            <button className="border rotate-45 w-10 h-10 flex items-center justify-center">
              <span className="block -rotate-287">◀</span>
            </button>
            <span className="pl-3">DISCOVER A.I.</span>
          </div>
        </div>
          <div>
            <h1 className="text-[clamp(2.5rem,10vw,8rem)] text-center leading-tight font-light tracking-tighter">Sophisticated <br/> skincare</h1>
          </div>
          <div className="relative">
            <Image src="/images/Rectangle 2778.png" width={300} height={400} alt="left square" />
            <div className="absolute top-1/2 left-28 -translate-y-1/2 flex items-center space-x-2 text-[clamp(0.65rem,2vw,1rem)]">
              <span className="pr-3">TAKE TEST</span>
              <button className="border rotate-45 w-10 h-10 flex items-center justify-center">
                <span className="-block -rotate-287">▶</span>
              </button>
            </div>
          </div>
        </div>
        <span className="absolute bottom-16 left-16 text-[clamp(0.85rem,2vw,1rem)] block leading-snug">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES <br /> 
          A HIGHLY-PERSONALISED ROUTINE TAILORED TO <br /> 
          WHAT YOUR SKIN NEEDS.
        </span>
      </div>
    </main>
  );
}