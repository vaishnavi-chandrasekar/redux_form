import React,{useState,useEffect} from "react";
import ExpenseModal from "./ExpenseModal";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";


function Expense() {
    const[data,setData] =useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        let items = await fetch("https://reduxback.herokuapp.com/userall");
        let userdata = await items.json();
        setData(userdata);
        console.log(userdata);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Total Expense</Th>
            <Th>Category</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((ele, index) => (
            <Tr key={index}>
              <Td> {ele.expenses} </Td>
              <Td> {ele.types}</Td>
            </Tr>
          ))}
          <Thead>
            <Tr className="total">
              <Th>
                TotalExpense :{" "}
                <span>{data.reduce((acc, ele) => acc + ele.expenses, 0)}</span>
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
    
  );
}

export default Expense;
