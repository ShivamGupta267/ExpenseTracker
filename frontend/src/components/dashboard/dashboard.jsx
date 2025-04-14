import React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import ChartComponent from "../ChartComponent/chart";
import {dollar} from '../../utils/Icons'
import { useGlobalContext } from "../../context/globalcontext";
export default function Dashboard(){
    const {totalExpense, totalIncome, totalBalance , getIncome, getExpense} = useGlobalContext()
    useEffect(() => {
            getIncome();
            getExpense();
        }, [])
    return(
        <DashboardStyled>
            <InnerLayout>
              <h1> Dashboard </h1>
              <div className="stats-container">
                <div className="chart-container">
                    
                    <ChartComponent/>
                </div>
                <div className="amount-container">
                        <div className="amount-items total-income">
                            <h2 className="">
                                Total Income
                            </h2>
                            <p> {dollar} {totalIncome()} </p>
                        </div>
                        <div className="amount-items total-expense">
                            <h2 className="">Total Expenses</h2>
                            <p> {dollar} {totalExpense()} </p>
                        </div>
                        <div className="amount-items total-balance">
                            <h2 className="">
                                Total Balance
                            </h2>
                            <p> {dollar} {totalBalance()}</p>
                        </div>
                    </div>
              </div>
            </InnerLayout>
            
        </DashboardStyled>
    )
    
    
}

const DashboardStyled = styled.div`
    h1{
        text-align: center;
        margin-bottom: 1rem;
    }
    display: flex;
    overflow: auto;
    height: 100%;
    .stats-container{
        display: flex;
        height: 95%;
        flex-direction: column;
        width: 100%;
        align-items:center;
    }
        .chart-container{
            height: 80%;
            width: 90%;
        }
      .amount-container{
        display: flex;
        width: 100%;
        justify-content: space-around;
        height: 20%;
        align-items: center;
        
        .amount-items{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(252, 246, 249, 1);
            border: 2px solid rgba(255, 255, 255, 1);
            border-radius: 20px; 
            width: 20%;
            height: 70%;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            }
            
      }

`;