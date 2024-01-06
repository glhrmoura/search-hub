import { useTheme } from 'styled-components';

export const DragIcon = () => {
  const theme = useTheme();

  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill={theme.colors.gray300}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, cursor: 'move' }}
    >
      <path d="M10,4A2,2,0,1,1,8,2,2,2,0,0,1,10,4ZM8,10a2,2,0,1,0,2,2A2,2,0,0,0,8,10Zm0,8a2,2,0,1,0,2,2A2,2,0,0,0,8,18ZM16,6a2,2,0,1,0-2-2A2,2,0,0,0,16,6Zm0,8a2,2,0,1,0-2-2A2,2,0,0,0,16,14Zm0,8a2,2,0,1,0-2-2A2,2,0,0,0,16,22Z" />
    </svg>
  );
};
