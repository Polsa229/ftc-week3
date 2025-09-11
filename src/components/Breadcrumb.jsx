// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-secondary-500 mb-4">
      <ul className="flex gap-2 items-center">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${
              index === items.length - 1 ? "" : ""
            }`}
          >
            <Link
              to={index === items.length - 1 ? "/" : item.link}
              className="hover:underline font-medium text-secondary-60 py-2 text-[14px]"
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="text-secondary-60 text-[14px]">{">"}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
