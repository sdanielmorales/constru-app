import { ButtonHTMLAttributes, forwardRef } from "react";
import { CgSpinnerTwo } from "react-icons/cg";

type ButtonVariant = "primary" | "secondary" | "error" | "dashboard";

const classNameVariantMapping: Record<ButtonVariant, string> = {
  primary:
    "flex w-full justify-center rounded-md border border-[#dc6b0e] min-w-[140px] py-3 active:bg-opacity-95 ",
  secondary:
    "flex w-full rounded-full bg-[#dc6b0e] min-w-[140px] py-3 border border-slate-200",
  error:
    "flex w-full justify-center rounded-full border border-slate-200 bg-blue-100 min-w-[140px] py-3 active:bg-opacity-95",
  dashboard:
    "flex w-full justify-center rounded-full bg-[#FFE4B0] px-12 md:px-14 py-3 active:bg-opacity-95 ",
};

type ButtonProps = {
  variant?: ButtonVariant;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", className = "", isLoading, ...rest },
    ref,
  ) => {
    return (
      <div>
        <button
          ref={ref}
          disabled={isLoading}
          className={classNameVariantMapping[variant]}
          {...rest}
        >
          <div className="relative w-full">
            <div className={isLoading ? "opacity-0" : "block"}>{children}</div>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex animate-spin text-white">
                  <CgSpinnerTwo />
                </div>
              </div>
            )}
          </div>
        </button>
      </div>
    );
  },
);

export default Button;
