import {
  Link,
} from 'react-router-dom';

import {
  Container,
  Name,
  Avatar,
} from './styles';

import { UserListItem } from '@/types/user';

interface UserCardProps {
  user: UserListItem;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/users/${user.login}`}>
      <Container>
        <Avatar src={`${user.avatar_url}&size=50`} alt={`${user.login}'s profile image`} />
        <Name>
          {user.login}
        </Name>
      </Container>
    </Link>
  );
};
