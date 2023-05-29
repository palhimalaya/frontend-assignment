import { BsPlayFill } from "react-icons/bs";

interface Props {
  img: string;
  name: string;
  uri: string;
  artistName: string;
  date: string;
}

const Card = ({ img, name, uri, artistName, date }: Props) => {
  const modifiedUrl = uri
    .replace(/:/g, "/")
    .replace("spotify", "https://open.spotify.com");

  return (
    <a href={modifiedUrl} target="_blank">
      <div className=" max-w-sm h-50 bg-gray-200 p-3 rounded-lg hover:bg-gray-300 group">
        <div className="relative">
          <img
            className=" w-40 items-center rounded-md  "
            src={img}
            alt="wave"
          />
          <div className="absolute bottom-2 right-1 rounded-full bg-green-500 p-3 hidden group-hover:flex hover:scale-110 duration-300 hover:drop-shadow-lg">
            <BsPlayFill className=" text-xl items-center text-black " />
          </div>
        </div>
        <div className="font-semibold w-40 overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </div>
        <div className=" ">
          <div className="text-sm text-gray-500 w-40 overflow-hidden text-ellipsis whitespace-nowrap">
            {artistName}
          </div>
          <div className="text-sm text-gray-500 w-40 overflow-hidden text-ellipsis whitespace-nowrap">
            {date}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
