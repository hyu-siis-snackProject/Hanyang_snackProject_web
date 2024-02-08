import 'src/main.css';
import TempBox from 'components/TempBox';
import MButton from 'components/UI/buttons/MainButton';
import SButton from 'components/UI/buttons/SelectButton';
import DrawingPaper from './pages/DrawingPaper';

const Main = () => (
  <div className="mainLayout">
    <TempBox />
    <div>프로젝트 초기 세팅</div>
    {/* UI 컴포넌트 제작시 사용할 임시 페이지  */}
    <DrawingPaper />
    <MButton>게임시작</MButton>
    <br />
    <MButton>랭킹보기</MButton>
    <br />
    <MButton>엔딩보기</MButton>
    <br />
    <SButton />
  </div>
);
export default Main;
