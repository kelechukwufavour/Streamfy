import React, { useState } from 'react';
import Player from './Player';
import searchIcon from '../assets/search.svg';
import zoomIcon from '../assets/zoom.svg';

const Main = () => {
  const [query, setQuery] = useState('');
  const [databaseContents, setDatabaseContents] = useState([
    { title: 'Big Buck Bunny', src: '/assets/big_buck_bunny.mp4' },
    { title: 'Coding Lessons', src: '/assets/coding_lessons.mp4' },
    { title: 'Music Video', src: '/assets/music_video.mp4' },
    // Add more database contents as needed
  ]);
  const [selectedVideo, setSelectedVideo] = useState(databaseContents[0]); // Default to the first video

  // Function to handle changes in the search query
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle selecting a video
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // Filter the database contents based on the search query
  const filteredContents = databaseContents.filter((content) =>
    content.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <Player video={selectedVideo} onSelect={handleVideoSelect} />

      <div className="database">
        <h1>Playlist</h1>

        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search.."
            name="query"
            value={query}
            onChange={handleSearchChange}
          />
          <img src={searchIcon} className="search-icon" alt="search icon" />
        </div>

        {filteredContents.map((content, index) => (
          <div
            className="database-contents"
            key={index}
            onClick={() => handleVideoSelect(content)}
          >
            <img src={zoomIcon} alt="zoom" />
            <p>{content.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;