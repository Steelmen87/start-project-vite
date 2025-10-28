import iconsSprite from "../../assets/images/IMG_PORT/ikonsSpite.svg"

type PropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, viewBox, height, width}: PropsType) => {
    return <svg width={width || "41"} height={height || "41"} viewBox={viewBox || "0 0 41 41"} fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${iconId}`}/>
    </svg>
}

