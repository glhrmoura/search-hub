import { useState } from 'react';

import { useTheme } from 'styled-components';
import { Condition, If, Else } from '@glhrmoura/react-conditional';

import { FileIcon } from '@/icons/File';
import { ArrowIcon } from '@/icons/Arrow';
import { FolderIcon } from '@/icons/Folder';

import {
  Name,
  Link,
  InnerContent,
  Container,
  FolderHead,
  FileContainer,
  FolderContainer,
} from './styles';

import { TreeItem } from '@/types/tree';
import { RepositoryItem } from '@/types/repository';

interface TreeProps {
  sub?: boolean;
  name?: string;
  branch: string;
  item: TreeItem;
  opened?: boolean;
  level?: number;
  repository: RepositoryItem;
}

const Content = ({ item, name, repository, branch, level = 1, sub }: TreeProps) => {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);

  const isFile = item?.type !== 'tree';
  const blobURL = `https://github.com/${repository?.owner?.login}/${repository.name}/blob/${branch}/${item.path}`;

  const toggle = () => setOpened((state) => !state);

  const treeContainerStyle = {
    display: opened ? 'block' : 'none',
  };

  const containerStyle = {
    paddingLeft: sub
      ? `${(theme.spacing.base * level) + (isFile ? theme.spacing.lg : 0)}px`
      : `${theme.spacing.mdl + (isFile ? theme.spacing.lg : 0)}px`,
  };

  return (
    <InnerContent>
      <Condition>
        <If condition={isFile}>
          <Link target="_blank" href={blobURL}>
            <FileContainer style={containerStyle}>
              <FileIcon />
              <Name>{name}</Name>
            </FileContainer>
          </Link>
        </If>
        <Else>
          <FolderContainer style={containerStyle} onClick={toggle}>
            <FolderHead>
              <ArrowIcon size={18} dir={opened ? 'down' : 'right'} />
              <FolderIcon opened={opened} />
              <Name>{name}</Name>
            </FolderHead>
          </FolderContainer>
          <div style={treeContainerStyle}>
            <Tree
              item={item}
              sub={true}
              branch={branch}
              opened={opened}
              level={level + 1}
              repository={repository}
            />
          </div>
        </Else>
      </Condition>
    </InnerContent>
  );
};

export const Tree = ({ item, sub, repository, branch, level }: TreeProps) => {
  return (
    <Container $sub={sub}>
      {Object.values(item).map((item: any, index: number) => {
        if (!item?.type) return null;

        const nameRegExp = /\/?([^/]+)$/;
        const name = item.path?.match(nameRegExp)?.[1];
        const key = `${name}-${index}`;

        return (
          <Content
            key={key}
            item={item}
            name={name}
            sub={sub}
            level={level}
            branch={branch}
            repository={repository}
          />
        );
      })}
    </Container>
  );
};
