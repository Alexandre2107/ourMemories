interface SpotifyEmbedProps {
  url: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ url }) => {
  const trackId = url.split("/track/")[1]?.split("?")[0] ?? "";
  return (

    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="500"
      height="80"
      allow="encrypted-media"
      className="rounded-xl"
    ></iframe>
  );
};

export default SpotifyEmbed;
