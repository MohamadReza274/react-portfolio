import { CSSProperties, ReactNode } from "react";
import { classNames } from "../utils";
import Gamehub from "../assets/gamehub.png";
import Todolist from "../assets/todolist.png";
import ProductDetail from "../assets/product.png";
import Container from "./Container";

const cartItems = [
  {
    id: 1,
    title: "Game Hub Website With React, TS",
    category: "Web Development",
    thumbnail: Gamehub,
    url: "https://game-hub-react-lyart.vercel.app/",
  },
  {
    id: 2,
    title: "Todo List With React useReducer",
    category: "Web Development",
    thumbnail: Todolist,
    url: "https://todo-reducer-three.vercel.app/",
  },
  {
    id: 3,
    title: "Product Page with React TS",
    category: "Web Development",
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
        " rounded-md max-w-md w-full overflow-hidden transform hover:scale-105 transition-transform duration-200  shadow-lg shadow-white",
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
      title="My Projects"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam"
    >
      {cartItems.map((item) => (
        <a key={item.id} href={item.url}>
          <ImageCard>
            <img
              src={item.thumbnail}
              alt="picture"
              className="w-full h-auto object-cover"
            />

            <div className="px-2 py-1">
              <h2>{item.title}</h2>
              <h5>{item.category}</h5>
            </div>
          </ImageCard>
        </a>
      ))}
    </Container>
  );
};

export default MyProjects;
