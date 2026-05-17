import FeedItem from "./FeedItem";

const feed = [
  {
    title:
      "Global semiconductor supply chains face renewed disruption amid rising geopolitical tensions.",
    source: "Reuters",
    time: "2m ago",
    category: "Technology",
  },

  {
    title:
      "Oil markets react sharply following major international trade policy announcement.",
    source: "Bloomberg",
    time: "7m ago",
    category: "Economy",
  },

  {
    title:
      "Satellite imagery suggests increased military activity near contested border region.",
    source: "OSINT Monitor",
    time: "12m ago",
    category: "Geopolitics",
  },

  {
    title:
      "AI infrastructure investment crosses historic quarterly growth threshold.",
    source: "Financial Times",
    time: "18m ago",
    category: "Artificial Intelligence",
  },
];

export default function LiveFeed() {
  return (
    <div className="space-y-4 overflow-y-auto h-[430px] pr-2 w-full">

      {feed.map((item, index) => (
        <FeedItem key={index} {...item} />
      ))}

    </div>
  );
}