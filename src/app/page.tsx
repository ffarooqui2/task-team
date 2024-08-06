import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mb-20">
        <div className="flex flex-col gap-6 pb-6">
          <div className="flex flex-col gap-6">
            <h1>Task Together.</h1>
            <h1>Succeed Together.</h1>
          </div>
          <p className="text-muted-foreground text-lg font-semibold">
            Harness the power of community to acheive goals with <br />
            collective accountability and teamwork.
          </p>
        </div>
        <Button size={"lg"} variant={"taskteam"}>
          Get TaskTeam free
        </Button>
      </div>
      <div className="flex justify-center">
        <Image
          className="rounded-3xl shadow-xl"
          objectFit="contain"
          src="/screen-shot.png"
          alt="screen-shot"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
