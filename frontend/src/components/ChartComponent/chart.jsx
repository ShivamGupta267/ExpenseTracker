import React from 'react';
import {
    Chart as ChartJs, // Rename this correctly to avoid confusion
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { dateFormat } from '../../utils/dateFormat';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalcontext';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// Renaming the component to avoid the name clash
const ChartComponent = () => {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((income) => dateFormat(income.date)),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                tension: .3,
            },
            {
                label: 'Expense',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                tension: .3,
            },
        ],
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
};

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    overflow: hidden;
    width: 100%;
    canvas{
     width: 900px;
    }
`;


export default ChartComponent;