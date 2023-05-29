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
    <div className=" flex flex-col justify-center items-center  lg:justify-start lg:items-start">
      <h2 className=" font-bold lg:ml-16 text-xl mt-10">
        Billboard Global 200 song:
      </h2>
      <div className=" flex flex-row justify-center lg:justify-start lg:ml-16 flex-wrap  gap-3 items-start mt-5">
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
