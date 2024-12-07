export default function Slider() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://cdn.pixabay.com/photo/2019/07/07/21/57/baseball-4323387_640.jpg"
          className="w-full h-[450px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/4 left-10 text-white">
          <h2 className="text-4xl font-bold">Baseball Gear</h2>
          <p className="text-lg mt-2">Get the best gear for your game.</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/29/17/00/tennis-1938928_640.jpg"
          className="w-full h-[450px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/4 left-10 text-white">
          <h2 className="text-4xl font-bold">Tennis Equipment</h2>
          <p className="text-lg mt-2">
            Equip yourself with premium tennis gear.
          </p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/16/17/39/fun-3023031_640.jpg"
          className="w-full h-[450px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/4 left-10 text-white">
          <h2 className="text-4xl font-bold">Football Accessories</h2>
          <p className="text-lg mt-2">All your football needs in one place.</p>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/11/17/32/tennis-4922792_640.jpg"
          className="w-full h-[450px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/4 left-10 text-white">
          <h2 className="text-4xl font-bold">Sports Apparel</h2>
          <p className="text-lg mt-2">
            Find comfortable sports apparel for every season.
          </p>
        </div>
      </div>
    </div>
  );
}
