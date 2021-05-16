import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

import Loader from '../UI/Loader'

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values) => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      message: values.message,
    };
    setLoading(true);
    emailjs
      .send(
        "service_l156ty9",
        "template_ywciicy",
        data,
        "user_VgyadWgkodaI2BrrSTyEs"
      )
      .then(
        (response) => {
          if (response.status === 422) {
            formik.setStatus({ message: "Something went wrong..." });
          }
          formik.resetForm();
        },
        (error) => {
          formik.setStatus({ message: "Something went wrong..." });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form-contact">
      <Loader loading={loading}/>
      <form onSubmit={formik.handleSubmit}>
        {formik.status?.message && (
          <div className="form-status">{formik.status?.message}</div>
        )}
        <div className="form-group-row">
          <div className="form-group">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onFocus={() => formik.setFieldTouched("fullName", false)}
              onBlur={() => formik.setFieldTouched("fullName", true)}
              value={formik.values.fullName}
              disabled={loading}
            />
            {formik?.errors?.fullName && formik?.touched?.fullName && (
              <div>{formik?.errors?.fullName}</div>
            )}
          </div>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              onFocus={() => formik.setFieldTouched("email", false)}
              onBlur={() => formik.setFieldTouched("email", true)}
              value={formik.values.email}
              disabled={loading}
            />
            {formik?.errors?.email && formik?.touched?.email && (
              <div>{formik?.errors?.email}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Message"
            rows="6"
            onChange={formik.handleChange}
            onFocus={() => formik.setFieldTouched("message", false)}
            onBlur={() => formik.setFieldTouched("message", true)}
            value={formik.values.message}
            disabled={loading}
          />
          {formik?.errors?.message && formik?.touched?.message && (
            <div>{formik?.errors?.message}</div>
          )}
        </div>
        <div className="form-button">
          <button type="submit" disabled={loading}>
            Send message <i className="icon icon-arrow-right" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
