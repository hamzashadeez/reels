import Controls from "./components/Controls";
import Reel from "./components/Reel";

export default function Home() {
  return (
    <main className="flex relative">
      <div className="">
        <Reel />
        <Reel />
        <Reel />
      </div>
      {/* <div className="w-20 sticky right-10 top-0 h-140 flex flex-col justify-end py-6 px-4">
        <Controls />
      </div> */}
    </main>
  );
}
