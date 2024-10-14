import Pic1 from "../assets/profile.png";

const Header = () => {
  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 bg-[url('src/assets/profile.png')] bg-cover bg-center ">
      <div className="flex flex-col justify-center mx-auto gap-y-6">
        <h3 className="text-2xl text-primary tracking-wide">Hello!</h3>
        <h1 className="text-3xl">
          I'm a <span className="text-secondary">Front-End</span>
          <span className="text-primary">Web Developer</span>
        </h1>
        <div className="flex gap-x-2">
          <button className="rounded-full bg-primary px-4 py-2">Hire Me</button>
          <button className="rounded-full border px-4 py-2 border-black">
            My Works
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <img className="max-w-lg" src={Pic1} alt="Picture" />
      </div>
    </header>
  );
};

export default Header;
