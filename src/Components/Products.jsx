
export default function Products() {
  return (
    <>
    <div className="lg:py-24 py-12 lg:px-16 px-8" id="products">
      <main className="container mx-auto max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-5xl font-palanquin font-bold">
            <span className="text-[#FF6452]">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg text-[#6D6D6D] leading-7">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src="/shoe4.svg" alt="" className="w-[280px] h-[280px] max-w-full" />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src="/star.svg" alt="ratings" width='24' height='24' />
              <p className="text-xl leading-normal text-[#6D6D6D]">(4.5)</p>
            </div>
            <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-01
            </h1>
            <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">$200.20</p>
          </div>
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src="/shoe5.svg" alt="" className="w-[280px] h-[280px] max-w-full" />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src="/star.svg" alt="ratings" width='24' height='24' />
              <p className="text-xl leading-normal text-[#6D6D6D]">(4.2)</p>
            </div>
            <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-10
            </h1>
            <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">$210.20</p>
          </div>
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src="/shoe6.svg" alt="" className="w-[280px] h-[280px] max-w-full" />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src="/star.svg" alt="ratings" width='24' height='24' />
              <p className="text-xl leading-normal text-[#6D6D6D]">(4.6)</p>
            </div>
            <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-100
            </h1>
            <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">$220.20</p>
          </div>
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src="/shoe7.svg" alt="" className="w-[280px] h-[280px] max-w-full" />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src="/star.svg" alt="ratings" width='24' height='24' />
              <p className="text-xl leading-normal text-[#6D6D6D]">(4.7)</p>
            </div>
            <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-001
            </h1>
            <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">$230.20</p>
          </div>
        </div>

      </main>
      
    </div>
    </>
  )
}
