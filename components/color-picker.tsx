import { type Signal } from "@preact/signals";
import { COLORS } from "../shared/constants.ts";
import { Color } from "../shared/types.ts";

export function ColorPicker ({
    selected
} : { 
    selected: Signal<Color> 
}) {        
    return (
        <footer class='fixed bottom-10 w-screen flex gap-2 justify-center items-center'>
            {
                COLORS.map(color => (
                    <button
                        class={`
                            h-6 w-6 
                            ${selected.value === color ?
                                'border-4' : 'border-2 border-black'}
                        `}
                        style={`
                            background-color: ${color}
                        `}
                        onClick={() => selected.value = color}
                    >
                    </button>    
                ))
            }
        </footer>    
    )
}