import React, { useContext, useState } from "react";
import axios from 'axios'

const BASE_URL = "http://localhost:5000/transaction/";
export const GlobalContext = React.createContext()

export const Globalprovider = 
    ({children}) => {

        
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [err, setErr] = useState([null])

    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}income/`, income).catch((err) => {
            setErr(err.response.data.message)
        })
        getIncome()
    }

    const getIncome = async() => {
        const response = await axios.get(
        `${BASE_URL}income/`).catch((err) => {
            setErr(err.response.data.message)
        })
        setIncomes(response.data)
    }
    
    const deleteIncome = async(id) => {
        const response = await axios.delete(
            `${BASE_URL}income/${id}`).catch((err) => {
                setErr(err.response.data.message)
            })
            getIncome()
    
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income)=> {
            totalIncome += income.amount;

        })
        return totalIncome;
    }
    const addExpense = async(expense) => {
        const response = await axios.post(`${BASE_URL}expense/`, expense).catch((err) => {
            setErr(err.response.data.message)
        })
        getExpense()
    }

    const getExpense = async() => {
        const response = await axios.get(
        `${BASE_URL}expense/`).catch((err) => {
            setErr(err.response.data.message)
        })
        setExpenses(response.data)
    }
    
    const deleteExpense = async(id) => {
        const response = await axios.delete(
            `${BASE_URL}expense/${id}`).catch((err) => {
                setErr(err.response.data.message)
            })
            getExpense()
    
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense)=> {
            totalExpense += expense.amount;

        })
        return totalExpense;
    }

    const totalBalance = () => {
        let totalBalance = totalIncome() - totalExpense();
        return totalBalance;
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history;
    };

        return(
            <GlobalContext.Provider value={{addIncome, totalBalance, getIncome, incomes , deleteIncome, totalIncome, addExpense, getExpense, deleteExpense , expenses, totalExpense, transactionHistory}}>
                {children}
            </GlobalContext.Provider>
        )
    }

  export const useGlobalContext = ()=> {
    return useContext(GlobalContext)
  }