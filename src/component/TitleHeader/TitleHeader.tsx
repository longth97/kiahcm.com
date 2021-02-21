type Props = {
    title: string;
}
export const TitleHeader = (props: Props) => {
    return (
        <h2 className="section-title">
            <span>{props.title}</span>
            <style jsx>
                {`
                .section-title {
                    text-align: center;
                    width: 100%;
                    text-transform: uppercase;
                    font-family: Montserrat-Bold;
                    color:rgb(237, 52, 12);
                }
                    
                `}
            </style>
        </h2>
    )
}