import React, { useState } from 'react';
import Player from './Player';
import searchIcon from '../assets/search.svg';
import zoomIcon from '../assets/zoom.svg';
import codingLessons from '../assets/coding_lessons.mp4';
import yearOldFuture from '../assets/Yearold_future .mp4';
import musicVideo from '../assets/music_video.mp4';

const Main = () => {
  const [query, setQuery] = useState('');
  const [databaseContents] = useState([
    { title: 'Yearold Future Tech', src: yearOldFuture },
    { title: 'Coding Lessons', src: codingLessons },
    { title: 'Music Video', src: musicVideo },
    // Add more database contents as needed
  ]);
  const [selectedVideo, setSelectedVideo] = useState(databaseContents[0]); // Default to the first video

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

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
            onClick={() => handleVideoSelect(video)}
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