function UserData(props) {

    const { persons } = props
    console.log(persons);

    if (!persons || persons.length === 0) return <p>Нет данных.</p>

    return (
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
                    {
                        persons.map((person) =>
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.address.city}, {person.address.street}, {person.address.suite}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default UserData