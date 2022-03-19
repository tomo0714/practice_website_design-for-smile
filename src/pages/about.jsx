import { Company } from "src/components/Campany";
import { FirstView } from "src/components/FirstVew";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Message } from "src/components/Message";
import { Vision } from "src/components/Vision";

function About() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="About" />
        <Vision />
        <Message />
        <Company />
      </main>
      <Footer />
    </div>
  );
}

export default About;
