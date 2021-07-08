import React from "react";
import storyList from "./StoryList";

function StoryChoices({ setStoryChoice }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose a story
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {Object.values(storyList.stories).map((story) => {
          const { id, title } = story;
          return (
            <li key={id}>
              <button
                onClick={() => setStoryChoice(id)}
                className="dropdown-item"
                type="button"
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StoryChoices;