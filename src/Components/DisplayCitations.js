import React from 'react';

function DisplayCitations({ citations }) {
  return (
    <div className="DisplayCitations">
      <img
        src={citations.image}
      />
      <ul>
        <li>Name: {citations.character}</li>
        <li>citations: {citations.quote}</li>
      </ul>
    </div>
  );
};


export default DisplayCitations;