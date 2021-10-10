import { useContext } from "react";
import SidebarxModalProvider from "./SidebarxModalProvider";

export default function Sidebar() {
  const context = useContext(SidebarxModalProvider);
  if (!context) return null;
  if (context?.current) {
    const {
      current: {
        title,
        body,
        variant = "simple",
        urls: { readMore, main, readCaseStudy },
      },
    } = context;

    return (
      <div
        id="sidebar"
        className={[variant, readCaseStudy ? "has-case-study" : ""]
          .join(" ")
          .trim()}
      >
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="urls">
          {readMore && <a href={readMore}>Read More</a>}
          {main && <a href={main}>{main}</a>}
        </div>
        {readCaseStudy && (
          <a href={readCaseStudy} className="read-case-study">
            Read Case Study
          </a>
        )}
      </div>
    );
  } else {
    return null;
  }
}
