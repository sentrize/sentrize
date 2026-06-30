export default function Metrics({
  items,
  dark = true,
}: {
  items: [string, string][];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "section section--dark" : "section"}>
      <div className="container">
        <div className="stats">
          {items.map(([n, l]) => (
            <div className="stat" key={l}>
              <div className="stat__num">{n}</div>
              <div className="stat__label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
