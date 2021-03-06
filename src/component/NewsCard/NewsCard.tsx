import { COLOR } from "src/constants";
import moment from "moment";
import { useRouter } from "next/router";

type NewsCardProps = {
  id: any;
  date: Date;
  url: string;
  title: string;
  description: string;
};

export const NewsCard = (props: NewsCardProps) => {
  const router = useRouter();
  return (
    <div
      className="newsCard"
      onClick={() => router.push(`/chi-tiet-tin-tuc/${props.id}`)}
    >
      <div className="dateTime">
        <h3 className="day">
          {moment(props.date).format("Do")} <br />
        </h3>
        <span className="month">{moment(props.date).format("MMMM")}</span>
      </div>
      <div className="image">
        <img src={props.url} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
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
              padding: 0px 30px 0px 30px;
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
              padding-top: 0.7em;
              position: relative;
              width: 100%;
              text-align: center;
              h3 {
                font-family: "Roboto-Regular";
                font-size: 1.3em;
                font-weight: 700;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              p {
                font-family: "Roboto-Thin";
                font-size: 1em;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: left;
              }
            }
          }
        `}
      </style>
    </div>
  );
};
