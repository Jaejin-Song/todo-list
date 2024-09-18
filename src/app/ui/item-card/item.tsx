import React from "react";
import "./item.css";

type ItemProps = {
  children: Readonly<React.ReactNode>;
};

export default function Item({ children }: ItemProps) {
  return <div className="item-card">{children}</div>;
}
