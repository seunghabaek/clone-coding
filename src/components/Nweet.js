import React from "react";

export const Nweet = ({ nweetObj, isOwner }) => (
  <div>
    <h4>{nweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete Nweet</button>
        <button>Edit Nweet</button>
      </>
    )}
  </div>
);
