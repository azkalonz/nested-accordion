import { useEffect, useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import {
  AccordionContent,
  AccordionType,
} from "./components/Accordion/schema/AccordionSchemaType";
import validateSchema from "./components/Accordion/schema/utils/validateSchema";
import Sidebar from "./components/SidebarxModal/Sidebar";
import SidebarxModalProvider from "./components/SidebarxModal/SidebarxModalProvider";

function App() {
  const [data, setData] = useState<AccordionType[]>();
  const [current, setCurrent] = useState<AccordionContent>();
  const [error, setError] = useState<String>();

  const NestedAccordion = function (index: number) {
    if (!data) return null;
    if (index >= data.length) return null;

    const accordion = data[index];

    return (
      <Accordion
        key={index}
        title={accordion.title}
        parent={true}
        isOpen={accordion.open}
      >
        {accordion.content &&
          accordion.content.map((subAccordion, index) => (
            <Accordion
              arrow={false}
              key={index}
              title={subAccordion.title}
              color={subAccordion.color}
              background={subAccordion.background}
              isOpen={subAccordion.open}
              fullWidth={subAccordion.fullWidth}
              style={{
                flex: subAccordion.columns || 1,
              }}
            >
              {subAccordion.sections && (
                <ul
                  className="category-items"
                  style={{
                    gridTemplateColumns: `repeat(${subAccordion.columns},1fr)`,
                    gap: 16,
                  }}
                >
                  {subAccordion.sections.map((section, index) => {
                    const style = {
                      background:
                        section.background ||
                        section.color ||
                        subAccordion.sectionColor,
                      border: `3px solid ${
                        (section.color || subAccordion.sectionColor) + "80"
                      }`,
                    };
                    if (style.background !== section.background) {
                      style.background += "80";
                    }
                    return (
                      <li
                        className="item"
                        key={index}
                        style={style}
                        onClick={({ currentTarget }) => {
                          document
                            .querySelectorAll(".item.selected")
                            .forEach((element) => {
                              element.classList.remove("selected");
                            });
                          currentTarget.classList.add("selected");
                          setCurrent(section.content);
                        }}
                      >
                        <h1>{section.title}</h1>
                        <h2>{section.subtitle}</h2>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Accordion>
          ))}
        {NestedAccordion(index + 1)}
      </Accordion>
    );
  };

  useEffect(() => {
    fetch("/accordion_data.json")
      .then((resp) => resp.json())
      .then((data) => {
        if (validateSchema(data).errors.length) {
          setError(validateSchema(data).errors[0].stack);
        } else {
          setData(data);
        }
      });
  }, []);

  return (
    <SidebarxModalProvider.Provider value={{ current, setCurrent }}>
      <div className="wrapper">
        {error && <b>{error}</b>}
        {data && !error && NestedAccordion(0)}
        <Sidebar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </SidebarxModalProvider.Provider>
  );
}

export default App;
