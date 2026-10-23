"use client";

export default function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`boot ${isVisible ? "" : "done"}`} aria-hidden={!isVisible}>
      <div className="bwm">
        Nabila<span style={{ color: "#FF2E88" }}>.</span>
      </div>
      <div className="bline"><i /></div>
      <div className="btxt">Booting portfolio</div>
    </div>
  );
}
