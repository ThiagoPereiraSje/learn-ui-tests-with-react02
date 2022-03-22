import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      {/* <h3 className="header">Cats</h3>
      <h3 title="Header" className="header">
        Dogs
      </h3>
      <h3 data-testid="header-1" className="header">
        Birds
      </h3> */}
    </>
  );
}
