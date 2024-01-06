import { Link } from 'react-router-dom';

import { StarIcon } from '@/icons/Star';
import { ExternalLinkIcon } from '@/icons/ExternalLink';

import {
  Container,
  Name,
  RightContent,
  LeftContent,
} from './styles';

import { RepositoryItem } from '@/types/repository';

interface RepositoryCardProps {
  repository: RepositoryItem;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const onExternalClick: React.MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();
    window.open(repository.svn_url, '_blank');
  };

  return (
    <Link to={`/repositories/${repository.full_name}`}>
      <Container>
        <LeftContent>
          <Name>{repository.name}</Name>
        </LeftContent>
        <RightContent>
          {repository.stargazers_count}
          <StarIcon />
          <ExternalLinkIcon
            size={15}
            onClick={onExternalClick}
          />
        </RightContent>
      </Container>
    </Link>
  );
};
