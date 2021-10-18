import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { Background,
  Wrapper,
  ProjectImages,
  Slider,
  Image,
  InnerWrapper,
  TextSection,
  Links,
  CrossIcon } from './styled'
import { ProjectData } from '../project/SingleProject'

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  data: ProjectData;
}

const ProjectModal: React.FC<IProps> = ({ isModalOpen, setIsModalOpen, data }) => {
  const [currImg, setCurrImg] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isModalOpen) {
    return null;
  }

  const updateImg = (value: number) => {

    // Press right with the last image displayed
    if (value > 0 && currImg === data.images.length - 1) {
      setCurrImg(0);

    // Press left with the first image displayed
    } else if (value < 0 && currImg === 0) {
      setCurrImg(data.images.length - 1);

    // Press left or right without being at first or last index
    } else {
      setCurrImg(prev => prev + value);
    }
  }


  const portalDiv = document.getElementById('portal');

  console.log(data);
  return portalDiv ? ReactDOM.createPortal(
    <Background ref={modalRef} onClick={(e) => {if (modalRef.current === e.target) {setIsModalOpen(false)}}}>
      <Wrapper>
        {data.images.length !== 0 && 
          <ProjectImages style={{backgroundImage: `url(${data.images[currImg]})`}}>
            {data.images.length > 1 &&
            <>
              <Slider onClick={() => updateImg(-1)}><FaAngleLeft color='white' size='20px'/></Slider>
              <Slider onClick={() => updateImg(1)}><FaAngleRight color='white' size='20px' /></Slider>
            </>}
          </ProjectImages>}
        <InnerWrapper>
          <TextSection>
          </TextSection>
          <Links></Links>
          <CrossIcon onClick={() => setIsModalOpen(false)} />
        </InnerWrapper>
      </Wrapper>
    </Background>,
    portalDiv) : null;
};

export default ProjectModal;
