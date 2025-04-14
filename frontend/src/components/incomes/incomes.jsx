import  React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalcontext";
import Form from "../form/incomeform";
import Item from "../incomeitem/item";

export default function Incomes(){
    const {addIncome,incomes,getIncome,deleteIncome, totalIncome} =useGlobalContext();
    
    useEffect(() => {
        getIncome();
    }, [])
    return(
        <IncomesStyled>
            <InnerLayout>
                <h1> Incomes </h1>
                <h2 className="total-income">
                    Total income : <span>
                        {totalIncome()}
                    </span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form/>
                    </div>
                    <div className="incomes">
                    {incomes.map((income) => {
                    const {
                        _id,
                        title,
                        amount,
                        date,
                        category,
                        description,
                        } = income;  // Correcting this to refer to the individual item

                            return <Item
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type="income"
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}

                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
            
        </IncomesStyled>
    )
    
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: auto;
    h1{
        text-align: center;
        margin-bottom: 1rem;
    }
    .total-income{
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
    .income-content {
        display: flex;
        gap: 2rem;
        .incomes {
            flex: 1;
            max-height: 520px; 
            overflow-y: auto;
            padding-right: 10px;
        }
    }
`;
