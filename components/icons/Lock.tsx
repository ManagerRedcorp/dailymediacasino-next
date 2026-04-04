import { SVGProps, useId } from "react";

export function Lock(props: SVGProps<SVGSVGElement>) {
  const uid = useId();

  const ids = {
    paint0: `paint0_${uid}`,
    paint1: `paint1_${uid}`,
    paint2: `paint2_${uid}`,
    paint3: `paint3_${uid}`,
    paint4: `paint4_${uid}`,
    paint5: `paint5_${uid}`,
    paint6: `paint6_${uid}`,
    paint7: `paint7_${uid}`,
    paint8: `paint8_${uid}`,
    paint9: `paint9_${uid}`,
    filter0: `filter0_${uid}`,
    filter1: `filter1_${uid}`,
    filter2: `filter2_${uid}`,
    filter3: `filter3_${uid}`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <g filter={`url(#${ids.filter0})`}>
        <path
          stroke="currentColor"
          strokeWidth={2.75}
          d="M10.9531 14.1406V8.57812C10.9531 5.80807 13.1987 3.5625 15.9688 3.5625C18.7388 3.5625 20.9844 5.80807 20.9844 8.57812V14.1406"
        />
      </g>

      <path
        stroke={`url(#${ids.paint0})`}
        strokeWidth={2.75}
        d="M10.9531 14.1406V8.57812C10.9531 5.80807 13.1987 3.5625 15.9688 3.5625C18.7388 3.5625 20.9844 5.80807 20.9844 8.57812V14.1406"
      />

      <g filter={`url(#${ids.filter1})`}>
        <path
          stroke={`url(#${ids.paint1})`}
          d="M11.3438 14.1406V8.38093C11.3438 5.51268 13.6383 3.1875 16.4687 3.1875C19.2992 3.1875 21.5937 5.51268 21.5937 8.38093V14.1406"
        />
        <path
          stroke={`url(#${ids.paint2})`}
          d="M11.3438 14.1406V8.38093C11.3438 5.51268 13.6383 3.1875 16.4687 3.1875C19.2992 3.1875 21.5937 5.51268 21.5937 8.38093V14.1406"
        />
      </g>

      <g filter={`url(#${ids.filter2})`}>
        <rect
          width="21.938"
          height="18.844"
          x="5.031"
          y="11.125"
          fill={`url(#${ids.paint3})`}
          rx="3"
        />
      </g>

      <rect
        width="21.938"
        height="18.844"
        x="5.031"
        y="11.125"
        fill={`url(#${ids.paint4})`}
        rx="3"
      />
      <rect
        width="21.938"
        height="18.844"
        x="5.031"
        y="11.125"
        fill={`url(#${ids.paint5})`}
        rx="3"
      />
      <rect
        width="21.938"
        height="18.844"
        x="5.031"
        y="11.125"
        fill={`url(#${ids.paint6})`}
        rx="3"
      />

      <g filter={`url(#${ids.filter3})`}>
        <path
          stroke={`url(#${ids.paint7})`}
          strokeWidth={1.75}
          d="M17.3984 20.4619C18.1176 19.9977 18.5938 19.1892 18.5938 18.2695C18.5938 16.8295 17.4264 15.6621 15.9863 15.6621C14.5463 15.6621 13.3789 16.8295 13.3789 18.2695C13.3789 19.2008 13.8671 20.018 14.6016 20.4793V23.7735C14.6016 24.5458 15.2277 25.1719 16 25.1719C16.7723 25.1719 17.3984 24.5458 17.3984 23.7735V20.4619Z"
        />
        <path
          stroke={`url(#${ids.paint8})`}
          strokeWidth={1.75}
          d="M17.3984 20.4619C18.1176 19.9977 18.5938 19.1892 18.5938 18.2695C18.5938 16.8295 17.4264 15.6621 15.9863 15.6621C14.5463 15.6621 13.3789 16.8295 13.3789 18.2695C13.3789 19.2008 13.8671 20.018 14.6016 20.4793V23.7735C14.6016 24.5458 15.2277 25.1719 16 25.1719C16.7723 25.1719 17.3984 24.5458 17.3984 23.7735V20.4619Z"
        />
      </g>

      <path
        fill={`url(#${ids.paint9})`}
        d="M17.3984 20.4619C18.1176 19.9977 18.5938 19.1892 18.5938 18.2695C18.5938 16.8295 17.4264 15.6621 15.9863 15.6621C14.5463 15.6621 13.3789 16.8295 13.3789 18.2695C13.3789 19.2008 13.8671 20.018 14.6016 20.4793V23.7735C14.6016 24.5458 15.2277 25.1719 16 25.1719C16.7723 25.1719 17.3984 24.5458 17.3984 23.7735V20.4619Z"
      />

      <defs>
        <radialGradient
          id={ids.paint0}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -4.84375 5.28858 0 15.969 7.656)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.531} stopColor="#2563EB" />
          <stop offset={1} stopColor="#93C5FD" stopOpacity={0} />
        </radialGradient>

        <radialGradient
          id={ids.paint1}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-3.81893 3.59375 -4.9365 -5.24582 21.9 4.594)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.216} stopColor="#EDECF3" />
          <stop offset={1} stopColor="#EDECF3" stopOpacity={0} />
        </radialGradient>

        <radialGradient
          id={ids.paint2}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -7.125 5.16319 0 12.55 12.656)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDECF3" />
          <stop offset={1} stopColor="#EDECF3" stopOpacity={0} />
        </radialGradient>

        <linearGradient
          id={ids.paint3}
          x1="10.156"
          x2="17.094"
          y1="14.188"
          y2="29.969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC74E" />
          <stop offset={1} stopColor="#F7864E" />
        </linearGradient>

        <radialGradient
          id={ids.paint4}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-2.18751 -2.40624 5.60574 -5.09619 26.406 29.969)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8650" />
          <stop offset={1} stopColor="#FF8650" stopOpacity={0} />
        </radialGradient>

        <linearGradient
          id={ids.paint5}
          x1="16"
          x2="16"
          y1="10.813"
          y2="12.313"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3D04E" />
          <stop offset={1} stopColor="#F3D04E" stopOpacity={0} />
        </linearGradient>

        <radialGradient
          id={ids.paint6}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(126.254 10.51 12.316)scale(2.32513 5.25171)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF760" />
          <stop offset={1} stopColor="#FFF760" stopOpacity={0} />
        </radialGradient>

        <linearGradient
          id={ids.paint7}
          x1="19.125"
          x2="15.25"
          y1="21.75"
          y2="21.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.331} stopColor="#D98A40" />
          <stop offset={1} stopColor="#D98A40" stopOpacity={0} />
        </linearGradient>

        <linearGradient
          id={ids.paint8}
          x1="12.875"
          x2="15.594"
          y1="20.813"
          y2="20.813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD63" />
          <stop offset={1} stopColor="#FFCD63" stopOpacity={0} />
        </linearGradient>

        <radialGradient
          id={ids.paint9}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(34.061 -23.815 31.182)scale(5.69121 7.82719)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#1E3A8A" />
          <stop offset={1} stopColor="#0F172A" />
        </radialGradient>

        <filter
          id={ids.filter0}
          width="13.781"
          height="11.953"
          x="9.578"
          y="2.188"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0.556863 0 0 0 0 0.576471 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_18_23511" />
        </filter>

        <filter
          id={ids.filter1}
          width="12.75"
          height="12.953"
          x="10.094"
          y="1.938"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="0.375"
            result="effect1_foregroundBlur_18_23511"
          />
        </filter>

        <filter
          id={ids.filter2}
          width="23.438"
          height="20.344"
          x="4.281"
          y="10.375"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-0.75" />
          <feGaussianBlur stdDeviation="0.375" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.898039 0 0 0 0 0.364706 0 0 0 0 0.423529 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_18_23511" />
        </filter>

        <filter
          id={ids.filter3}
          width="7.965"
          height="12.26"
          x="12.004"
          y="14.287"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="0.25"
            result="effect1_foregroundBlur_18_23511"
          />
        </filter>
      </defs>
    </svg>
  );
}
