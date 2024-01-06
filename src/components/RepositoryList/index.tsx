import { RepositoryItem } from '@/types/repository';

import { RepositoryCard } from '@/components/RepositoryCard';

interface RepositoryListProps {
  items: RepositoryItem[];
}

export const RepositoryList = ({ items }: RepositoryListProps) => {
  return (
    items.map((item: RepositoryItem) => (
      <RepositoryCard key={item.id} repository={item} />
    ))
  );
};
