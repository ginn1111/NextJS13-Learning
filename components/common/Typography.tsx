type TypographyProps = {
  content: string;
  className?: string;
};

const Typography = ({ content, className }: TypographyProps) => {
  return <p className={`text-center ${className}`}>{content}</p>;
};

export default Typography;
