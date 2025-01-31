import { twMerge } from "tailwind-merge";

export default function Hamburger({
  setSwitcher,
  switcher,
}: {
  setSwitcher: React.Dispatch<React.SetStateAction<boolean>>;
  switcher: boolean;
}) {
  return (
    <button
      type="button"
      className="absolute nav-button w-6 h-6  cursor-pointer sm:hidden right-8"
      onClick={(e) => setSwitcher(() => !switcher)}
    >
      <div
        className={twMerge(
          `${
            switcher ? "bg-transparent" : "bg-white"
          } w-6 h-1 ease-in-out duration-200 rounded absolute top-1/2 -translate-y-1/2`,
          // after:a
          ` after:block after:absolute   after:w-6 after:h-1 after:bg-white after:rounded after:ease-in-out after:duration-200 ${
            switcher
              ? "after:bottom-0  after:rotate-[405deg]"
              : "after:bottom-2  after:rotate-[0deg]"
          }`,
          // before:
          ` before:block before:w-6 before:absolute before:bottom-5 before:h-1 before:bg-white before:rounded before:ease-in-out before:duration-200 ${
            switcher
              ? "before:top-0 before:rotate-[-405deg]"
              : "before:top-2  before:rotate-[0deg]"
          } `
        )}
      ></div>
    </button>
  );
}
