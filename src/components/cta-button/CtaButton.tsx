import { Button } from "./styled";

interface IProps {
  text: string;
  onClick?: () => void;
  id: string;
  type: string;
}

const CtaButton: React.FC<IProps> = ({ text, onClick, id, type }) => {
  return <Button value={text} onClick={onClick} id={id} type={type} />;
};

export default CtaButton;
