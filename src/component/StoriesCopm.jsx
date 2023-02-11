import React from "react";
import Stories from "react-insta-stories";
function StoriesCopm() {
  const stories = [
    {
      content: ({ action, isPaused }) => {
        return (
          <div>
            <h1 className="text-white">ghhk</h1>
          </div>
        );
      },
    },
  ];
  return (
    <Stories
      stories={stories}
      defaultInterval={1500}
      width={432}
      height={768}
    />
  );
}

export default StoriesCopm;
