import { Head } from "$fresh/runtime.ts";
import { Game } from "../islands/game.tsx";
import { PIXEL_SIZE, WIDTH } from "../shared/constants.ts";
import { getGrid } from "../shared/db.ts";

export default async function Home() {
  const { tiles } = await getGrid()
  return (
    <>
      <Head>
        <title>Pixel Wars</title>
      </Head>
      <Game initialTiles={tiles} />
    </>
  );
}
