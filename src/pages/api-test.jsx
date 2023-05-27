import React from "react";
import axios from "axios";

const ApiTest = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const { data } = await axios.post("/api/orders/create", {
    //     name: e.target["name"].value,
    //     phone: e.target["phone"].value,
    //   });
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const { data } = await axios.get("/api/orders/afrr3557753ttgeg/order");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApiTest;
