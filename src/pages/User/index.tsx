import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { If } from '@glhrmoura/react-conditional';

import { SortIcon } from '@/icons/Sort';

import {
  Name,
  Head,
  Avatar,
  Content,
  Biograph,
  Container,
  SortButton,
  ExternalLink,
  LoadingContainer,
} from './styles';

import { ExternalLinkIcon } from '@/icons/ExternalLink';

import { UsersService } from '@/services/users';

import { UserItem } from '@/types/user';
import { RepositoryItem } from '@/types/repository';

import { Stats } from '@/components/Stats';
import { NavBar } from '@/components/NavBar';
import { Panel, Right } from '@/components/Panel';
import { RepositoryList } from '@/components/RepositoryList';

export const User = () => {
  const theme = useTheme();
  const { username = '' } = useParams();

  const [incr, setIncr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserItem | null>(null);
  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);

  const sort = (items: RepositoryItem[], incr: boolean = false) => {
    return [...items].sort((a, b) => {
      return incr ? (
        a.stargazers_count - b.stargazers_count
      ) : (
        b.stargazers_count - a.stargazers_count
      );
    });
  };

  const loadUser = async () => {
    try {
      const { data } = await UsersService.getByName(username);
      setUser(data);
    } catch (error) {
      toast(`An error occurred while querying for data: ${error}`, {
        theme: 'dark',
        type: 'error',
      });
    }
  };

  const loadRepositories = async () => {
    try {
      const { data } = await UsersService.getRepositories(username);
      setRepositories(sort(data));
      setLoading(false);
    } catch (error) {
      toast(`An error occurred while querying for data: ${error}`, {
        theme: 'dark',
        type: 'error',
      });
    }
  };

  const onSort = () => {
    setIncr((incr) => {
      setRepositories(sort(repositories, !incr));
      return !incr;
    });
  };

  useEffect(() => {
    loadUser();
    loadRepositories();
  }, []);

  if (!user || loading) {
    return (
      <LoadingContainer>
        <ReactLoading type="cylon" width={50} color={theme.colors.gray300} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Content>
        <NavBar
          title={user.login}
          right={(
            <ExternalLink target="_blank" href={user.html_url}>
              <ExternalLinkIcon size={25} />
            </ExternalLink>
          )}
         />
        <Head>
          <Avatar src={`${user.avatar_url}&size=150`} alt={`${user.login}'s profile image`} />
          <Name>{user.name}</Name>
          <If condition={user.bio}>
            <Biograph>{user.bio}</Biograph>
          </If>
        </Head>
        <Stats
          stats={[
            { label: 'Followers', value: user.followers },
            { label: 'Following', value: user.following },
            { label: 'Email', value: user.email },
            { label: 'Public Repositories', value: user.public_repos },
          ]}
        />
      </Content>
      <If condition={repositories.length}>
        <Panel title="Repositories">
          <Right>
            <SortButton onClick={onSort}>
              <SortIcon incr={incr} />
            </SortButton>
          </Right>
          <RepositoryList items={repositories} />
        </Panel>
      </If>
    </Container>
  );
};
