import { FirstView } from "src/components/FirstView";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Form } from "src/components/Form";

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="Contact" />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
