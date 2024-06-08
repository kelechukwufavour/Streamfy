import React, { useState } from 'react';
import Player from './Player';
// import './styles.css';

const Main = () => {
  const [query, setQuery] = useState('');
  const [databaseContents, setDatabaseContents] = useState([
    { title: 'Big Buck Bunny' },
    { title: 'Another Video' },
    { title: 'Sample Video' },
    // Add more database contents as needed
  ]);

  // Function to handle changes in the search query
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter the database contents based on the search query
  const filteredContents = databaseContents.filter((content) =>
    content.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <Player />

      <div className="database">
        <h1>PlayList</h1>

        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search.."
            name="query"
            value={query}
            onChange={handleSearchChange}
          />
          <img
            src="./src/assets/search.svg"
            className="search-icon"
            alt="search icon"
          />
        </div>

        {filteredContents.map((content, index) => (
          <div className="database-contents" key={index}>
            <img src="./src/assets/zoom.svg" alt="zoom" />
            <p>{content.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
