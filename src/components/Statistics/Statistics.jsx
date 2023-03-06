import PropTypes from 'prop-types';
import { Section, Title, StatList, StatItem, StatLabel, StatPersentage } from "components/Statistics/Statistics.styled";

export const Statistics = ({title, stats}) => {
    return <Section>
  <Title>{title}</Title>
        <StatList>
            {stats.map((stat) => {
                return <StatItem key={stat.id}>
                    <StatLabel>{stat.label}</StatLabel>
      <StatPersentage>{stat.percentage}%</StatPersentage>
    </StatItem>
            })}
  </StatList>
</Section>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}