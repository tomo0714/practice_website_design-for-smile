import { AboutByIndex } from "src/components/AboutByIndex";
import { ContactByIndex } from "src/components/ContactByIndex";
import { FirstView } from "src/components/FirstView";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Topics } from "src/components/Topics";
import { WorksAndCulture } from "src/components/WorksAndCulture";

function Index() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="Index" />
        <AboutByIndex />
        <WorksAndCulture />
        <Topics />
        <ContactByIndex />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
