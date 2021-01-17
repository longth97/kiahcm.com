type Title = {
    value: string,

}

export default function Title(props: Title) {
    return <h2 className="title"  >
        <b>
            {props.value}
        </b>
        <style jsx>{`
            .title {
                color: #ed340c;
                font-size: 2vw;
                text-transform: uppercase;
                display:flex;
                justify-content: center;
                align-items: center;
                position: relative;
                &::after{
                    content:"";
                    position: absolute;
                    width:100%;
                    height:2px;
                    background-color: #eeeeee;
                    z-index:-1;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                b{
                    position:relative;
                    z-index:1;
                    background-color: #fff;
                    padding-left: 10px;
                    padding-right: 10px;
                }
            }
       `}</style>
    </h2>
}