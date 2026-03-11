import svgPaths from "./svg-1jqo956539";

function Logo() {
  return (
    <div className="absolute inset-[0.42%_0_1.09%_0]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 55.1546">
        <g id="logo">
          <path clipRule="evenodd" d={svgPaths.p3be50100} fill="var(--fill-0, #04AFB8)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.pcfb6f80} fill="var(--fill-0, #04AFB8)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0.42%_0_1.09%_0]" data-name="Desktop">
      <Logo />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0.42%_0_1.09%_0]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Byp() {
  return (
    <div className="relative size-full" data-name="byp 1">
      <Page />
    </div>
  );
}