import svgPaths from "./svg-0vjgba0g7d";
import imgDefaultImg55Copy from "../assets/b0f173432393d6896a32b564505effede8c922c9.png";

function Alameda() {
  return (
    <div className="absolute contents inset-[0_0_0.64%_0]" data-name="alameda">
      <div className="absolute inset-[0_73.51%_0.64%_0]" data-name="default-img-55-copy">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDefaultImg55Copy} />
        </div>
      </div>
      <div className="absolute inset-[18.02%_0_3.32%_26.46%]" data-name="COLLEGEOFALAMEDA">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.678 56.6284">
          <path d={svgPaths.p2793f00} fill="var(--fill-0, #0C53A1)" id="COLLEGEOFALAMEDA" />
        </svg>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0_0_0.64%_0]" data-name="Desktop">
      <Alameda />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0_0.64%_0]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Alameda1() {
  return (
    <div className="relative size-full" data-name="alameda 1">
      <Page />
    </div>
  );
}