import { Box, Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../website/elemets/Container";

type Inputs = {
  name: string;
  phoneNumber: number;
};

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ e });
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ e }),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="contact-form">
      <div className="title">Liên hệ tư vấn</div>
      <Container>
        <div className="content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6461458355307!2d106.67294314976338!3d10.838368292241636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529aa995a3e81%3A0x3e4d86f31802b8a4!2zMTg5IE5ndXnhu4VuIE9hbmgsIFBoxrDhu51uZyAxMCwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1611472615721!5m2!1svi!2s"
            height="450"
            width="100%"
            frameBorder="0"
            aria-hidden="false"
            tabIndex={0}
          />

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              type="text"
              placeholder="Họ và tên"
              name="First name"
              ref={register({ maxLength: 20 })}
            />
            <input
              className="input"
              type="tel"
              placeholder="Số điện thoại"
              name="phoneNumber"
              pattern="[0-9]{10}"
              ref={register({ required: true, maxLength: 10 })}
            />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              ref={register}
            />
            <input
              className="input"
              type="address"
              placeholder="Địa chỉ"
              name="address"
              ref={register}
            />
            <input
              className="input-content"
              type="text"
              placeholder="Nội dung"
              name="content"
              ref={register}
            />

            <input className="submit" type="submit" value="Liên hệ" />
          </form>
        </div>
      </Container>
      <style jsx>
        {`
          .contact-form {
            background: #3f3e3e;
            padding: 50px 0px 100px 0px;
            direction: column;
            .title {
              text-align: center;
              font-size: 24px;
              color: white;
              text-transform: uppercase;
              margin-bottom: 40px;
            }
            .content {
              direction: row;
              display: flex;
              .form {
                width: 100%;
                padding-left: 50px;
                .input {
                  width: 100%;
                  height: 40px;
                  margin-bottom: 20px;
                  padding-left: 10px;
                }
                .input-content {
                  width: 100%;
                  height: 100px;
                  margin-bottom: 20px;
                }
                .submit {
                  width: 50%;
                  height: 40px;
                  background-color: red;
                  color: white;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
