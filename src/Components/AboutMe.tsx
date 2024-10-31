import Logo from "../assets/pic.png";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:place-items-center md:grid-cols-2 p-16 w-full"
    >
      <div className="hidden md:block max-w-md w-full">
        <img src={Logo} alt="img" className="w-full" />
      </div>
      <div className="flex flex-col gap-y-4 px-8 max-w-md w-full">
        <h1
          style={{ textShadow: "-14px 0px 0px rgba(103,102,102,0.23)" }}
          className="text-6xl font-bold text-gray-200 py-3"
        >
          About Me
        </h1>
        <p className="py-6 md:py-4 text-gray-400">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="flex flex-col gap-y-4 indent-2">
          <p className="text-gray-400">
            <span className="font-bold text-gray-100">Name: </span>Mohamad Reza
          </p>
          <p className="text-gray-400">
            <span className="text-gray-100 font-bold">Date of birth: </span>
            January 11, 2001
          </p>
          <p className="text-gray-400">
            <span className="text-gray-100 font-bold">Address: </span>485F+WP
            Sharak Afghanistan
          </p>
          <p className="text-gray-400">
            <span className="text-gray-100 font-bold">Zip code: </span> 3205
          </p>
          <p className="text-gray-400">
            <span className="text-gray-100 font-bold">Email: </span>
            reza.mohamadi.98115@gmail.com
          </p>
          <p className="text-gray-400">
            <span className="text-gray-100 font-bold">Phone: </span>+93
            780097590
          </p>
        </div>
        <p className="text-lg">
          <span className="text-primary">8</span> Project complete
        </p>
        <button className="text-black tracking-widest self-start uppercase rounded-3xl px-4 py-3 bg-primary">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
