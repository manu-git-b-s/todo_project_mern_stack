interface HeadingCompProps {
  heading1: string;
  heading2: string;
}

const HeadingComp = ({ heading1, heading2 }: HeadingCompProps) => {
  return (
    <>
      <h1 className="text-center sign-up-heading ">
        {heading1} <br />
        {heading2}
      </h1>
    </>
  );
};

export default HeadingComp;
