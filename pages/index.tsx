import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import { NewsCard } from "src/component/NewsCard/NewsCard";
import { ProductCard } from "src/component/ProductCard/ProductCard";
import { TitleHeader } from "src/component/TitleHeader/TitleHeader";
import CustomCarousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";
import PrimaryButton from "src/component/website/primary-button/PrimaryButton";
import Title from "src/component/website/title/Title";
import { Home } from "src/models/Home";
import { HomeQuery } from "src/services/homeQuery";
import SnowEffect from "src/component/website/effects/SnowEffect";
import Container from "src/component/website/elemets/Container";
import Head from "next/head";
import ContactForm from "src/component/ContactForm/ContactForm";

export default function HomePage() {
  const { loading, error, data } = useQuery<Home>(HomeQuery);
  if (loading) return <Loading />;
  if (error) return <h1>Error: {error.message}</h1>;
  if(data) return (
    <div>
      <MasterPage title="Trang chủ">
       
        <main id="pHome" className="pHome">
        <CustomCarousel />
          <Container>
            <div className="body-products">
              {data.home.products.map((e, i) => (
                <ProductCard
                  key={i}
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                  description={e.description}
                />
              ))}
            </div>
            <div className="body-button">
              <PrimaryButton text={"Xem tất cả các dòng xe"} />
            </div>
          </Container>
          <div className="sectionBgEffect">
            <div className="contentEffect">
              <SnowEffect />
            </div>

            <Container>
              <div className="listHowToBuy">
                <div className="contentText copy">
                  <h1>Vì sao nên mua xe KIA???</h1>
                  <h2>TƯ VẤN NHIỆT TÌNH</h2>
                  <p>
                    Đội ngũ nhân viên được đào tạo chuyên nghiệp, nhiều năm kinh
                    nghiệm trong ngành luôn sẵn lòng giúp Quý khách tìm được
                    chiếc xe ưng ý cũng như hỗ trợ Quý khách các thủ tục mua xe
                    trả góp, đóng thuế, đăng ký, đăng kiểm xe…
                  </p>
                  <h2>GIÁ TỐT NHẤT – GIAO XE NHANH</h2>
                  <p>
                    Chúng tôi cam kết luôn mang lại mức giá tốt và nhiều ưu đãi
                    nhất cho Quý khách cùng với thời gian giao xe sớm nhất tại
                    khu vực phía Nam.
                  </p>
                </div>
                <div className="contentText copy">
                  <h1>Vì sao nên mua xe KIA???</h1>
                  <h2>TƯ VẤN NHIỆT TÌNH</h2>
                  <p>
                    Đội ngũ nhân viên được đào tạo chuyên nghiệp, nhiều năm kinh
                    nghiệm trong ngành luôn sẵn lòng giúp Quý khách tìm được
                    chiếc xe ưng ý cũng như hỗ trợ Quý khách các thủ tục mua xe
                    trả góp, đóng thuế, đăng ký, đăng kiểm xe…
                  </p>
                  <h2>GIÁ TỐT NHẤT – GIAO XE NHANH</h2>
                  <p>
                    Chúng tôi cam kết luôn mang lại mức giá tốt và nhiều ưu đãi
                    nhất cho Quý khách cùng với thời gian giao xe sớm nhất tại
                    khu vực phía Nam.
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <Title title="Tin tức" />
            <div className="body-news">
              {data.home.news.map((e, i) => (
                <NewsCard
                  id={e.id}
                  key={i}
                  date={e.createdAt}
                  url={e.image.url}
                  title={e.title}
                  description={e.description}
                />
              ))}
            </div>
          </Container>
          <ContactForm />
          <style jsx>{`
            .contentEffect {
              position: absolute;
              width: 100%;
              height: 100%;
            }
            .listHowToBuy {
              display: flex;
              justify-content: space-between;
              z-index: 3;
              padding: 80px 0;
              &::after {
                content: "";
                position: absolute;
                width: 0;
                height: 0;
                border-left: 30px solid transparent;
                border-right: 30px solid transparent;
                border-top: 30px solid #fff;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
              }
              .contentText.copy {
                position: relative;
                width: 48%;
                padding: 35px 50px;
                z-index: 2;
                color: #fff;
                background-color: rgba(173, 173, 173, 0.4);
                letter-spacing: 2px;
                h1 {
                  padding: 10px 0;
                  padding-bottom: 15px;
                }
                h2 {
                  padding: 10px 0;
                }
              }
            }
            .sectionBgEffect {
              justify-content: space-between;
              position: relative;
              margin-bottom: 40px;
            }
            .body-button {
              width: 100%;
              display: flex;
              justify-content: center;
            }
          `}</style>
        </main>
      </MasterPage>
    </div>
  );
}
