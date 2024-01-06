import { githubAPI } from '@/api/github';

import { UserItem, UserListItem } from '@/types/user';

import { URLUtil } from '@/utils/url';

export interface SearchResponse {
  message?: string;
  total_count: number;
  items: UserListItem[];
  incomplete_results: boolean;
}

const getByName = (username: string) => {
  return githubAPI.get<UserItem>(`/users/${username}`);
};

const getBySearch = (params: { [key: string]: string | number }) => {
  return githubAPI.get<SearchResponse>(`/search/users?${URLUtil.stringify(params)}`);
};

const getRepositories = (username: string) => {
  return githubAPI.get(`/users/${username}/repos`);
};

export const UsersService = {
  getByName,
  getBySearch,
  getRepositories,
};