import { STACK_TAGS } from "@/lib/constants";

/* Endless scrolling strip of tools — the list is doubled so the loop is seamless. */
export default function StackTicker() {
  const items = [...STACK_TAGS, ...STACK_TAGS];
  return (
    <div className="marquee" aria-label="Tools I work with">
      <div className="mtrack">
        {items.map((t, i) => (
          <span className="mq" key={i} aria-hidden={i >= STACK_TAGS.length}>{t}</span>
        ))}
      </div>
    </div>
  );
}
