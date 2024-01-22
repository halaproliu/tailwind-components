import Context from "./context";

function SectionItem(props) {
  const { id, title, compName = "", children } = props;

  return (
    <Context.Provider value={{ compName }}>
      <section
        id={id}
        className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
      >
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
          {children}
        </ul>
      </section>
    </Context.Provider>
  );
}

export default SectionItem;
