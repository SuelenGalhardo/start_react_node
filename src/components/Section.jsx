//import { Children } from "react";

export function Section({ title, children }) {
  return (
    <div className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </div>
  );
}
