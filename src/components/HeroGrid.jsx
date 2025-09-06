
function HeroGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 min-h-[60vh] md:min-h-[80vh] gap-4 mt-4">
      <div className="relative col-span-1 lg:col-span-2 rounded-2xl">
        <img
          src={"/assets/images/outdoor-activities-to-try-for-hotel-lovers.jpg"}
          className="rounded-2xl w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
            Color of <br /> Summer
            <br /> Outfit
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
            100+ Collections for your <br /> outfit inspirations <br />
            in this summer
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-1 md:grid-rows-2 gap-4">
        <div className="rounded-2xl relative h-40 md:h-auto">
          <img
            src="/assets/images/100850333-aa1be679-46f7-4c9b-8432-09467a9fa693.jpg"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Outdoor <br /> Active
            </h1>
          </div>
        </div>
        <div className="rounded-2xl relative h-40 md:h-auto">
          <img
            src="/assets/images/istockphoto-494349086-612x612.jpg"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGrid;
