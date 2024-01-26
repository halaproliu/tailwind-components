import React, { cloneElement } from "react";
import cls from "classnames";

function PreviewLayout(props) {
  const {
    moduleName,
    subModuleName,
    modules,
    title,
    children,
    iframeHeight,
    normalIframeHeight,
    placeholder,
    replaceMarkedList,
    className,
  } = props;

  const child = React.Children.map(children, (c) => {
    const childProps = c.props;
    return cloneElement(c, {
      iframeHeight,
      normalIframeHeight,
      modules,
      placeholder,
      replaceMarkedList,
      ...childProps,
    });
  });

  return (
    <div
      className={cls(
        "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        className,
      )}
    >
      <img
        src="/img/beams-basic.png"
        alt=""
        className="absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"
      />
      <div className="max-w-container relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>
          <nav
            aria-label="Breadcrumbs"
            className="order-first flex space-x-2 text-sm font-semibold"
          >
            <a className="text-slate-500 hover:text-slate-600" href="/">
              {moduleName}
            </a>
            <div aria-hidden="true" className="select-none text-slate-400">
              /
            </div>
            <a className="text-slate-500 hover:text-slate-600" href="/">
              {subModuleName}
            </a>
          </nav>
        </div>
        <div className="mt-10 space-y-24 pb-px">{child}</div>
      </div>
    </div>
  );
}

export default PreviewLayout;
