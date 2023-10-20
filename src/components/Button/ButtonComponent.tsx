import "./ButtonComponent.css";

interface IProps {
  name: string;
}

export const ButtonComponent = ({ name }: IProps) => {
  return (
    <div className="button-container">
      <button>{name}</button>
    </div>
  );
};
