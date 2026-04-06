import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-gray-400 font-light tracking-wide">
                UniFlow<span className="text-pink-400">*</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover & <br />
              create amazing <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                hackathons & hiring drives.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Unified opportunity platform that provides all kinds of
              opportunities at a single place.
            </p>

            <Button asChild size="xl" className="rounded-full px-8">
              <Link href="/explore">Get started</Link>
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <Image
              src="/image.png"
              alt="Hero illustration"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}
