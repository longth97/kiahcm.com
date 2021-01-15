import { Typography } from "@material-ui/core"
import React from "react"

type DescriptionProps = {
    description: string;
}

export const DescriptionCar = (props: DescriptionProps) => {
    return (
        <div className="description">
            <Typography >
                {props.description}
            </Typography>
            <style jsx>{`
            .description {
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                font-size: 13px;
                opacity: 0.6;
            }   
        `}</style>
        </div>
    )
}