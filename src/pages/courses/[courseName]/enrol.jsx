import Nav from "components/common/Nav";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";
import FlutterPayment from "components/common/FlutterPayment";
import axios from "axios";

const Enrol = () => {
  const [clicked, setClicked] = useState(false);
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let total = 0;
  const router = useRouter();
  const { courseName } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/courses/${courseName}/course`);
        setCourse(response.data.course);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setIsLoading(false);
      }
    };

    fetchData();
  }, [courseName]);

  // const course = JSON.parse(decodeURIComponent(data));
  const amount = course?.discountFee;
  const half = amount / 2;
  const [state, setState] = useState({
    // outright: '',
    paymentPlan: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    houseNumber: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    info: "",
    agreement: false,
  });

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  let isFormFilled = false;
  if (
    // state.outright &&
    state.paymentPlan &&
    state.firstName &&
    state.lastName &&
    state.email &&
    state.country &&
    state.street &&
    state.houseNumber &&
    state.city &&
    state.state &&
    state.postalCode &&
    state.phoneNumber &&
    state.agreement === true
  ) {
    isFormFilled = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    const createInfo = async () => {
      try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch(`/api/orders/create`, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({
            courseId: course.courseId,
            paymentPlan: state.paymentPlan,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            country: state.country,
            state: state.state,
            city: state.city,
            street: state.street,
            houseNumber: state.houseNumber,
            postalCode: state.postalCode,
            phoneNumber: state.phoneNumber,
            info: state.info,
          }),
        });
        let data = await response.json();

        console.log(data);
        if (response.ok) {
          setState({});
          Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
          );
          setClicked(false);
          router.push({
            pathname: `/courses/${courseName}/payment`,
            query: { order_number: data.orderId },
          });
        } else {
          console.error("Error making POST request:", response.status);
          // handleFormErrorAlert(data.error);
          setClicked(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    createInfo();
  };

  state.paymentPlan == "part-payment"
    ? (total = course?.discountFee / 2)
    : (total = course?.discountFee);
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
                  checked={state.paymentPlan === "outright-payment"}
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
                  checked={state.paymentPlan === "part-payment"}
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
              <div className="md:flex gap-x-8 justify-between  mb-[24px]">
                <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
                  <label
                    htmlFor="street"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    Street Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                    placeholder="street"
                    id="street"
                    name="street"
                    onChange={handleChange}
                    value={state.street}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="houseNum"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    House Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                    placeholder="1234"
                    id="houseNum"
                    name="houseNumber"
                    onChange={handleChange}
                    value={state.houseNumber}
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
                    htmlFor="state"
                    className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                  >
                    State <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                    placeholder="Ogun"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    value={state.state}
                    required
                  />
                </div>
              </div>
              {/* multiple */}
              <div className="flex flex-col  mb-[24px]">
                <label
                  htmlFor="postal"
                  className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
                >
                  Postal code <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                  min={6}
                  placeholder="123456"
                  id="postal"
                  name="postalCode"
                  onChange={handleChange}
                  value={state.postalCode}
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
              <p className="font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]">
                Additional Information
              </p>
              <textarea
                name="info"
                id="info"
                rows="10"
                className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg w-full"
                onChange={handleChange}
                value={state.info}
              ></textarea>
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
                  // onClick={handleSubmit}
                  // disabled={!isFormFilled && !state.agreement}
                >
                  {!isFormFilled && !state.agreement
                    ? "Fill the required field"
                    : "Proceed to payment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enrol;
