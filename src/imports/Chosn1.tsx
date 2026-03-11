import svgPaths from "./svg-5fw3ii00li";
import imgUntitled2 from "../assets/0a35c994d88250503ec964d48804826fa4c83b8f.png";
import { imgUntitled1 } from "./svg-4yzhz";

function MaskGroup() {
  return (
    <div className="absolute contents inset-[1.14%]" data-name="Mask group">
      <div className="absolute inset-[12.68%_9.86%_8.45%_12.68%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-8.188px_-8.188px] mask-size-[69.377px_69.377px]" data-name="Untitled-1" style={{ maskImage: `url('${imgUntitled1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUntitled2} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.14%]" data-name="Group-9">
      <div className="absolute inset-[1.14%]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.3762 69.3762">
          <path d={svgPaths.p1cebd800} fill="var(--fill-0, white)" id="Mask" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents inset-[1.14%]" data-name="Desktop">
      <Group />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[1.14%]" data-name="Page-1">
      <Desktop />
    </div>
  );
}

export default function Chosn() {
  return (
    <div className="relative size-full" data-name="chosn 1">
      <Page />
    </div>
  );
}