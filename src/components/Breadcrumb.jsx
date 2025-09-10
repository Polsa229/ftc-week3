// @flow strict

import * as React from "react";

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
            <a
              href={index === items.length - 1 ? "/#" : item.link}
              className="hover:underline font-medium text-secondary-60 text-[14px]"
            >
              {item.label}
            </a>
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
