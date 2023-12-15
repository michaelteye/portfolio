import * as React from "react";

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={50}
      viewBox="0 -960 960 960"
      fill="CurrentColor"
      width={50}
      {...props}
    >
      <path d="M320-276 116-480l204-204 20 20-184 184 184 184-20 20Zm320 0-20-20 184-184-184-184 20-20 204 204-204 204Z" />
    </svg>
  );
}

export default Code;
