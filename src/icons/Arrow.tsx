import { useTheme } from 'styled-components';

interface ArrowIconProps {
  dir?: string;
  size?: number;
}

export const ArrowIcon = ({ size = 30, dir = 'left' }: ArrowIconProps) => {
  const theme = useTheme();

  const transform = ({
    left: 'rotateZ(0deg)',
    right: 'rotateZ(180deg)',
    top: 'rotateZ(90deg)',
    down: 'rotateZ(270deg)',
  })[dir];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
    >
      <path
        d="M15 7L10 12L15 17"
        stroke={theme.colors.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
