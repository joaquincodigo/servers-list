import React from "react";

const ServersTable = ({ servers }) => (
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
      {servers.slice(0, 15).map((server, index) => (
        <tr key={index}>
          <td>{server.Name}</td>
          <td>{server.Description}</td>
          <td>{server.Chronicle}</td>
          <td>{server.EXP}</td>
          <td>{server.ADENA}</td>
          <td>{server.SPOIL}</td>
        </tr>
      ))}
    </tbody>
    <div className="table-footer flex justify-center">
      <div className="flex flex-row">
        <div>Page ? of ?</div>
        <div>Total Servers: {servers.length}</div>
        <label for="lines">Lines per page</label>
        <select name="line" id="lines">
          <option value="20">20 lines</option>
          <option value="50">50 lines</option>
          <option value="100">100 lines</option>
        </select>
      </div>
    </div>
  </table>
);

export default ServersTable;
