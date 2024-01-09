import { CustomLink } from "./CustomLink";

export const User = ({ users }) => {
  return (
    <>
      {users ? (
        <div className="users">
          {users.map((user) => (
            <CustomLink user={user} key={user.id}/>
          ))}
        </div>
      ) : false}
    </>
  );
};
