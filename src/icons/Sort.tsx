import { useTheme } from 'styled-components';

interface SortIconProps {
  incr?: boolean;
}

export const SortIcon = ({ incr = false }: SortIconProps) => {
  const theme = useTheme();

  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: incr ? 'rotateZ(180deg)' : '' }}
    >
      <path
        d="M4 8H13"
        stroke={theme.colors.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 13H13"
        stroke={theme.colors.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 18H13"
        stroke={theme.colors.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 20V4L20 8"
        stroke={theme.colors.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
