import React, { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

  const [ open, setOpen ] = useState(false);
  const [ color, setColor ] = useState("");
  const [ message, setMessage ] = useState("");

  const show = (message ,type) => {
    let color;
    switch (type) {
      case "success":
        color = "#357a38";
        break;
      case "warn":
        color = "#ffa000";
        break;
      case "error":
        color = "#d32f2f";
        break;
      default:
        color = "#313131";
        break;
    }
    setColor(color);
    setMessage(message);
    setOpen(!open);
  };

  return (
    <ToastContext.Provider
      value={{
        show
      }}
    >
      <div onClose={() => setOpen(false)} style={{ backgroundColor : color }} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const withToastContext = ChildComponent => props => (
  <ToastContext.Consumer>
    {context => <ChildComponent {...props} toast={context} />}
  </ToastContext.Consumer>
)