import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import RankingCard from "../components/RankingCard";

export function CreatorsRanking() {
    // Dummy data for demonstration
    const creators = [
      {
        rank: 1,
        profileImage: "/public/profile1.jpg",
        username: "User1",
        totalSold: 1000,
        highestSold: 500,
      },
      {
        rank: 2,
        profileImage: "/public/profile2.jpg",
        username: "User2",
        totalSold: 800,
        highestSold: 400,
      },
      // Add more creators as needed
    ];
  
    return (
      <div
        className={cn(
          "relative overflow-hidden flex min-h-screen flex-col items-center justify-center z-[5000] bg-slate-950 w-full pt-20",
          "bg-cover bg-center",
          "bg-no-repeat"
        )}
        style={{
          backgroundImage: `url("/public/CreatorRanking.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75 overflow-hidden"></div>
        <Navbar />
        <div className="Header mt-52 bg-gray-700" style={{ width: "60%", position: "absolute", top: "0", left: "0" }}>
          <div className="text-slate-200 flex justify-items-start justify-between">
            <span className="ml-2">Rank </span>
            <span> Creator </span>
            <span> Total sold </span>
            <span className="mr-2"> Highest Sold </span>
          </div>
        </div>
        <div className="flex flex-col items-center" style={{ width: "60%" }}>
          {creators.map((creator, index) => (
            <RankingCard
              key={index}
              rank={creator.rank}
              profileImage={creator.profileImage}
              username={creator.username}
              totalSold={creator.totalSold}
              highestSold={creator.highestSold}
            />
          ))}
        </div>
      </div>
    );
  }
  