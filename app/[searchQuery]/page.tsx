import getMusicData from "@/lib/getMusicData";
import { JsxEmit } from "typescript";
import Card from "../components/Card";
import NotFound from "./not-found";

type Props = {
  params: { searchQuery: string };
};

const page = async ({ params: { searchQuery } }: Props) => {
  const musicData = getMusicData(searchQuery);
  const data = await musicData;
  const albums = data?.albums.items;

  if (!albums.length) {
    return <NotFound />;
  }

  return (
    <>
      <h3 className="ml-16 mt-10 text-lg font-bold">
        {decodeURIComponent(searchQuery)}:
      </h3>
      <div className=" flex flex-row flex-wrap ml-16 gap-3 items-start mt-5">
        {albums.map((album: any, index: string) => (
          <div key={index}>
            <Card
              img={album?.data.coverArt.sources[0].url}
              name={album?.data.name}
              uri={album?.data.uri}
              artistName={album?.data.artists.items[0].profile.name}
              date={album?.data.date.year}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
