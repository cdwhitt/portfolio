import Image from "next/image";
export const MainHeader: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-blue dark:text-white sm:text-5xl font-mono">
        casey.whittaker
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-black dark:text-blue sm:text-xl font-mono">
        software engineer{" "}
        <Image
          src={"/shock.png"}
          height={15}
          width={15}
          alt={""}
          className="inline-block"
        />{" "}
        writer
      </h2>
    </div>
  );
};
