
type CardNameProps = {
    name: string;
    href: string;
    fontSize?: number;
}

export const CarName = (props?: CardNameProps) => {
    return (
        <div>
            <a href={props.href} style={{ fontSize: `${props.fontSize ?? 20}px` }} >
                {props.name}
            </a>

            <style jsx>{`
            a {
                &:hover {
                color: #343078;
                }
            }   
            `}
            </style>
        </div>
    )
}