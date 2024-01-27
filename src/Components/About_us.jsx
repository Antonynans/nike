export default function About_us() {
  return (
    <>
      <section className="lg:py-24 py-12 lg:px-16 px-8" id="about-us">
        <main className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
          <div className="flex flex-1 flex-col">
            <h1 className="font-palanquin text-5xl leading-[58px] capitalize font-bold lg:max-w-lg">
              We Provide You
              <span className="text-[#FF6452]"> Super </span>
              <span className="text-[#FF6452]">Quality</span> Shoes
            </h1>
            <p className="mt-4 lg:max-w-lg text-lg text-[#6D6D6D] leading-7">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 lg:max-w-lg text-lg text-[#6D6D6D] leading-7">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-11">
              <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white">
                View details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/shoe8.svg"
              alt="shoe-8"
              width="570"
              height="522"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </main>
      </section>
      <section className="lg:px-16 px-8 py-10">
        <div className="flex justify-center flex-wrap gap-9">
          <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
              <img
                src="/truck-fast.svg"
                alt="free shipping"
                width="24"
                height="24"
              />
            </div>
            <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Free shipping
            </h1>
            <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
              Enjoy seamless shopping with our complimentary shipping service.
            </p>
          </div>
          <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
              <img
                src="/shield-tick.svg"
                alt="free shipping"
                width="24"
                height="24"
              />
            </div>
            <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Secure Payment
            </h1>
            <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
              Experience worry-free transactions with our secure payment
              options.
            </p>
          </div>
          <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
              <img
                src="/support.svg"
                alt="free shipping"
                width="24"
                height="24"
              />
            </div>
            <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Love to help you
            </h1>
            <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
