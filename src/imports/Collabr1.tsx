import svgPaths from "./svg-mfjsz3unma";
import { imgGroup } from "./svg-kfnfy";

function Group() {
  return (
    <div className="absolute inset-[22.86%_10.65%_42.89%_11.25%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-7.199px_-15.988px] mask-size-[64px_69.879px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.987 23.9753">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p197cd600} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d={svgPaths.p2ce98c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[22.86%_10.65%_42.89%_11.25%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[0.02%_0_0.16%_0]" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute inset-[0.02%_0_0.16%_0]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 69.8786">
        <g id="Mask group">
          <mask height="70" id="mask0_190_1575" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="64" x="0" y="0">
            <g id="Group">
              <path d={svgPaths.pb486e00} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_190_1575)">
            <path d={svgPaths.p2babca00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Collabr() {
  return (
    <div className="absolute contents inset-[0.02%_0_0.16%_0]" data-name="collabr">
      <div className="absolute inset-[0.02%_0_0.16%_0]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 69.8786">
          <path d={svgPaths.pb486e00} fill="var(--fill-0, #2B2C31)" id="Mask" />
        </svg>
      </div>
      <MaskGroup />
      <MaskGroup1 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[0.02%_0_0.16%_0]" data-name="Desktop">
      <Collabr />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0.02%_0_0.16%_0]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Collabr1() {
  return (
    <div className="relative size-full" data-name="collabr 1">
      <Page />
    </div>
  );
}