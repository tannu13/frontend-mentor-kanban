/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Toggle from "./Toggle";

const boards = [
  {
    name: "Roadmap",
  },
  {
    name: "Launch",
  },
  {
    name: "Backlog",
  },
];
export default function Aside() {
  const selectedBoard = "Roadmap";
  return (
    <>
      <aside className="fixed left-0 top-0 hidden h-screen flex-col justify-between border-r border-r-lines-light bg-white dark:border-r-lines-dark dark:bg-dark-grey sm:flex sm:w-[260px] lg:w-[300px]">
        <div className="mt-8 flex w-full flex-col">
          <div className="mb-[54px] pl-5">
            <img
              src="/assets/logo-dark.svg"
              alt="kanban logo"
              className="hidden h-[25px] w-[152px] dark:!hidden sm:block"
              width={152}
              height={25}
            />
            <img
              src="/assets/logo-light.svg"
              alt="kanban logo"
              className="hidden h-[25px] w-[152px] dark:sm:block"
              width={152}
              height={25}
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-[19px] pl-8 text-h-sm uppercase text-medium-grey">
              All Boards ({boards.length})
            </div>
            {boards.map((board) => (
              <button
                key={board.name}
                className={clsx(
                  "group mr-5 flex flex-row items-center gap-4 rounded-r-full py-[15px] pl-8 text-h-md text-medium-grey transition hover:bg-main-purple/10 dark:hover:bg-white lg:mr-6",
                  selectedBoard === board.name && "is-selected bg-main-purple"
                )}
              >
                <IconBoard />
                <span className="group-hover:!text-main-purple group-[.is-selected]:text-white">
                  {board.name}
                </span>
              </button>
            ))}
            <button
              className={clsx(
                "group mr-5 flex flex-row items-center gap-4 rounded-r-full py-[15px] pl-8 text-h-md text-medium-grey transition hover:bg-main-purple/10 lg:mr-6"
              )}
            >
              <IconBoard alwaysPrimary />
              <span className="text-main-purple">+ Create New Board</span>
            </button>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <div className="mx-3 flex h-12 flex-row items-center justify-center gap-6 rounded-lg bg-light-grey-light-bg dark:bg-very-dark-grey-dark-bg lg:mx-6">
            <img
              src="/assets/icon-light-theme.svg"
              alt="light-mode"
              title="Light Mode"
              className="h-5 w-5"
              width={18}
              height={18}
            />
            <Toggle />
            <img
              src="/assets/icon-dark-theme.svg"
              alt="dark-mode"
              title="Dark Mode"
              className="h-4 w-4"
              width={16}
              height={16}
            />
          </div>
          <button
            className={clsx(
              "group mr-5 flex flex-row items-center gap-4 rounded-r-full py-[15px] pl-8 text-h-md text-medium-grey transition hover:bg-main-purple/10 dark:hover:bg-white lg:mr-6"
            )}
          >
            <IconHideSidebar />
            <span className="group-hover:!text-main-purple group-[.is-selected]:text-white">
              Hide Sidebar
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

const IconBoard = ({ alwaysPrimary }: { alwaysPrimary?: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      "fill-medium-grey group-hover:!fill-main-purple group-[.is-selected]:fill-white",
      alwaysPrimary && "!fill-main-purple"
    )}
  >
    <g id="fluent_board-split-24-regular">
      <path
        id="Shape"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
        // fill="#828FA3"
      />
    </g>
  </svg>
);

const IconHideSidebar = () => (
  <svg
    width="18"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-medium-grey group-hover:!fill-main-purple"
  >
    <path
      d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
      // fill="#828FA3"
    />
  </svg>
);

const IconShowSidebar = () => (
  <svg
    width="16"
    height="11"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-white"
  >
    <path
      d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
      // fill="#FFF"
    />
  </svg>
);
