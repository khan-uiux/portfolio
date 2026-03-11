import svgPaths from "./svg-1fskun61ly";

function Group() {
  return (
    <div className="absolute inset-[0_0.83%_1.2%_-0.01%]" data-name="Group-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109.093 69.16">
        <g id="Group-5">
          <path d={svgPaths.p32ef600} fill="var(--fill-0, black)" id="CareGiver" />
          <g id="Group-3">
            <path d={svgPaths.p3f90d3f0} fill="var(--fill-0, #266FA9)" id="Rectangle" />
            <path clipRule="evenodd" d={svgPaths.p8027880} fill="var(--fill-0, #266FA9)" fillRule="evenodd" id="Rectangle-Copy" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0_0.83%_1.2%_-0.01%]" data-name="Desktop">
      <Group />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0.83%_1.2%_-0.01%]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Caregiver() {
  return (
    <div className="relative size-full" data-name="caregiver 1">
      <Page />
    </div>
  );
}