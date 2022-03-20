import { AboutByIndex } from "src/components/AboutByIndex";
import { Company } from "src/components/Company";
import { ContactByIndex } from "src/components/ContactByIndex";
import { FirstView } from "src/components/FirstView";
import { Form } from "src/components/Form";
import { Message } from "src/components/Message";
import { Topics } from "src/components/Topics";
import { Vision } from "src/components/Vision";
import { WorksAndCulture } from "src/components/WorksAndCulture";

export const Main = (props) => {
  const id = props.id;
  return (
    <main>
      <FirstView id={id} />
      {id === "Index" ? (
        <>
          <AboutByIndex />
          <WorksAndCulture />
          <Topics />
          <ContactByIndex />
        </>
      ) : id === "About" ? (
        <>
          <Vision />
          <Message />
          <Company />
        </>
      ) : id === "Contact" ? (
        <Form />
      ) : null}
      ;
    </main>
  );
};
