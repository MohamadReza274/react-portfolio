import { CSSProperties, ReactNode } from "react";
import { classNames } from "../utils";
import Gamehub from "../assets/gamehub.png";
import Todolist from "../assets/todolist.png";
import ProductDetail from "../assets/product.png";
import Dashboard from "../assets/dashboard.png";
import Container from "./Container";

const cartItems = [
  {
    id: 1,
    title: "Dashboard for MIS system with Reactjs, Typescript, TailwindCSS",
    thumbnail: Dashboard,
    url: "https://dashboard-mocha-psi-42.vercel.app/",
  },
  {
    id: 2,
    title: "Game Hub Website With React, TypeScript, Zustand, React-query",

    thumbnail: Gamehub,
    url: "https://game-hub-react-lyart.vercel.app/",
  },
  {
    id: 3,
    title: "Todo List With React useReducer",

    thumbnail: Todolist,
    url: "https://todo-reducer-three.vercel.app/",
  },
  {
    id: 4,
    title: "Product Page with React TypeScript",

    thumbnail: ProductDetail,
    url: "https://ecommerce-product-alpha.vercel.app/",
  },
];

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ImageCard = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={classNames(
        " rounded-md max-w-md w-full overflow-hidden transform hover:scale-105 transition-transform duration-200  shadow-lg shadow-gray-700",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

const MyProjects = () => {
  return (
    <Container
      id="projects"
      title="My Projects"
      content="All Projects I built and deployed them on vercel"
    >
      {cartItems.map((item) => (
        <a key={item.id} href={item.url}>
          <ImageCard>
            <img
              src={item.thumbnail}
              alt="picture"
              className="w-full h-auto object-cover"
            />

            <div className="px-2 py-2">
              <h2>{item.title}</h2>
            </div>
          </ImageCard>
        </a>
      ))}
    </Container>
  );
};

export default MyProjects;
