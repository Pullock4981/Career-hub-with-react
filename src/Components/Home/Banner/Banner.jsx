import userImg from "./../../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col justify-center items-center md:px-20 lg:flex-row-reverse">
        <div>
          <img src={userImg} className="lg:max-w-sm rounded-lg" />
        </div>
        <div>
          <h1 className="text-2xl text-center md:text-start md:text-5xl font-bold">
            One Step <br /> Closer To Your <br /> Dream Job
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="bg-violet-500 py-2 px-4 rounded-lg text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
