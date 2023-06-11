import Nav from "components/common/Nav";
import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";
import { useFetch } from "services/hooks/fetch";
import FullLoader from "components/loaders/FullLoader";
import FullError from "components/error/FullError";
import { createOrder } from "services/orderService";
import Link from "next/link";
import ButtonLoader from "components/loaders/ButtonLoader";

const Enrol = () => {
  const router = useRouter();
  const { courseName } = router.query;

  const [course, setCourse] = useState({});

  const {
    data,
    isInitialLoading,
    isSuccess,
    isError: isErrorFetching,
    refetch,
  } = useFetch(`/courses/${courseName}/course`, "get-course");

  let total = 0;

  useEffect(() => {
    if (isSuccess) {
      setCourse(data.course);
    }

    refetch();
  }, [courseName, isSuccess, data, refetch]);

  const amount = course?.discountFee;
  const half = amount / 2;
  const [state, setState] = useState({
    paymentPlan: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    province: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    agreement: false,
  });
  const [errorCreate, setErrorCreate] = useState("");
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorCreate("");

    if (
      !state.paymentPlan ||
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.country ||
      !state.address ||
      !state.province ||
      !state.city ||
      !state.postalCode ||
      !state.phoneNumber ||
      !state.agreement
    ) {
      setErrorCreate("Fields with * are required");
      return;
    }
    setIsLoadingCreate(true);

    try {
      const { data } = await createOrder(`/orders/create`, {
        courseId: course.courseId,
        paymentPlan: state.paymentPlan,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        country: state.country,
        city: state.city,
        address: state.address,
        province: state.province,
        postalCode: state.postalCode,
        phoneNumber: state.phoneNumber,
      });

      router.push({
        pathname: `/courses/${courseName}/payment`,
        query: { order_number: data.orderId },
      });
    } catch (err) {
      if (err?.response?.data) {
        setErrorCreate(err.response.data.message);
      }
    } finally {
      setIsLoadingCreate(false);
    }
  };

  state.paymentPlan == "part-payment"
    ? (total = course?.discountFee / 2)
    : (total = course?.discountFee);

  if (isInitialLoading) {
    return <FullLoader />;
  }
  if (isErrorFetching) {
    return <FullError />;
  }
  return (
    <div className="bg-black min-h-screen ">
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="py-[35px] px-[20px] md:px-[60px] text-white">
          <p className="font-source font-[700] text-[30px] md:text-[40px] leading-[50.2px] ">
            Checkout
          </p>
          <div className="md:flex gap-x-2">
            <div className="flex-1">
              <p className="mt-[20px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]">
                Payment Plan
              </p>
              <p className="my-[18px] md:my-[24px] font-source font-[700] text-[24px] leading-[30.2px] text-[#9b9b9b]">
                Select a payment plan <span className="text-red-600">*</span>
              </p>
              <div className="mb-[20px]">
                <input
                  className="bg-transparent"
                  type="radio"
                  name="paymentPlan"
                  id="outright"
                  onChange={handleChange}
                  value="outright-payment"
                  required
                />
                <label
                  htmlFor="outright"
                  className="font-[600] font-source text-[16px] leading-[20px] text-white ml-[12px]  "
                >
                  Outright Payment (100%)
                </label>
              </div>
              <div className="mb-[20px]">
                <input
                  className="bg-transparent"
                  type="radio"
                  name="paymentPlan"
                  id="half"
                  onChange={handleChange}
                  value="part-payment"
                  required
                />
                <label
                  htmlFor="half"
                  className="font-[600] font-source text-[16px] leading-[20px] text-white ml-[12px]  "
                >
                  Part Payment (50%)
                </label>
              </div>

              <p className="mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]">
                Personal Details
              </p>
              <div className="md:flex gap-x-8 justify-between  mb-[24px]">
                <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
                  <label
                    htmlFor="fname"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                    placeholder="John"
                    id="fname"
                    name="firstName"
                    onChange={handleChange}
                    value={state.firstName}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="lname"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                    placeholder="Doe"
                    id="lname"
                    name="lastName"
                    onChange={handleChange}
                    value={state.lastName}
                    required
                  />
                </div>
              </div>
              {/* multiple */}
              <div className="flex flex-col  mb-[24px]">
                <label
                  htmlFor="email"
                  className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                  placeholder="johndoe@mail.com"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={state.email}
                  required
                />
              </div>
              <div className="flex flex-col  mb-[24px]">
                <label
                  htmlFor="phone"
                  className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                  placeholder="8178627581"
                  id="phone"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={state.phoneNumber}
                  required
                />
              </div>
              <div className="md:flex gap-x-8 justify-between  mb-[24px]">
                <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
                  <label
                    htmlFor="address"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                    placeholder="address"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    value={state.address}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="province"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Province <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                    placeholder="your province"
                    id="province"
                    name="province"
                    onChange={handleChange}
                    value={state.province}
                    required
                  />
                </div>
              </div>
              {/* multiple */}
              <div className="md:flex gap-x-8 justify-between  mb-[24px]">
                <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
                  <label
                    htmlFor="town"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Town/City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                    placeholder="Town/City"
                    id="town"
                    name="city"
                    onChange={handleChange}
                    value={state.city}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="postal"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Postal code <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                    placeholder="123456"
                    id="postal"
                    name="postalCode"
                    onChange={handleChange}
                    value={state.postalCode}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col  mb-[24px]">
                <label
                  htmlFor="country"
                  className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                >
                  Country /Region <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                  placeholder="Nigeria"
                  id="country"
                  name="country"
                  onChange={handleChange}
                  value={state.country}
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]">
                Your Order
              </p>
              <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[240px]  px-4 items-center border border-[#747474] text-[14px] bg-transparent rounded-lg mt-[20px] md:mt-[100px] mb-[20px] md:mb-[50px]">
                <ReactCountryFlag
                  countryCode="NG"
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title="US"
                />
                <input
                  type="text"
                  className="p-4 bg-transparent focus:outline-none focus:ring-0 border-none outline-none w-[90%] text-[14px]"
                  placeholder="Nigerian Naira (NGN)"
                />
              </div>
              <div className="bg-[#1f1d1d] w-full pb-[13px] pt-[24px] px-[24px]">
                <div className="flex justify-between">
                  <p className="font-source font-[600] text-[24px] leading-[30px] text-white mb-[16px]">
                    Product
                  </p>
                  <p className="font-source font-[600] text-[24px] leading-[30px] text-white mb-[16px]">
                    Amount
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[70%]">
                    <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                      {course?.courseId}
                    </p>
                    <span className="ml-[16px] text-left">1X</span>
                  </div>
                  <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                    #{course?.discountFee?.toLocaleString()}
                  </p>
                </div>

                {state.paymentPlan == "part-payment" && (
                  <div className="flex justify-between ">
                    <div className="flex justify-between w-[70%]">
                      <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                        Part Payment
                      </p>
                      <span className="ml-[16px] text-left">50%</span>
                    </div>
                    <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                      #{half.toLocaleString()}
                    </p>
                  </div>
                )}
                <div className="flex justify-between">
                  <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                    Sub Total
                  </p>
                  <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                    {/* {state.paymentPlan == 'halfPayment' ? `#${total}` : `#${amount}`} */}
                    #{total?.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-source font-[600] text-[16px] text-white leading-[20px]">
                    Total
                  </p>
                  <p className="font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]">
                    #{total?.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center items-center mx-auto">
                <div className="flex items-center gap-x-[30px] my-[20px] md:my-[32px]">
                  <p className="font-source font-[600] text-[16px] leading-5">
                    Powered by Flutterwave
                  </p>
                  <div className="flex items-center gap-x-[3px]">
                    <img
                      src="/images/icons/flutterwave.png"
                      alt="flutterwave icon"
                    />{" "}
                    <span className="text-[10px]">Flutterwave</span>
                  </div>
                </div>
                <div className="flex items-center justify-evenly">
                  <img src="/images/icons/visa.png" alt="card" />
                  <img src="/images/icons/visa.png" alt="card" />
                  <img src="/images/icons/visa.png" alt="card" />
                  <img src="/images/icons/visa.png" alt="card" />
                </div>
                <p className="mt-[30px] font-source font-[400] text-white text-[14px] ">
                  The information you provided will be used to improve your
                  experience throughout the course and the general navigation of
                  our website in accordance with our{" "}
                  <span className="text-[#3776d4]">privacy policy</span>
                </p>
                <div className="mb-[20px] md:mb-[60px] mt-[8px]">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="terms"
                    className="bg-transparent"
                    required
                    value={state.agreement}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="font-[400] font-source text-[14px] leading-[17px] text-white ml-[12px]  "
                  >
                    I have read and agreed to Devcent’s{" "}
                    <span className="text-[#3776d4]">Terms and Conditions</span>{" "}
                    <span className="text-red-600">*</span>
                  </label>
                </div>
                <div className=" w-2/3 mx-auto"></div>
                {/* <FlutterPayment /> */}
                <button
                  type="submit"
                  className=" py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg bg-primaryPurple text-[16px] font-dmsans font-[700] md:text-[24px]"
                  disabled={!state.agreement || isLoadingCreate}
                >
                  {isLoadingCreate ? (
                    <ButtonLoader />
                  ) : !state.agreement ? (
                    "Fill the required field"
                  ) : (
                    "Proceed to payment"
                  )}
                </button>
                {errorCreate && (
                  <motion.div
                    whileInView={{
                      opacity: [0, 1],
                      scale: [0.8, 1],
                      y: [20, 0],
                    }}
                    transition={{ duration: 1, type: easeInOut }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col items-center my-4"
                  >
                    <p className="text-red-500 my-4 text-[18px]">
                      {errorCreate}
                    </p>
                    {errorCreate?.toLowerCase() ===
                    "please login to continue" ? (
                      <Link
                        href={`/signin?redirect=/courses/${courseName}/enrol`}
                        className="text-white underline"
                      >
                        Log in
                      </Link>
                    ) : null}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enrol;
