import imgHomePage from "../assets/359bb69573298178c44c8a355dc649ca75665c10.png";

function HomePage() {
  return (
    <div className="absolute contents inset-0" data-name="home-page">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHomePage} />
      </div>
    </div>
  );
}

function Page1Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1-Copy">
      <HomePage />
    </div>
  );
}

export default function ElectroRepair() {
  return (
    <div className="relative size-full" data-name="electro-repair 1">
      <Page1Copy />
    </div>
  );
}