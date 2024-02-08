import selectImg from 'images/SB.png';
import { SelectButton, SelectImage } from '../styles';

const SButton = () => (
  <SelectButton>
    <SelectImage src={selectImg} alt="선택지 이미지" />
  </SelectButton>
);

export default SButton;
