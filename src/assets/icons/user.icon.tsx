import { SVGProps } from "react";

export function UserIcon({
  width = 27,
  height = 27,
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "#ADB3BC",
  strokeWidth = 1,
  xmlns = "http://www.w3.org/2000/svg",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns={xmlns}
      className="icon"
      {...props}
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          cx="12"
          cy="6"
          r="4"
          stroke={fill}
          stroke-width="1.5"
        ></circle>
        <path
          d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
      </g>
    </svg>
  );
}
