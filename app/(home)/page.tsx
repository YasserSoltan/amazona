import HomeCarousel from "@/components/shared/home/HomeCarousel";
import data from "@/lib/data";

export default function Home() {
  return <HomeCarousel items={data.carousels} />;
}
