import React from 'react';

import {
  Title,
  Head,
  Content,
  Container,
} from './styles';
import { If } from "@glhrmoura/react-conditional";

interface PanelProps {
  title?: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
}

export const Right = ({ children }: { children?: React.ReactNode }) => {
  return children;
};

Right.displayName = 'Right';

export const Panel = ({ title, children }: PanelProps) => {
  let right: React.ReactNode = null;
  const body: React.ReactNode[] = [];

  React.Children.toArray(children).forEach((childItem: any) => {
    if (childItem?.type?.displayName === 'Right') right = childItem;
    else body.push(childItem);
  });

  return (
    <Container>
      <If condition={title || right}>
        <Head>
          <Title>{title}</Title>
          {right}
        </Head>
      </If>
      <Content>
        {body || children}
      </Content>
    </Container>
  );
};
