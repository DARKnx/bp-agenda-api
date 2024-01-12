interface TimestampDate {
  (timestamp: number): string;
}

const formatDate: TimestampDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return date.toLocaleDateString('pt-BR', options as any);
};

export default formatDate;
