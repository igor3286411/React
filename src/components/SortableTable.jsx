import React, { Component } from "react";

class SortableTable extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
    this.onSort = this.onSort.bind(this);
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(function (response) {
        return response.json();
      })
      .then((items) => this.setState({ data: items.data }));
  }
  onSortNumber(event, sortKey) {
    const data = this.state.data;
    data.sort((a, b) => a[sortKey] - b[sortKey]);
    this.setState({ data });
  }

  onSort(event, sortKey) {
    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  }

  render() {
    let newdata = this.state.data;

    let { firstName, lastName, email, avatar } = this.props;

    return (
      <table className="table is-bordered is-hoverable is-fullwidth has-text-centered">
        <thead>
          <tr>
            <th onClick={(e) => this.onSortNumber(e, "id")}>Id</th>
            <th onClick={(e) => this.onSort(e, "first_name")}>
              {firstName}
              <i className="fas fa-sort"></i>
            </th>
            <th onClick={(e) => this.onSort(e, "last_name")}>
              {lastName}
              <i className="fas fa-sort"></i>
            </th>
            <th onClick={(e) => this.onSort(e, "email")}>
              {email}
              <i className="fas fa-sort"></i>
            </th>
            <th>{avatar}</th>
          </tr>
        </thead>
        <tbody>
          {newdata.map(function (user) {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} width={64}></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default SortableTable;
