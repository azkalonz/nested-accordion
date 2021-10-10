import React, { useRef } from "react";
import Icon from "../Icon";
import { ReactComponent as ArrowIcon } from "../../icons/icon-arrow.svg";

interface AccordionProps {
  children?: React.ReactNode;
  title: string;
  variant?: "row" | "column";
  color?: string;
  arrow?: boolean;
  parent?: boolean;
  style?: React.CSSProperties;
  isOpen?: boolean;
}

export default function Accordion(props: AccordionProps) {
  const {
    arrow = true,
    parent = false,
    isOpen = false,
    style = {},
    color,
    title,
    children,
  } = props;
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleContent = () => {
    if (!accordionRef.current) return;
    const contains = accordionRef.current.classList.contains("is-closed");
    accordionRef.current.classList[contains ? "remove" : "add"]("is-closed");
  };

  return (
    <div
      ref={accordionRef}
      className={[
        "accordion",
        parent ? "parent" : "",
        color ? "themed" : "",
        !isOpen ? "is-closed" : "is-open",
      ]
        .join(" ")
        .trim()}
      style={{ background: color + "1a", color, ...style }}
    >
      <div className="title" onClick={toggleContent}>
        <b style={{ color }}>{title}</b>
        {arrow && <Icon icon={<ArrowIcon />} />}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
