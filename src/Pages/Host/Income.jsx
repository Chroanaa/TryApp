import React from "react";
import income from "../../assets/Income.png";
function Income() {
  const Transactions = [
    {
      name: "Transaction 1",
      date: "1/12/2021",
      amount: "$100",
    },
    {
      name: "Transaction 2",
      date: "10/11/2021",
      amount: "$100",
    },
    {
      name: "Transaction 3",
      date: "23/11/2021",
      amount: "$100",
    },
  ];
  return (
    <div className=" bg-main">
      <div className="ml-10">
        <div className="text-large font-bold">Income</div>
        <p>
          <span className="text-Gray underline font-bold"> last 30 days</span>
        </p>
        <div className="text-large font-bold mt-5">
          <span>$1,000</span>
        </div>
        <img src={income} alt="image for income" />
        <div>
          <span className=" font-bold text-medium">Your transactions(3)</span>
          <span className="text-secondary ml-72">
            last <span className="underline">30 Days</span>
          </span>
          <div className="flex flex-col gap-5 max-w-[80%] mt-5">
            {Transactions.map((transaction, index) => {
              return (
                <div key={index} className="flex justify-between bg-White p-5">
                  <span className="text-medium">{transaction.amount}</span>
                  <span className="text-medium">{transaction.date}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
