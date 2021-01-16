import { COLOR } from "src/constants"
import moment from "moment"

export const NewsCard = () => {
    const dateToFormat = '1976-04-19T12:59-0500';
    return (
        <div className="container">
            <div className="wrapper">
                <div className="dateTime">
                    <div className="day">
                        {moment(dateToFormat).format('Do')}
                    </div>
                    <div className="month">
                        {moment(dateToFormat).format('MMMM')}
                    </div>
                </div>
                <div className="image" >
                    <img src="https://mazda-automobile.vn/wp-content/uploads/2020/03/mazda2_sdn_galeria01-713x400.jpg" />
                </div>
            </div>
            <div className="title">
                BỘ ĐÔI HOÀN TOÀN MỚI MAZDA3 VÀ MAZDA3 SPORT CHÍNH THỨC RA MẮT TẠI VIỆT NAM
            </div>
            <style jsx>
                {`
                .container {
                    align-items: center;
                    .wrapper {
                        position: relative;
                        .dateTime {
                            position: absolute;
                            z-index: 2;
                            border: solid 2px;
                            border-color: ${COLOR.PRIMARY_COLOR};
                            padding: 1px 30px 1px 30px;
                            text-align: center;
                            color: ${COLOR.PRIMARY_COLOR};
                            .day {
                                font-weight: bold;
                                font-size: 18px;
                            }
                        }
                        .image {
                            position: relative;
                            z-index: 1;
                        }
                    }
                    .title { 
                        font-size: 1.15em;
                        font-weight: 700;
                    }
                }
                `}
            </style>
        </div>
    )
}