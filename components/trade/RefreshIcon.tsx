import React from "react";

export default function RefreshIcon({ className = "", style, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={"cursor-pointer text-foreground-300 " + className}
      data-sentry-element="unknown"
      data-sentry-component="RefreshIcon"
      data-sentry-source-file="RefreshIcon.tsx"
      style={style}
      {...props}
    >
      <path
        d="M11.9385 5.42427H9.70827C9.42477 5.42427 9.19167 5.19117 9.19167 4.90767C9.19167 4.62417 9.42477 4.39107 9.70827 4.39107H10.6029C9.79647 3.25077 8.46717 2.50737 6.96147 2.50737C4.49817 2.50737 2.50107 4.50447 2.50107 6.96777C2.50107 9.43107 4.49817 11.4282 6.96147 11.4282C9.42477 11.4282 11.4219 9.43107 11.4219 6.96777C11.4219 6.68427 11.655 6.45117 11.9385 6.45117C12.222 6.45117 12.4551 6.68427 12.4551 6.96777C12.4551 9.99807 9.99807 12.4551 6.96777 12.4551C3.93747 12.4551 1.48047 9.99807 1.48047 6.96777C1.48047 3.93747 3.93747 1.48047 6.96777 1.48047C8.80737 1.48047 10.4328 2.38767 11.4282 3.77367V2.85387C11.4282 2.57037 11.6613 2.33727 11.9448 2.33727C12.2283 2.33727 12.4614 2.57037 12.4614 2.85387V4.91397C12.4488 5.19747 12.222 5.42427 11.9385 5.42427Z"
        fill="#A1A1AA"
        data-sentry-element="path"
        data-sentry-source-file="RefreshIcon.tsx"
      />
    </svg>
  );
}
