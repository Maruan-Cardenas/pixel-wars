import { useSignal } from "@preact/signals";
import { Tiles } from "../components/Tiles.tsx";
import { ColorPicker } from "../components/color-picker.tsx";
import { COLORS } from "../shared/constants.ts";
import { Color } from "../shared/types.ts";

export function Game({initialTiles}:{initialTiles: Color[]}) {
    const grid = useSignal<Color[]>(initialTiles)
    const selected = useSignal<Color>(COLORS[0])

    return (
    <>
        <Tiles grid={grid} selectedColor={selected.value} />
        <ColorPicker selected={selected} />
    </>
    )
}