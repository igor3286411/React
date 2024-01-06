import { Persons } from "./Persons";
import { Posts } from "./Posts";

function UserData(props) {
  const { persons, posts } = props;
  if (!persons || persons.length === 0) return <p>Нет данных.</p>;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>UserName(Nik)</th>
              <th>Email</th>
              <th>Adress</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (<Persons person={person} key={person.id}/>))}
            {posts.map((person) => (<Posts person={person} key={person.id}/>))}
          </tbody>
        </table>
      </div>
      <div className="postTest"></div>
    </>
  );
}

export default UserData;
