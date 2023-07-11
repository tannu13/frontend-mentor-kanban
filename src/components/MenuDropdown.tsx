import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  items: { key: string; label: ReactNode; onClick: () => void }[];
};
export default function MenuDropdown(props: Props) {
  const { children, items } = props;
  return (
    <div className="relative leading-[0]">
      <Menu>
        <Menu.Button>{children}</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-8 flex w-48 origin-top-right flex-col rounded-lg bg-white shadow-dropdown ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-very-dark-grey-dark-bg">
            {items.map((item) => (
              <Menu.Item key={item.key}>
                {({ active }) => (
                  <button
                    className={clsx(
                      "group flex w-full items-center rounded-md px-4 py-2 text-b-lg text-medium-grey",
                      active && "opacity-75"
                    )}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
