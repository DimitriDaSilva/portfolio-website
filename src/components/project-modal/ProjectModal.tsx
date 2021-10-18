import ReactDOM from 'react-dom';

import { Background, Wrapper, CrossIcon } from './styled'

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ProjectModal: React.FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {

  if (!isModalOpen) {
    return null;
  }

  const portalDiv = document.getElementById('portal');

  return portalDiv ? ReactDOM.createPortal(
    <>
    <Background>
      <Wrapper>
        <CrossIcon onClick={() => setIsModalOpen(false)} />
      </Wrapper>
    </Background>
    </>,
    portalDiv) : null;
};

export default ProjectModal;
