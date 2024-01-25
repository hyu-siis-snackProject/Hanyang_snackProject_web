import arrowLeftImage from 'images/arrow_left_image.png';
import { GuideImageButton, GuideImage } from './styles';

const ImageButtonGuide = () => (
  <GuideImageButton>
    <GuideImage src={arrowLeftImage} alt="왼쪽 화살표 이미지" />
  </GuideImageButton>
);

export default ImageButtonGuide;
