import { ICardProps } from "./interface";

const Card = ({ children, ...props }: ICardProps) => (
  <div {...props} className={`shadow-md rounded p-8 ${props.className}`}>
    {children}
  </div>
);

export default Card;
