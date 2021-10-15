import { Button } from './styled'

interface IProps {
  id: string;
  text: string;
  onClick: () => void;
}

const CtaButton: React.FC<IProps> = ({id, text, onClick}) => {
  return (
    <Button value={text} id={id} onClick={onClick} />
  );
};

export default CtaButton;
