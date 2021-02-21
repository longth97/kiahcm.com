import { Box, Button, Grid, Snackbar, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../website/elemets/Container";
import { ContactMutation } from "../../services/contactform.query";
import { useMutation } from "@apollo/client";
import { Alert } from "../Alert/Alert";

type Inputs = {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  content: string;
};

export default function ContactForm() {
  const { register, handleSubmit, watch, reset, errors } = useForm<Inputs>();
  const [createContact] = useMutation(ContactMutation);
  const [open, setOpen] = React.useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = async (data: Inputs) => {
    const name = await createContact({
      variables: {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        address: data.address,
        content: data.content,
      },
    });

    await fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(`thanh cong ${res.body}`);
    });

    if (name) {
      setOpen(true);
      // reset();
    } else {
      alert("Đã có lỗi xảy ra vui lòng thử lại!!!");
    }
  };

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
          <div className="form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfeS6UBc9xPe_iyXi9Ej6NAnPjIMBzVhpz-cx_g2c_MC6aKqQ/viewform?embedded=true"
              height="450"
              width="100%"
              frameBorder="0"
            >
              Đang tải…
            </iframe>
          </div>
          <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Đã gửi thông tin thành công. Chúng tôi sẽ liên lạc với bạn trong
              thời gian sớm nhất.!
            </Alert>
          </Snackbar>
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
