
import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
    breakpoints: {
        sm: 0,
        md: 700,
    },
})

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;