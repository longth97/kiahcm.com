type ImageProps = {
    href: string;
    src: string;
}

export const ImageCar = (props: ImageProps) => {
    return (
        <div className="image">
            <a href={props.href ?? "#"} style={{ padding: "0px" }}>
                <img
                    src={props.src}
                />
            </a>
            <style jsx>{`
            .image {
                   a {
                    img{
                        width: 95%;
                        height: 95%;
                        transition: width 0.7s, height 0.7s;
                            &:hover {
                                width: 100%;
                                height: 100%;
                            }
                        }
                   }
            }
              
        `}</style>
        </div>
    )
}