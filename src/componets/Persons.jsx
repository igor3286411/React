export const Persons = ({ person }) => {
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
  );
};
