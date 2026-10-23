import { STACK_TAGS } from "@/lib/constants";

const SLOGAN = ["AI Engineer", "AR Developer", "Full-Stack Builder", "Award Winner", "Software Tester", "Business Analyst", "System Analyst"];

function Track({ words }: { words: string[] }) {
  const items = [...words, ...words];
  return (
    <div className="mtrack">
      {items.map((w, i) => <span className="tq" key={i} aria-hidden={i >= words.length}>{w}</span>)}
    </div>
  );
}

/* Two crossing, counter-scrolling banner tapes. */
export default function Tapes() {
  return (
    <div className="tapes" aria-label="What I do and the tools I use">
      <div className="tape b"><Track words={STACK_TAGS} /></div>
      <div className="tape a"><Track words={SLOGAN} /></div>
    </div>
  );
}
