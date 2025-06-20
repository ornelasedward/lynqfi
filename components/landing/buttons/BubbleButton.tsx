import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BubbleButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        `
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl 
          border border-cyan-700 bg-black
          px-6 py-2
          text-white transition-all duration-300
          hover:border-cyan-400 hover:bg-zinc-900
          active:ring-2 active:ring-cyan-400 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-cyan-500
        `,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
