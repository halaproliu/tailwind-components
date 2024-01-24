function ContainerItem(props) {
  const { id, title, description, children } = props;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
      <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
        {children}
      </div>
    </section>
  );
}

export default ContainerItem;
