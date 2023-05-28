import getTopChart from "@/lib/getTopChart";
import GenreCard from "./components/TopChartCard";
import Link from "next/link";
import NotFound from "./not-found";

export default async function Home() {
  const topChart = getTopChart();
  const data = await topChart;
  const entries = data?.chart?.entries || [];

  if (!entries.length) {
    return <NotFound />;
  }

  return (
    <div className=" flex flex-col ">
      <h2 className=" font-bold ml-16 mt-10">Top Latest 200 song:</h2>
      <div className=" flex flex-row flex-wrap ml-16 gap-3 items-start mt-5">
        {entries.map((entry: any) => (
          <div key={entry.rank}>
            <Link href={entry.title}>
              <GenreCard
                name={entry.title}
                rank={entry.rank}
                image={entry.cover}
                artist={entry.artist}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
