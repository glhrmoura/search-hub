import { useEffect, useState } from 'react';

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import { useTheme } from "styled-components";
import { If } from '@glhrmoura/react-conditional';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { ExternalLinkIcon } from '@/icons/ExternalLink';

import {
  Container,
  Content,
  Name,
  Description,
  ExternalLink,
  LoadingContainer,
  MarkdownContainer,
  TreeContainer,
} from './styles';

import { RepositoriesService } from '@/services/repositories';

import { Branch, RepositoryItem } from '@/types/repository';

import { TreeUtil } from '@/utils/tree';

import { Tree } from '@/components/Tree';
import { Stats } from '@/components/Stats';
import { Panel } from '@/components/Panel';
import { NavBar } from '@/components/NavBar';

export const Repository = () => {
  const theme = useTheme();
  const { username = '', name = '' } = useParams();

  const [tree, setTree] = useState<any>(null);
  const [readMe, setReadMe] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [repository, setRepository] = useState<RepositoryItem | null>(null);

  const parseCode = ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        {...props}
        PreTag="div"
        style={dracula}
        language={match[1]}
      >
        {children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  const getReadMe = async ({ upper }: { upper: boolean } = { upper: true }) => {
    const { data } = await RepositoriesService.getReadMe(username, name, upper);
    setReadMe(atob(data.content));
  };

  const loadReadMe = async () => {
    try {
      await getReadMe();
    } catch (error: any) {
      return await getReadMe({ upper: false });
    }
  };

  const loadRepository = async () => {
    const { data } = await RepositoriesService.getRepositories(username, name);
    setRepository(data);
  };

  const loadTree = async () => {
    const { data: branchList } = await RepositoriesService.getBranchList(username, name);

    if (!branchList.length) return;

    const branch = branchList.find((branch: Branch) => /master|main/.test(branch.name)) || branchList[0];

    const { data } = await RepositoriesService.getTree(username, name, branch?.name);

    setBranch(branch.name);
    setTree(TreeUtil.parse(data.tree));
  };

  const load = async () => {
    try {
      await Promise.all([
        loadTree(),
        loadReadMe(),
        loadRepository(),
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading || !repository) {
    return (
      <LoadingContainer>
        <ReactLoading type="cylon" width={50} color={theme.colors.gray300} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Panel>
        <NavBar
          title="Repository"
          right={(
            <ExternalLink target="_blank" href={repository.svn_url}>
              <ExternalLinkIcon size={25} />
            </ExternalLink>
          )}
        />
        <Content>
          <Name>{repository.name}</Name>
          <If condition={repository.description}>
            <Description>{repository.description}</Description>
          </If>
        </Content>
        <Stats
          stats={[
            { label: 'Star', value: repository.stargazers_count },
            { label: 'Forks', value: repository.forks_count },
            { label: 'Issues', value: repository.open_issues },
            { label: 'Language', value: repository.language },
          ]}
        />
      </Panel>
      <If condition={tree}>
        <Panel title="Files">
          <TreeContainer>
            <Tree
              item={tree}
              branch={branch}
              repository={repository}
            />
          </TreeContainer>
        </Panel>
      </If>
      <If condition={readMe}>
        <Panel title="README.md">
          <MarkdownContainer>
            <Markdown
              children={readMe}
              components={{ code: parseCode }}
              rehypePlugins={[rehypeRaw, remarkGfm]}
            />
          </MarkdownContainer>
        </Panel>
      </If>
    </Container>
  );
};
