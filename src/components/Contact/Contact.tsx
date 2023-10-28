import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { message, Spin } from "antd";
import MetaSeo from "../MetaSeo";

const Contact = () => {
  const [data, setData] = useState<any>({});
  const [mes, setMes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeData = (e: any) => {
    setMes("");
    setData((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const regexName =
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (
      data?.name?.trim() == "" ||
      !regexName?.test(data?.name) ||
      !data?.name
    ) {
      return setMes("Vui lòng nhập đúng tên !");
    }

    if (
      data?.email?.trim() == "" ||
      !regexEmail?.test(data?.email) ||
      !data?.email
    ) {
      return setMes("Vui lòng nhập đúng email !");
    }

    if (
      data?.phone?.trim() == "" ||
      !regexPhone?.test(data?.phone) ||
      !data?.phone
    ) {
      return setMes("Vui lòng nhập đúng số điện thoại !");
    }
    setIsLoading(true);
    const { name, email, phone } = data;
    try {
      emailjs
        .send(
          "service_3kdubno",
          "template_mavnp4r",
          {
            name,
            email,
            phone,
          },
          "BXfEhSXDFx6iNNDHW"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              message.success("Gửi đăng ký thành công !");
            }
            setIsLoading(false);
          },
          (error) => {
            setIsLoading(false);
            message.error(error.text);
          }
        );
    } catch (error) {
      message.error("Có lỗi xảy ra !");
    }
  };
  return (
    <>
      <MetaSeo title={"LemonDev - Liên Hệ"} />
      <div>
        <div
          className="d-flex h-100 w-100"
          data-bs-spy="scroll"
          data-bs-target="#navScroll"
        >
          <div className="h-100 container-fluid">
            <div className="h-100 row d-flex align-items-stretch">
              <div className="col-12 col-md-7 col-lg-6 d-flex align-items-start flex-column px-vw-5 contact_form">
                <main className="mb-auto col-12">
                  <h1>Liên hệ với tôi</h1>

                  <form className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Tên của bạn
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="name"
                          onChange={handleChangeData}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Địa chỉ email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={handleChangeData}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Số điện thoại
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          name="phone"
                          onChange={handleChangeData}
                        />
                      </div>
                      <p
                        style={{
                          color: "red",
                          fontSize: "14px",
                          height: "20px",
                        }}
                      >
                        {mes}
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary btn-xl mb-4"
                        style={{
                          borderRadius: "5px",
                          padding: "10px 25px",
                          width: "120px",
                        }}
                        onClick={handleSubmit}
                        disabled={isLoading}
                      >
                        {!isLoading ? (
                          <p style={{ margin: "0" }}>Gửi ngay</p>
                        ) : (
                          <Spin className="spin_send" />
                        )}
                      </button>
                      <p className="small text-muted border-top py-2">
                        Hãy liên hệ với tôi nếu như bạn đang cần một lập nhà
                        phát triển website !
                      </p>
                    </div>
                  </form>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
