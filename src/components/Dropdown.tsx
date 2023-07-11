import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export type TDropdownValue = { name: string };
type Props = {
  id: string;
  name: string;
  label?: string;
  value?: TDropdownValue;
  items: TDropdownValue[];
  onChange: (value: TDropdownValue) => void;
  placeholder?: string;
};

const Dropdown = (props: Props) => {
  const { id, name, label, value, items, onChange, placeholder } = props;

  return (
    <div className="flex w-full shrink-0 flex-col items-start justify-center gap-2">
      <Listbox value={value} onChange={onChange} name={name}>
        <Listbox.Label
          htmlFor={id}
          className="text-b-md text-medium-grey dark:text-white"
        >
          {label}
        </Listbox.Label>
        <div className="relative w-full">
          <Listbox.Button
            id={id}
            className={({ open }) => {
              return `flex w-full items-start rounded border border-solid border-medium-grey/25 bg-white pb-[9px] pl-[16px] pt-[8px] text-b-lg text-black placeholder:text-black/25 focus:border-main-purple focus:outline-none focus:ring-0 active:border-main-purple dark:bg-dark-grey dark:text-white dark:placeholder:text-white/25 ${
                open ? "!border-main-purple" : ""
              }`;
            }}
          >
            {value?.name ? (
              <span className="truncate">{value.name}</span>
            ) : (
              <span className="text-black/25 dark:text-white/25">
                {placeholder}
              </span>
            )}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-main-purple"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-b-lg shadow-dropdown focus:outline-none dark:bg-very-dark-grey-dark-bg">
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none px-4 py-2 ${
                      active
                        ? "bg-main-purple-hover text-main-purple"
                        : "text-medium-grey"
                    }`
                  }
                  value={item}
                >
                  {item.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
