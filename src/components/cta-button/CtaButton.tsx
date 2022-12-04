import { Button } from "./styled";

export type ButtonVariant = "primary" | "secondary";

interface IProps {
  text: string;
  onClick?: () => void;
  variant: ButtonVariant;
  type: string;
}

const CtaButton: React.FC<IProps> = ({ text, onClick, variant, type }) => {
  return (
    <Button value={text} onClick={onClick} $variant={variant} type={type} />
  );
};

export default CtaButton;
