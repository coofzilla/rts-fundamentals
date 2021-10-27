//define what props expect to receive from parent
interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}></button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}></button>
    </div>
  );
};

// use fc shortcut to be op
// interface Props {

// }

// const : FunctionComponent<Props> = () => {
//   return (  );
// }

// export default ;
