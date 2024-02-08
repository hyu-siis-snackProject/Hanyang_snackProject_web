import MainButton from '../styles';

function MButton({ children, ...rest }) {
  return <MainButton {...rest}>{children}</MainButton>;
}

export default MButton;
