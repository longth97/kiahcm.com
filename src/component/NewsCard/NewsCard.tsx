import { COLOR } from "src/constants"
import moment from "moment"

type NewsCardProps = {
    date: Date;
    url: string;
    title: string;
    description: string;
}

export const NewsCard = (props: NewsCardProps) => {

    return (

        <div className="newsCard">
            <div className="dateTime">
                <span className="day">
                    {moment(props.date).format('Do')} <br />
                </span>
                <span className="month">
                    {moment(props.date).format('MMMM')}
                </span>
            </div>
            <div className="image" >
                <img src={props.url} />
            </div>
            <div className="content">
                <h3>
                    {props.title}
                </h3>
                <p >
                    {props.description}
                </p>
            </div>
            <style jsx>
                {`
                    .newsCard {
                        position: relative;
                        max-width: 667px;
                        .dateTime {
                            position: absolute;
                            z-index: 2;
                            border: solid 2px;
                            border-color: ${COLOR.PRIMARY_COLOR};
                            padding: 0.5px 40px 0.5px 40px;
                            top: 10px;
                            left: -10px;
                            text-align: center;
                            background: white;
                            color: ${COLOR.PRIMARY_COLOR};
                            .day {
                                font-weight: bold;
                                font-size: 16px;
                            }
                            .month {
                                font-size: 12px; 
                            }
                        }
                        .image {
                            position: relative;
                            z-index: 1;
                        }
                    .content {
                        padding-top: .7em;
                        position: relative;
                        width: 100%;
                        text-align: center;
                        h3 { 
                            font-family: 'Roboto-Regular';
                            font-size: 1.15em;
                            font-weight: 700;
                        }
                        p {
                            font-family: 'Roboto-Thin';
                            font-size: .9em;
                        }
                    }
                    
                }
                `}
            </style>
        </div>
    )
}