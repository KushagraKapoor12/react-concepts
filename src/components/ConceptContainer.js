import React from "react";
import { Link } from "react-router-dom";

const concepts = [
  { path: "/classcomponent", label: "Class Component" },
  { path: "/thisstate", label: "this.state" },
  { path: "/propsandevents", label: "Props & Events" },
  { path: "/functionalcomponents", label: "Functional Components" },
  { path: "/usestate", label: "useState" },
  { path: "/form", label: "Form" },
  { path: "/conditionalrendering", label: "Conditional Rendering" },
  { path: "/listandkeys", label: "List & Keys" },
  { path: "/useeffect", label: "useEffect" },
  { path: "/userefs", label: "useRefs" },
  { path: "/usememo", label: "useMemo" },
  { path: "/usecallback", label: "useCallback" },
  { path: "/usereducer", label: "useReducer" },
  { path: "/customhook", label: "Custom Hook" },
  { path: "/router", label: "Router" },
  { path: "/portals", label: "Portals" },
  { path: "/errorboundaries", label: "Error Boundaries" },
  { path: "/contextapi", label: "Context API" },
  { path: "/redux", label: "Redux" },
  { path: "/lifecyclemethods", label: "LifeCycle Methods" },
  { path: "/lazyloading", label: "Lazy Loading" },
];

function ConceptContainer() {
  return (
    <div className="item_container">
      {concepts.map((concept) => (
        <div key={concept.path} className="item">
          <Link to={concept.path}>
            <p>{concept.label}</p>
          </Link>
        </div>
      ))}

      <div className="disabled">
        <p>JEST Testing</p>
      </div>
    </div>
  );
}

export default ConceptContainer;
