import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Button from "./components/ui/Button";
import HeadSetItem from "./components/ui/HeadSetItem";
import Tooltip from "./components/tooltip/Tooltip";
import SectorItem from "./components/ui/SectorItem";

export default function Home() {
  return (
    <>
      <div className="realative">
        <img src="/Ellipse 8.png" className="absolute md:left-8 z-0" alt="" />
        <div className="relative container m-auto px-2 md:px-4 z-10 mb-4">
          <header className="py-6">
            <Navbar />
          </header>
          <main>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-6">
              <div className="w-full">
                <div className="text-xl text-center md:text-left md:text-[31px] font-[family-name:var(--font-orbitron)] font-extrabold mb-6 md:leading-[45px]">
                  Let’s Explore <br /> Three-Dimensional visual
                </div>
                <div className="text-sm text-center md:text-left mb-4">
                  With virtual technology you can see the digital world feel
                  more real and you can play the game with a new style.
                </div>
                <div className="flex items-center justify-center md:justify-start gap-5 mb-6">
                  <Button className="font-bold">Get it Now</Button>
                  <button className="text-sm font-bold">Explore Device</button>
                </div>
                <div className="hidden md:flex items-center">
                  <Tooltip />
                  <div className="md:pl-36 md:pt-10 lg:pl-44 lg:pt-10 flex items-center gap-2">
                    <span>
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="4.49219"
                          cy="4.16992"
                          r="4.16992"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="font-bold">400k people online</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <Image src={"/Group 23.svg"} width={540} height={540} alt="" />
              </div>
            </div>
          </main>
          <div className="flex flex-wrap-reverse lg:flex-nowrap mt-12 items-end justify-between">
            <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap gap-8 md:gap-14 relative mb-4">
              <img
                src="/fictionGirl.svg"
                className="w-56 md:w-72 cursor-pointer transition-all duration-300 hover:-translate-y-3"
                alt=""
              />
              <img
                src="/fictionBoy.svg"
                className="w-56 md:w-72 md:mt-40 cursor-pointer transition-all duration-300 hover:-translate-y-3"
                alt=""
              />
            </div>
            <div className="py-4 mb-4 md:mb-2">
              <div className="text-2xl text-center md:text-start font-bold font-[family-name:var(--font-orbitron)] mb-3">
                New Experience In Playing Game
              </div>
              <div className="text-sm md:max-w-xl text-center md:text-start mb-6 px-1">
                You can try playing the game with a new style and of course a
                more real feel, like you are the main character in your game and
                adventure in this new digital world.
              </div>
              <div className="flex justify-center md:block">
                <Button className="m-auto font-bold">Get it Now</Button>
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-[80%] mt-12 md:mt-28">
            <img src="/lablePart.svg" className="w-full" alt="" />
          </div>
          <div className="mt-10">
            <div className="text-[17px] md:text-xl font-[family-name:var(--font-orbitron)] font-bold">
              Mixed Reality Headsets
            </div>
          </div>
        </div>
        <img
          src="/Ellipse 7.svg"
          className="absolute top-72 right-0 z-0"
          alt=""
        />
        <img src="/Ellipse 6.svg" className="absolute top-96 z-0" alt="" />
      </div>
      <div className="relative">
        <div className="container m-auto px-2 md:px-4 z-10 mb-4">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 place-items-center justify-items-center">
            <HeadSetItem
              url="/headSet1.png"
              title="Metaverse"
              about="A Network of 3D virtual worlds focused on social connection."
            />
            <HeadSetItem
              url="/headSet2.png"
              title="AIoT"
              about="AI and IoT are both emerging innovative technologies with a lot of potentials."
            />
            <HeadSetItem
              url="/headSet3.png"
              title="HoloLens"
              about="HoloLens display information, blend with the real world , or even simulate a virtual world."
            />
            <HeadSetItem
              url="/headSet4.png"
              title="TPCASTT"
              about="Method is great to start students reading and inferring with little assistance from the instructor"
            />
          </div>
          <div className="relative mt-24 pt-6 md:pb-36 rounded-2xl bg-[linear-gradient(180deg,_#AA14F0_-42.59%,_rgba(0,_0,_0,_0)_-42.59%,_#AA14F0_-42.58%,_rgba(170,_20,_240,_0.18)_4.35%,_rgba(151,_60,_68,_0.055)_99.99%,_rgba(185,_54,_245,_0)_100%)]">
            <div className="text-xl md:text-3xl text-center font-bold font-[family-name:var(--font-orbitron)]">
              What our clients say
            </div>
            <div className="text-sm text-center max-w-2xl px-2 py-2 md:pt-4 m-auto">
              See what our customer say about us. It really matter for us. How
              good or bad we will make ir for evaluation to make EhyalLive
              better.
            </div>
            <div className="w-full absolute -bottom-24 lg:-bottom-10 hidden md:flex items-center justify-center gap-x-4 px-4 lg:px-8">
              <SectorItem
                url="/sector.jpeg"
                name="Denny Hilguston"
                email="@denny.hill"
                descrip="“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”"
              />
              <SectorItem
                url="/sector2.png"
                name="Vani Pandey"
                email="@vani.pandey"
                descrip="VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap."
              />
              <SectorItem
                url="/sector3.png"
                name="milly Singh"
                email="@milly.singh"
                descrip="I can actually see the improvement in the graphics, not having the external sensors is a big plus."
              />
            </div>
          </div>
        </div>
        <div className="relative mt-20 md:mt-24">
          <div className="container flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between m-auto px-2 md:px-8 z-20 mb-4">
            <div className="">
              <div className="text-center md:text-start text-xl md:text-3xl mb-2 font-bold font-[family-name:var(--font-orbitron)]">
                Our company values culture
              </div>
              <div className="text-center md:text-start text-sm md:text-lg">
                We specialize in creating visual identities for products and
                branda <br /> in your company.
              </div>
            </div>
            <div className="mt-11 grid grid-cols-2 place-content-center justify-items-center gap-8">
              <div className="flex flex-col items-center justify-center">
                <img src="/emojione_victory-hand.svg" className="w-20" alt="" />
                <div className="font-bold text-sm md:text-base">Be Sincere</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/Vector.svg" className="w-20" alt="" />
                <div className="font-bold text-sm md:text-base">
                  Stronger together
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/Group 40.svg" className="w-20" alt="" />
                <div className="font-bold text-sm md:text-base">
                  Keep it simple
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/twemoji_light-bulb.svg" className="w-20" alt="" />
                <div className="font-bold text-sm md:text-base">
                  Take intelligent risks
                </div>
              </div>
            </div>
          </div>
          <img
            src="/Ellipse 7.svg"
            className="absolute -top-48 right-0 z-0"
            alt=""
          />
          <img src="/Ellipse 6.svg" className="absolute -top-14 z-0" alt="" />
        </div>
        <img src="/Ellipse 6.svg" className="absolute top-80 z-0" alt="" />
      </div>
      <div className="container mt-20 m-auto px-2 md:px-8 z-30 mb-4">
        <div
          style={{
            background:
              "linear-gradient(180deg, #AA14F0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #AA14F0 -42.58%, rgba(170, 20, 240, 0.18) 4.35%, rgba(151, 60, 68, 0.055) 99.99%, rgba(185, 54, 245, 0) 100%)",
          }}
          className="flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between rounded-lg"
        >
          <div className="px-3 md:px-8 max-w-xl py-4 md:pt-0 mb-4 md:mb-0">
            <div className="text-lg font-bold font-[family-name:var(--font-orbitron)] md:text-2xl mb-2">
              Explore product in new way
            </div>
            <div className="text-sm font-bold mb-2">
              We specialize in creating visual identities for products and
              branda in your company.
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <input
                type="text"
                style={{
                  background:
                    "linear-gradient(180deg, #AA14F0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #AA14F0 -42.58%, rgba(170, 20, 240, 0.18) 4.35%, rgba(151, 60, 68, 0.055) 99.99%, rgba(185, 54, 245, 0) 100%)",
                }}
                className="py-2 rounded-sm placeholder:text-[#E0A3C98F] px-2 "
                placeholder="Your Email"
              />
              <Button className="flex items-center font-bold">
                Start{" "}
                <span>
                  <img
                    src="/Vector (1).svg"
                    className="ml-1"
                    width={"10px"}
                    alt=""
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="w-96">
            <Image
              src={"/hands.svg"}
              className="rounded-"
              width={100}
              height={100}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
