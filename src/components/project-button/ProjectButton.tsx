import { Button } from "./styled";

interface IProps {
  text: string;
  onClick: () => void;
  type: string;
}

const ProjectButton: React.FC<IProps> = ({ text, onClick, type }) => {
  return <Button value={text} onClick={onClick} type={type} />;
};

export default ProjectButton;
