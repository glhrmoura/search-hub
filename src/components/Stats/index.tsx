import {
  Container,
  Stat,
  Label,
  Value
} from './styles';

interface StatProps {
  label?: string;
  value?: string | number;
}

interface StatsProps {
  stats: StatProps[];
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <Container>
      {stats.map((item, index) => (
        <Stat key={index}>
          <Label>{item.label}</Label>
          <Value>{item.value ?? '-'}</Value>
        </Stat>
      ))}
    </Container>
  );
};
