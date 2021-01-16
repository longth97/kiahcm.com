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
                <div className="day">
                    {moment(props.date).format('Do')}
                </div>
                <div className="month">
                    {moment(props.date).format('MMMM')}
                </div>
            </div>
            <div className="image" >
                <img src={props.url} />
            </div>
            <div className="content">
                <div className="title">
                    {props.title}
                </div>
                <div className="description">
                    {props.description}
                </div>
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
                        .title { 
                            font-family: 'Roboto-Regular';
                            font-size: 1.15em;
                            font-weight: 700;
                        }
                        .description {
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