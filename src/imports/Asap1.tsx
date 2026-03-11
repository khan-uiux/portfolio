import svgPaths from "./svg-ncfyvppoxj";

function AsapColorFull() {
  return (
    <div className="absolute inset-[0_0.19%_1.29%_0]" data-name="ASAP!-color-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208.599 68.1081">
        <g id="ASAP!-color-full">
          <path clipRule="evenodd" d={svgPaths.pd488380} fill="var(--fill-0, #BC1823)" fillRule="evenodd" id="Fill-2" />
          <g id="Group-3">
            <path clipRule="evenodd" d={svgPaths.p27b0c500} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
            <path clipRule="evenodd" d={svgPaths.p3846ca80} fill="var(--fill-0, #BC1823)" fillRule="evenodd" id="Path_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0_0.19%_1.29%_0]" data-name="Desktop">
      <AsapColorFull />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0.19%_1.29%_0]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Asap() {
  return (
    <div className="relative size-full" data-name="asap 1">
      <Page />
    </div>
  );
}