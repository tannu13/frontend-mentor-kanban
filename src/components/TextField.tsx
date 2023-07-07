import clsx from "clsx";

type Props = {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
};
const TextField = (props: Props) => {
  const { id, label, errorMessage, ...rest } = props;
  return (
    <div className="flex w-full shrink-0 flex-col items-start justify-center gap-2">
      <label
        htmlFor={id}
        className="text-b-md text-medium-grey dark:text-white"
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          className={clsx(
            "w-full rounded border border-solid border-medium-grey/25 bg-white pb-[9px] pl-[16px] pt-[8px] text-b-lg text-black placeholder:text-black/25 focus:border-main-purple focus:outline-none focus:ring-0 active:border-main-purple dark:bg-dark-grey dark:text-white dark:placeholder:text-white/25",
            errorMessage && "!border-red pr-[115px]"
          )}
          type="text"
          {...rest}
        />
        {errorMessage && (
          <p className="absolute inset-y-0 right-4 flex items-center text-b-lg text-red">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextField;
