import { useContext } from "react";
import context from "./context";

function LayoutItem(props) {
  const { compName } = useContext(context);
  const { name, img = "", url = "#", count } = props;
  const imgPrefix = "/img/category-thumbnails";
  const imgUrl = `${imgPrefix}${compName ? `/${compName}` : ""}${img}`;
  return (
    <li>
      <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
          <img src={imgUrl} alt="" className="absolute inset-0 h-full w-full" />
        </div>
        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
          <a href={url}>
            <span className="absolute -inset-2.5 z-10"></span>
            <span className="relative">{name}</span>
          </a>
        </h4>
        <p className="relative mt-1.5 text-xs font-medium text-slate-500">
          {count} components
        </p>
      </div>
    </li>
  );
}

export default LayoutItem;
