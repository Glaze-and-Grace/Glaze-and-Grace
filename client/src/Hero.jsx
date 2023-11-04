import React from "react";

const Hero = () => {
  return (
    <div>
      <section class="py-10 bg-[#F9EFE6] lg:py-0 h-screen ">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div class="h-full pr-12 lg:order-2 lg:mb-30">
              <div class="relative h-full lg:h-auto">
                <div class="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-[#DBC9B1] to-[#DBC9B1] top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                  <img
                    class="object-cover object-right  h-full scale-100 rounded-3xl "
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                    alt=""
                  />
                </div>
                <div class="relative lg:-top-0 scale-40">
                  <img
                    class=" rounded-3xl"
                    src="https://i.pinimg.com/originals/22/10/4b/22104bffaf8df4ec727cd5df15655436.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="flex  justify-start py-0 lg:order-1 sm:py-16 lg:py-24 xl:py-40">
              <div>
                <h2 class="mt-2 text-3xl font-bold leading-tight text-[#17403C] sm:text-4xl lg:text-5xl lg:leading-tight">
                  Get work done, fast!
                </h2>
                <p class="text-xl leading-relaxed text-black mt-9">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia conse duis enim velit mollit.
                  Exercitation veniam.
                </p>
                {/* <p class="mt-6 text-xl leading-relaxed text-black">
                  Velit officia conse duis enim velit mollit. Exercit ation
                  veniam consequat sunt nostrud amet.
                </p> */}
                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-[#17403C] rounded-2xl hover:bg-[#2c726b] focus:bg-[#17403C]"
                  role="button"
                >
                  {" "}
                  Explore more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
