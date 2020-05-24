import React from 'react';
import './Thumbnails.scss';

function Thumbnail(props) {
  return (
    <div className="Thumbnail">
      Name: <div className="Thumbnail_project-name">{props.name}</div>
      Description:<div className="Thumbnail_project-description">{props.description}</div>
      GitHub URL: <a
        href={props.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="Thumbnail_project-url"
      >
        {props.name}
      </a>
    </div>
  )
}

export default Thumbnail;