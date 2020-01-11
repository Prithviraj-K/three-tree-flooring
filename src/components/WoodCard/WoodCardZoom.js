import React from 'react';
import { GlassMagnifier } from "react-image-magnifiers";

const WoodCardZoom = (props) => {
    return (
        <div style={{margin: "0", padding: "0"}}>
            <GlassMagnifier
                imageSrc={props.srced}
                imageAlt="Boher"
                style={{ maxHeight: "20%", maxWidth: "auto" }}
            />
        </div>
    );
}

export default WoodCardZoom;