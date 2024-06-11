export default function Home() {
  return (
    <>
      <header className="bg-blue-300">Banner</header>
      {/* <nav className="bg-gray-300">Navbar</nav> */}
      <div className="ContentContainer flex flex-row">
        <aside className="bg-teal-300">Left Sidebar</aside>
        <main>
          <div className="bg-slate-600">Filters Bar</div>
          <table className="bg-orange-300 table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Chronicle</th>
                <th>EXP</th>
                <th>ADENA</th>
                <th>SPOIL</th>
                <th>Know More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ashenvale</td>
                <td>The best server of Lineage 2</td>
                <td>Interlude</td>
                <td>x1</td>
                <td>x2</td>
                <td>x1</td>
              </tr>
              <tr>
                <td>Giran</td>
                <td>A classic server with a vibrant community</td>
                <td>Interlude</td>
                <td>x5</td>
                <td>x3</td>
                <td>x2</td>
              </tr>
              <tr>
                <td>Gludio</td>
                <td>Experience the glory of Lineage 2 on this server</td>
                <td>Gracia Final</td>
                <td>x10</td>
                <td>x4</td>
                <td>x3</td>
              </tr>
              <tr>
                <td>Dion</td>
                <td>Journey through Lineage 2's epic tales</td>
                <td>High Five</td>
                <td>x15</td>
                <td>x6</td>
                <td>x4</td>
              </tr>
              <tr>
                <td>Oren</td>
                <td>Forge your destiny on this server</td>
                <td>Freya</td>
                <td>x20</td>
                <td>x8</td>
                <td>x5</td>
              </tr>
              <tr>
                <td>Aden</td>
                <td>Where legends are born</td>
                <td>Epilogue</td>
                <td>x25</td>
                <td>x10</td>
                <td>x6</td>
              </tr>
              <tr>
                <td>Adena</td>
                <td>The heart of Lineage 2 awaits</td>
                <td>God</td>
                <td>x30</td>
                <td>x12</td>
                <td>x7</td>
              </tr>
            </tbody>
          </table>
        </main>
        <aside class="bg-green-300">Right Sidebar</aside>
      </div>
      <footer className="bg-slate-300">Footer</footer>
    </>
  );
}
