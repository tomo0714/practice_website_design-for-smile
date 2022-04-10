export const FirstView = (props) => {
  return (
    <div className="h-screen after:content-[''] after:block after:absolute after:top-0 after:right-0 after:bg-black after:w-2/4 after:h-3/4 after:-z-10">
      <div className="h-5/6 w-3/4 bg-first-view bg-cover bg-center relative bg-neutral-600 bg-blend-overlay">
        <div className="absolute top-1/2 lg:right-0 -right-1/4 lg:translate-x-1/2 -translate-y-1/2">
          {props.id === "Index" ? (
            <>
              <p className="sm:text-3xl text-base font-bold text-white leading-normal">
                デザインで人を笑顔にする社会
                <br />
                DIGSMILE INC.
              </p>
              <h2 className="sm:text-7xl text-6xl font-bold text-white leading-tight uppercase">
                Design
                <br />
                for
                <br />
                smile.
              </h2>
            </>
          ) : props.id === "About" ? (
            <>
              <h2 className="sm:text-7xl text-6xl font-bold text-white leading-tight uppercase">
                About US
              </h2>
              <p className="sm:text-3xl text-base font-bold text-white leading-normal">
                DIGSMILEについて
              </p>
            </>
          ) : props.id === "Contact" ? (
            <>
              <h2 className="sm:text-7xl text-6xl font-bold text-white leading-tight uppercase">
                Contact
              </h2>
              <p className="sm:text-3xl text-base font-bold text-white leading-normal">
                お問い合わせ
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
