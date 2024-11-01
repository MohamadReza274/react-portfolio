const Header = () => {
  return (
    <header className="grid lg:px-20 grid-cols-3 bg-[url('src/assets/profile.png')] md:bg-none bg-cover h-screen bg-center  bg-no-repeat ">
      <div className="flex overflow-visible  col-span-3 md:col-span-1 z-10 flex-col justify-center text-center md:text-left mx-auto gap-y-6 md:px-20 w-full">
        <h3 className="text-3xl text-primary tracking-wide">Hello!</h3>
        <h1 className="text-5xl">
          <span className="md:text-nowrap text-gray-200">I'm a </span>
          <span className="text-secondary text-nowrap ">Front-End </span>
          <span className="text-primary">Web Developer</span>
        </h1>
        <div className="flex gap-x-2 text-nowrap mx-auto md:mx-0">
          <a href="#contact" className="rounded-3xl bg-primary px-4 py-2">
            Hire Me
          </a>
          <a
            href="#projects"
            className="rounded-3xl border px-4 py-2 border-white text-white"
          >
            My Works
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center col-span-2 ">
        {/* <img className="max-w-lg" src={Pic1} alt="Picture" /> */}
      </div>
    </header>
  );
};

export default Header;
