import 'src/main.css';
import TempBox from 'components/TempBox';
import DrawingPaper from './pages/DrawingPaper';

const Main = () => (
  <div className="mainLayout">
    <TempBox />
    <div>프로젝트 초기 세팅</div>
    {/* UI 컴포넌트 제작시 사용할 임시 페이지  */}
    <DrawingPaper />
  </div>
);
export default Main;
