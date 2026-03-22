"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

const PartnerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "First name can only contain letters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Last name can only contain letters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[\d\s\+\-\(\)]{10,}$/, "Please enter a valid phone number"),

  whatsappNumber: yup
    .string()
    .matches(/^[\d\s\+\-\(\)]{10,}$/, "Please enter a valid WhatsApp number"),

  companyName: yup
    .string()
    .required("Company name is required")
    .min(2, "Company name must be at least 2 characters"),

  officialEmailId: yup
    .string()
    .required("Official email is required")
    .email("Please enter a valid official email address"),

  companyAddress: yup
    .string()
    .required("Company address is required")
    .min(10, "Please enter a complete address"),

  country: yup
    .string()
    .required("Country is required")
    .notOneOf([""], "Please select a country"),
});

const formFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    colSpan: 1,
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    colSpan: 1,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    colSpan: 1,
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "+977 9846344252",
    colSpan: 1,
    required: true,
  },
  {
    name: "whatsappNumber",
    label: "WhatsApp Number",
    type: "tel",
    placeholder: "+977 9846344252",
    colSpan: 1,
    required: false,
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "Enter your company name",
    colSpan: 1,
    required: true,
  },
  {
    name: "officialEmailId",
    label: "Official Email ID",
    type: "email",
    placeholder: "official@company.com",
    colSpan: 1,
    required: true,
  },
];

const countryOptions = [
  { value: "", label: "Select a country" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Japan", label: "Japan" },
  { value: "India", label: "India" },
  { value: "Brazil", label: "Brazil" },
  { value: "China", label: "China" },
  { value: "Singapore", label: "Singapore" },
  { value: "UAE", label: "United Arab Emirates" },
  { value: "Other", label: "Other" },
];

export default function PartnerForm() {
  return (
    <div className="w-full min-h-screen bg-[#04413D]/20 flex  flex-col  mx-auto py-10 px-4">
      <div className="text-center mb-8 navtext">
        <h1 className="text-5xl font-bold text-[#04413D] mb-2">
          Become a Partner
        </h1>
        <p className="text-gray-600">
          Fill out the form below to start our partnership journey
        </p>
      </div>

      <div className=" w-11/12 mx-auto flex bg-white rounded-2xl shadow-lg p-8">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            whatsappNumber: "",
            companyName: "",
            officialEmailId: "",
            companyAddress: "",
            country: "",
          }}
          validationSchema={PartnerSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            try {
              console.log("Partner Form Submitted", values);

              toast.success(
                "Application submitted successfully! We'll get back to you soon."
              );

              resetForm();

              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            } catch (error) {
              console.error("Submission error:", error);
              toast.error("Submission failed. Please try again.");
              setSubmitting(false);
            }
          }}
        >
          {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <Field
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04413D] focus:border-transparent transition duration-200"
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04413D] focus:border-transparent transition duration-200"
                  >
                    {countryOptions.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-sm font-medium text-gray-700">
                  Company Address <span className="text-red-500">*</span>
                </label>
                <Field
                  as="textarea"
                  name="companyAddress"
                  rows="4"
                  placeholder="Street address, city, state/province, postal code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04413D] focus:border-transparent transition duration-200 resize-none"
                />
                <ErrorMessage
                  name="companyAddress"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <ErrorMessage
                name="firstName"
                render={() => (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg mt-4">
                    <p className="text-sm text-yellow-700">
                      Please fill in all required fields correctly before
                      submitting.
                    </p>
                  </div>
                )}
              />

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-3 bg-[#04413D] text-white font-semibold rounded-lg hover:bg-white hover:text-[#04413D] focus:outline-none focus:ring-2 hover:border hover:border- focus:ring-offset-2 transition  disabled:opacity-50 disabled:cursor-not-allowed w-fit cursor-pointer duration-500"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
