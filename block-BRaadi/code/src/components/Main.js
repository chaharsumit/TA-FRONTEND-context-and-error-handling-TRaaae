import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundary2 from "./ErrorBoundary2";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <SectionOne />
        <ErrorBoundary2>
          <SectionTwo />
        </ErrorBoundary2>
        <Location />
      </div>
    </section>
  );
}

export default Main;
