import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      text here
    </ChildAsFC>
  );
};

export default Parent;
