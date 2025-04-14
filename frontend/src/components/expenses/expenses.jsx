import  React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalcontext";
import ExpenseForm from "../form/expenseForm";
import Item from "../incomeitem/item";

export default function Expenses(){
    const {addExpense,expenses,getExpense,deleteExpense, totalExpense} =useGlobalContext();
        
        useEffect(() => {
            getExpense();
        }, [])
    return(
        <ExpensesStyled>
            <InnerLayout>
                <h1> Expenses </h1>
                <h2 className="total-expense">
                    Total Expense : <span>
                        {totalExpense()}
                    </span>
                </h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm/>
                    </div>
                    <div className="expenses">
                    {expenses.map((expense) => {
                    const {
                        _id,
                        title,
                        amount,
                        date,
                        category,
                        description,
                        } = expense;  // Correcting this to refer to the individual item

                            return <Item
                                type="expense"
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}

                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
            
        </ExpensesStyled>
    )
   
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
    h1{
        text-align: center;
        margin-bottom: 1rem;
    }
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .expense-content {
        display: flex;
        gap: 2rem;
        .expenses {
            flex: 1;
            max-height: 520px;   /* Allows for scrolling if needed */
            overflow-y: auto;
            padding-right: 10px;
        }
    }
`;