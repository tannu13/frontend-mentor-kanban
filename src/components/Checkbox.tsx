import clsx from "clsx";

type Props = {
  id: string;
  name?: string;
  label?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = (props: Props) => {
  const { id, label, checked, ...rest } = props;
  return (
    <label
      htmlFor={id}
      className="flex w-full shrink-0 cursor-pointer flex-row items-center gap-4 rounded bg-light-grey-light-bg p-3 hover:!bg-main-purple/25 dark:bg-very-dark-grey-dark-bg"
    >
      <input
        id={id}
        className="h-4 w-4 appearance-none rounded-sm border border-solid border-medium-grey/25 text-white checked:border-none checked:text-main-purple focus:border-main-purple focus:outline-0 focus:ring-0 focus:ring-offset-0"
        type="checkbox"
        checked={checked}
        {...rest}
      />
      <span
        className={clsx(
          "text-b-md text-black dark:text-white",
          checked && "line-through opacity-50"
        )}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
