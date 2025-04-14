import React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalcontext";
import ItemsHistory from "./itemshistory";

export default function Transaction(){
    const {getIncome , getExpense} = useGlobalContext()
    useEffect(() => {
        getIncome();
        getExpense();
    }, []);
    return(
        <TransactionStyle>
            <InnerLayout>
                <h1> Transactions </h1>
                <div className="history-container">
                    <ItemsHistory/>
                </div>
            </InnerLayout>
            
        </TransactionStyle>
    )
    
    
}

const TransactionStyle = styled.div`
    h1 {
        text-align: center;
        margin-bottom: 1rem;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .history-container {
        max-height: 600px;
        overflow-y: auto;
        padding-right: 0.5rem; /* Avoids content cutoff */
    }
`