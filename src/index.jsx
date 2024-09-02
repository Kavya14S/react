import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import productData from "./api/DummyData";
import Header from "./component/Header/Header";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Count from "./component/count/Count";
import CommentComponent from "./component/CommentComponent/CommentComponent";
import Contactform from "./component/contactform/Contactform";

{productData.map((items) => {
  return (
    <>
      <Card
        key={uuidv4()}
        content={items.content}
        imgsrc={items.imgsrc}
      />
    </>
  );
})}

const AppLayout = () => {
  return (
    <>
      
      <Header />
      <div>
        <Link to="/Count">
          <button className="bg-slate-600 text-white p-1 rounded-md px-2 m-1">count</button>
        </Link>
        <Link to="/Comment">
          <button className="bg-slate-600 text-white p-1 rounded-md px-2 m-1">commentComponent</button>
        </Link>
        <Link to="/Card">
          <button className="bg-slate-600 text-white p-1 rounded-md px-2 m-1">card</button>
        </Link>
        <Link to="/contact">
          <button className="bg-slate-600 text-white p-1 rounded-md px-2 m-1">contact form</button>
        </Link>
        
      </div>
      <Outlet/>

      <Footer />

    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/count",
        element: <Count />,
      },
      {
        path:"/comment",
        element: <CommentComponent/>,
      },
      {
        path: "/Card",
        element: productData.map((items) => {
          return (
            <>
              <Card
                key={uuidv4()}
                content={items.content}
                imgsrc={items.imgsrc}
              />
            </>
          );
        })
      },
      {
        path: "/contact",
        element: <Contactform/>
      }
    ]
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
