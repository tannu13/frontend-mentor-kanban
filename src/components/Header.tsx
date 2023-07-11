/* eslint-disable @next/next/no-img-element */
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import MenuDropdown from "./MenuDropdown";

export default function Header() {
  return (
    <header className="border-b-solid flex h-16 flex-row justify-between border-b border-b-lines-light bg-white px-4 dark:border-b-lines-dark dark:bg-dark-grey sm:h-20 sm:px-6 lg:h-24">
      <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-8">
        <img
          src="/assets/logo-mobile.svg"
          alt="kanban logo"
          className="h-6 w-6 sm:hidden"
          width={24}
          height={24}
        />
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
        <div className="hidden h-full w-[1px] bg-lines-light dark:bg-lines-dark sm:block">
          &nbsp;
        </div>
        <div className="flex flex-row items-center gap-2 py-4">
          <div className="hidden text-black dark:text-white sm:block sm:text-[20px] lg:text-h-xl">
            Platform Launch
          </div>
          <button className="flex flex-row items-center gap-2 sm:hidden">
            <div className="text-h-lg text-black dark:text-white">
              Platform Launch
            </div>
            <ChevronDownIcon className="h-4 w-4 text-main-purple" />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-4">
        <Button variant="primary">
          <img
            alt="Add"
            src="/assets/icon-add-task-mobile.svg"
            className="sm:hidden"
          />
          <span className="hidden text-h-md sm:inline">+ Add New Task</span>
        </Button>
        <MenuDropdown
          items={[
            {
              key: "Edit Board",
              label: "Edit Board",
              onClick: () => {
                console.log("Edit Board");
              },
            },
            {
              key: "Delete Board",
              label: <span className="text-red">Delete Board</span>,
              onClick: () => {
                console.log("Delete Board");
              },
            },
          ]}
        >
          <img
            alt="vertical-ellipsis"
            src="/assets/icon-vertical-ellipsis.svg"
            className="h-5 px-2"
          />
        </MenuDropdown>
      </div>
    </header>
  );
}
