import { ChangeEventHandler, KeyboardEventHandler } from 'react';

import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import ResponsivePagination from 'react-responsive-pagination';
import { Condition, If, Else } from '@glhrmoura/react-conditional';

import { useUserList } from '@/contexts/user-list';

import { SearchIcon } from '@/icons/Search';

import {
  Content,
  FormInput,
  Container,
  Message,
  PaginateContainer,
  FormContainer,
  SearchButton,
  LoadingContainer,
  SearchContainer,
} from './styles';

import { UsersService } from '@/services/users';

import { UserCard } from '@/components/UserCard';

const PER_PAGE = 10;

export const List = () => {
  const theme = useTheme();
  const {
    page,
    search,
    totPages,
    loading,
    list,
    setPage,
    setSearch,
    setTotPages,
    setLoading,
    setList,
  } = useUserList();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setSearch(target.value);
  };

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') getUsers({ reset: true });
  };

  const onPageChange = (crrPage: number) => {
    getUsers({ crrPage });
    window.scrollTo(0, 0);
  };

  const getUsers = async ({ crrPage = 1, reset }: { crrPage?: number, reset?: boolean } = {}) => {
    setLoading(true);

    const oldPage = page;
    const currentPage = reset ? 1 : crrPage;
    const params = {
      q: search,
      per_page: PER_PAGE,
      page: currentPage,
    };

    setPage(currentPage);

    try {
      const { data } = await UsersService.getBySearch(params);

      if (data.message) {
        throw data;
      }

      setList(data.items);
      setTotPages(Math.ceil(Math.min(data.total_count, 1000) / PER_PAGE));
    } catch (error) {
      setPage(oldPage);
      toast(`An error occurred while querying for data: ${error}`, {
        theme: 'dark',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <SearchContainer>
          <SearchIcon />
          <FormInput
            type="text"
            value={search}
            placeholder="Search for users"
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
          />
        </SearchContainer>
        <SearchButton onClick={() => getUsers({ reset: true })}>
          Search
        </SearchButton>
      </FormContainer>
      <Content>
        <Condition>
          <If condition={list.length}>
            {list.map((user, index) => <UserCard key={index} user={user} />)}
          </If>
          <Else>
            <Message>No results match your search</Message>
          </Else>
        </Condition>
        <If condition={loading}>
          <LoadingContainer>
            <ReactLoading type="cylon" width={50} height={50} color={theme.colors.gray300} />
          </LoadingContainer>
        </If>
      </Content>
      <If condition={list.length}>
        <PaginateContainer>
          <ResponsivePagination
            total={totPages}
            renderNav={false}
            current={page}
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            onPageChange={onPageChange}
          />
        </PaginateContainer>
      </If>
    </Container>
  );
};
