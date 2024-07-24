import React from "react";
import PaginationControl from "./PaginationControl";

const ServersTable = ({ servers }) => {
  return (
    <div className="ServersTable">
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
      </table>
      <PaginationControl servers={servers} />
    </div>
  );
};
export default ServersTable;
