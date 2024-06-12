import React from "react";

const ServersList = ({ servers }) => (
  <table className="bg-orange-300 w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Chronicle</th>
        <th>EXP</th>
        <th>ADENA</th>
        <th>SPOIL</th>
      </tr>
    </thead>
    <tbody>
      {servers.map((server, index) => (
        <tr key={index}>
          <td>{server.Name}</td>
          <td>{server.SPOIL}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ServersList;
