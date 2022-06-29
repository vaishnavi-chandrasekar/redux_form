import React, { useState } from "react";
import "./ModalContent.css";
import pic from "../images/income.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, logout, selectUser } from "../features/userSlice";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalContent() {
  const [amount, setAmount] = useState();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addIncome({
        IncomeAmount: amount,
      })
    );
  };
  const notify = () => toast.dark("Your Expense has been recorded");
  const formik = useFormik({
    initialValues: {
      type: "",
      expenses: 0,
      description: "",
    },
    onSubmit: async (values) => {
      try {
        await fetch("http:localhost:5000/userpost", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="Modal">
        <h1>Add Expense</h1>
        <form onSubmit={formik.handleSubmit}>
          <select
            defaultValue={"DEFAULT"}
            name="types"
            onChange={formik.handleChange}
            value={formik.values.value}
            required 
          >
            <option Value="DEFAULT" disabled>
              Category
            </option>
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Food
            </option>
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Groceries
            </option>
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Clothes
            </option>
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Movie
            </option>{" "}
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Vegetables
            </option>{" "}
            <option
              name="types"
              onChange={formik.handleChange}
              value={formik.values.value}
            >
              Others
            </option>
          </select>
          <br />
          <input
            type="number"
            placeholder="Expense in INR"
            name="expenses"
            onChange={formik.handleChange}
            value={formik.values.expenses}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Description"
            className="Description"
            style={{
              height: "5%",
              width: "13.4%",
              position: "absolute",
              margin: 0,
              marginTop: "0.8%",
            }}
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></input>
          <br />

          <button type="submit" onClick={notify}>
            Add
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default ModalContent;
