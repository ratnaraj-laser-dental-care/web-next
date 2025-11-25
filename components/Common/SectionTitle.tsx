const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string | string[];
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {typeof paragraph === "string" ? (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        ) : Array.isArray(paragraph) ? (
          paragraph.map((p, index) => (
            <p
              key={index}
              className="mb-2 text-base !leading-relaxed text-body-color md:text-lg"
            >
              {p}
            </p>
          ))
        ) : null}
      </div>
    </>
  );
};

export default SectionTitle;
