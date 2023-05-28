type Props = {
  name: string;
  rank: number;
  image: string;
  artist: string;
};

const GenreCard = ({ name, rank, image, artist }: Props) => {
  return (
    <div className=" max-w-sm h-50 bg-gray-200 p-3 rounded-lg hover:bg-gray-300">
      <div className=" relative z-0">
        <img
          className=" w-40 items-center rounded-md "
          src={image}
          alt="wave"
        />

        <div className="absolute top-0 left-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center z-0">
          {rank}
        </div>
      </div>
      <div className="font-semibold w-40 overflow-hidden text-ellipsis whitespace-nowrap">
        {name}
      </div>
      <div className="text-sm text-gray-500 w-40 overflow-hidden text-ellipsis whitespace-nowrap">
        {artist}
      </div>
    </div>
  );
};

export default GenreCard;
