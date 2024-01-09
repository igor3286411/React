import { Link } from "react-router-dom";

export const CustomLink = ({user}) => {
  return (
    <Link to={`${user.id}`} key={user.id}>
      {user.id}. {user.name}
    </Link>
  );
};
