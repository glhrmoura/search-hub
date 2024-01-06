import { useState, createContext, useContext } from 'react';

import { UserListItem } from '@/types/user';

interface UserListContextProps {
  page: number;
  search: string;
  totPages: number;
  loading: boolean;
  list: UserListItem[];
  setPage: (arg: number) => void;
  setSearch: (arg: string) => void;
  setTotPages: (arg: number) => void;
  setLoading: (arg: boolean) => void;
  setList: (arg: UserListItem[]) => void;
}

const UserListContext = createContext<UserListContextProps>({} as UserListContextProps);

const useUserList = (): UserListContextProps => {
  return useContext(UserListContext);
};

export interface UserListProviderProps {
  children: React.ReactNode;
}

const UserListProvider = ({ children }: UserListProviderProps): JSX.Element => {
  const [page, definePage] = useState<number>(0);
  const [search, defineSearch] = useState<string>('');
  const [totPages, defineTotPages] = useState<number>(0);
  const [loading, defineLoading] = useState<boolean>(false);
  const [list, defineList] = useState<UserListItem[]>([]);

  const setPage = (arg: number) => {
    definePage(arg);
  };

  const setSearch = (arg: string) => {
    defineSearch(arg);
  };

  const setTotPages = (arg: number) => {
    defineTotPages(arg);
  };

  const setLoading = (arg: boolean) => {
    defineLoading(arg);
  };

  const setList = (arg: UserListItem[]) => {
    defineList(arg);
  };

  const value = {
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
  };

  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
};

export { useUserList, UserListProvider };
