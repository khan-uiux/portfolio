import svgPaths from "./svg-w8kbcbx9jp";

function MaskGroup() {
  return (
    <div className="absolute inset-[0_25.78%_32.69%_24.75%]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.9578 47.1194">
        <g id="Mask group">
          <mask height="48" id="mask0_190_1538" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="50" x="0" y="0">
            <g id="Group">
              <path d="M0 0H49.9578V47.1194H0V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_190_1538)">
            <path clipRule="evenodd" d={svgPaths.p17e8fe00} fill="var(--fill-0, #01929F)" fillRule="evenodd" id="Fill-1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_25.78%_32.69%_24.75%]" data-name="Group-3">
      <MaskGroup />
    </div>
  );
}

function Aepiphany() {
  return (
    <div className="absolute contents inset-[0_0.8%_1.11%_0]" data-name="aepiphany">
      <div className="absolute inset-[74.29%_0.8%_1.11%_0]" data-name="AEpiphany">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.188 17.226">
          <path d={svgPaths.p2d657300} fill="var(--fill-0, #01929F)" id="AEpiphany" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0_0.8%_1.11%_0]" data-name="Desktop">
      <Aepiphany />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0.8%_1.11%_0]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Aepiphany1() {
  return (
    <div className="relative size-full" data-name="aepiphany 1">
      <Page />
    </div>
  );
}