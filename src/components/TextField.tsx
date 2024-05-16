import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { IoIosSearch } from "react-icons/io";
type TextFieldProps = {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  isSearch?: boolean;
  multiline?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement>;

const TextField = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  TextFieldProps
>(
  (
    { label, placeholder, icon, isSearch, errorMessage, multiline, ...rest },
    ref,
  ) => {
    return (
      <div className={`flex flex-col ${label && "gap-4"}`}>
        <p className="font-semibold">{label}</p>
        {multiline ? (
          <textarea
            ref={ref}
            placeholder={placeholder}
            className="w-full rounded-md border p-2 outline-none"
            {...rest}
          />
        ) : (
          <div className={`${icon && "flex items-center gap-4 pl-2"}`}>
            <div className="text-3xl">{icon}</div>
            <div className="flex w-full flex-col gap-2">
              <div
                className={`flex rounded-lg border bg-white px-3 py-3 ${isSearch && "flex items-center justify-between gap-2"}`}
              >
                {isSearch && <IoIosSearch />}
                <input
                  ref={ref}
                  className="w-full appearance-none bg-white leading-tight text-gray-700 focus:outline-none"
                  placeholder={placeholder}
                  {...rest}
                  autoComplete={""}
                />
              </div>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className="text-xs text-red-500">{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default TextField;
