import { Button } from './styled'

interface IProps {
  text: string;
  onClick: () => void;
  id: string;
}

const CtaButton: React.FC<IProps> = ({text, onClick, id}) => {
  return (
    <Button value={text} onClick={onClick} id={id}/>
  );
};

export default CtaButton;
