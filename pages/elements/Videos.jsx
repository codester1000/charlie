import React, { useRef, useEffect } from "react";

export default function Videos(props) {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player
    for (let i=0; i < props.videoIds.length(); i++) {
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player(playerRef.current, {
          height: "390",
          width: "640",
          videoId: videoIds[i],
          playerVars: {
            playsinline: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
        console.log("player ready")
      };
    }
  }, []);

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }

  return (
    <>    
    <div  className={`flex mb-2 justify-start`}>
      <div className={`px-4 py-2 rounded-lg ml-2`}>
        Hi, I am Charlie, your movie AI assistant. I can help you find movie and scenes that you will enjoy. Here are some scenes that are similar to what you have been talking about!
      </div>
    </div>
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-11/12 h-3/4 flex justify-center">
        <div className="w-1/3">
          <div ref={(ref) => (playerRefs.current[0] = ref)} />
          <p className="text-center mt-2">Pulp Fiction - Dance Scene</p>
        </div>
        <div className="w-1/3">
          <div ref={(ref) => (playerRefs.current[1] = ref)} />
          <p className="text-center mt-2">Video 2 Caption</p>
        </div>
        <div className="w-1/3">
          <div ref={(ref) => (playerRefs.current[2] = ref)} />
          <p className="text-center mt-2">Video 3 Caption</p>
        </div>
      </div>
    </div>
    </>
  );
}
