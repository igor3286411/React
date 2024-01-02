function UserData(props) {
  const { persons, posts, numId } = props;
  if (!persons || persons.length === 0) return <p>Нет данных.</p>;

  const postDiv = (person, address) => {
    const div = document.querySelector(".postTest");
    div.textContent = "";
    div.insertAdjacentHTML(
      "beforeend",
      `
    <div class="postDiv">
        <h2>Name: ${person.name}</h2>
        <h3>UserName(Nik): ${person.username}</h3>
        <p>Email: ${person.email}</p>
        <p>Adress: ${address}</p>
    </div>
    `
    );
  };

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
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td
                  className="click"
                  onClick={(e) =>
                    postDiv(
                      person,
                      `${person.address.city}, ${person.address.street}, ${person.address.suite}`
                    )
                  }
                >
                  {person.name}
                </td>
                <td>{person.username}</td>
                <td>{person.email}</td>
                <td>
                  {person.address.city}, {person.address.street}, {person.address.suite}
                </td>
              </tr>
            ))}
            {posts.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td className="click" onClick={(e) => postDiv(person, person.address)}>
                  {person.name}
                </td>
                <td>{person.username}</td>
                <td>{person.email}</td>
                <td>{person.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="postTest"></div>
    </>
  );
}

export default UserData;
