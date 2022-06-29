import React, { useState, useEffect } from "react";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  addIncome,
  logout,
  selectUser,
} from "../features/userSlice";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import ModalContent from "./ModalContent";
import Modal from "react-modal";
import ExpenseModal from "./ExpenseModal";
import Expense from "./Expense";

function Logout() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [Amount, setAmount] = useState([]);
  const [data, setData] = useState([0]);
  const [reduxAmount,setReduxAmount] =useState([])

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const setModalOpenToTrue = () => {
    setModalOpen(true);
  };

  const setModalOpenToFalse = () => {
    setModalOpen(false);
  };

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  const Income = (e) => {
    e.preventDefault();
    dispatch(addIncome());
    setReduxAmount(addIncome);
  };
  // const Expense = (e) => {
  //   e.preventDefault();
  //   dispatch(addExpense());
  // };
  useEffect(() => {
    async function fetchData() {
      try {
        let items = await fetch("http://localhost:5000/userall");
        let userdata = await items.json();
        setAmount(userdata);
        setData(userdata);
        console.log(userdata);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  let income = Amount.reduce((acc, ele, index) => acc + ele.income, 0);
  console.log(income);

  let expense = data.reduce((acc, element, index) => acc + element.expenses, 0);
  console.log(expense);
  return (
    <>
      <h1>Money Manager</h1>
      <div className="Logout">
        <button type="submit" className="Backbtn">
          Back
        </button>
        <button
          type="submit"
          className="Incomebtn"
          onClick={setModalIsOpenToTrue}
        >
          Add Income
        </button>

        <Modal isOpen={modalIsOpen} className="modalstyle">
          <button onClick={refreshPage} className="cancelbtn">
            x
          </button>

          <ModalContent />
          <button onClick={refreshPage} className="cancel">
            Cancel
          </button>
        </Modal>
        <button
          type="submit"
          className="Expensebtn"
          // onClick={setModalOpenToTrue}
        >
          Add Expense
        </button>
        <Modal isOpen={modalOpen} className="modal_style">
          <button onClick={setModalOpenToFalse} className="cancel_btn">
            x
          </button>

          <ExpenseModal />
          <button onClick={setModalOpenToFalse} className="Expensecancel">
            Cancel
          </button>
        </Modal>

        <button
          type="submit"
          className="Logoutbtn"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
      <div className="header">
        <h1>
          Welcome <span className="Name">{user.name}</span>
        </h1>
      </div>
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th>Total Income</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Amount.map((ele, index) => (
              <Tr key={index}>
                <Td> {ele.income} </Td>
                <Td> {ele.type}</Td>
              </Tr>
            ))}
            <Thead>
              <Tr className="total">
                <Th>
                  TotalIncome :{" "}
                  <span>
                    {Amount.reduce((acc, ele) => acc + ele.income, 0)}
                  </span>
                </Th>
                {/* <Th>
                  Total Expense :{" "}
                  <span>
                    {Amount.reduce((acc, ele) => acc + ele.expense, 0)}
                  </span>
                </Th> */}
              </Tr>
            </Thead>
          </Tbody>
        </Table>
      </div>
      
  
    </>
  );
}

export default Logout;
