import { Link } from 'react-router-dom';

import { ArrowIcon } from '@/icons/Arrow';

import {
  Container,
  Title,
  LeftContent,
  RightContent,
} from './styles';

interface NavBarProps {
  title?: string;
  right?: React.ReactNode;
}

export const NavBar = ({ title, right }: NavBarProps) => {
  return (
    <Container>
      <LeftContent>
        <Link to={(-1 as unknown as string)}>
          <ArrowIcon />
        </Link>
      </LeftContent>
      <Title>{title}</Title>
      <RightContent>
        {right}
      </RightContent>
    </Container>
  );
};
