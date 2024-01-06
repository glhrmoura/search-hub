import { githubAPI } from '@/api/github';
import { Branch, RepositoryItem } from '@/types/repository';

const getRepositories = (username: string, name: string) => {
  return githubAPI.get<RepositoryItem>(`/repos/${username}/${name}`);
};

const getReadMe = (username: string, name: string, upper: boolean = true) => {
  return githubAPI.get(`/repos/${username}/${name}/contents/${upper ? 'README.md' : 'readme.md'}`);
};

const getTree = (username: string, name: string, branch: string) => {
  return githubAPI.get(`/repos/${username}/${name}/git/trees/${branch}?recursive=1`);
};

const getBranchList = (username: string, name: string) => {
  return githubAPI.get<Branch[]>(`/repos/${username}/${name}/branches`);
};

export const RepositoriesService = {
  getTree,
  getReadMe,
  getBranchList,
  getRepositories,
};