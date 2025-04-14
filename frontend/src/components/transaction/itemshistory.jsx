import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalcontext'
import { useEffect } from 'react'

const ItemsHistory = () => {
  
  
  const {transactionHistory} = useGlobalContext()
  const [...historyItems] = transactionHistory();
  console.log(historyItems);

  return (
    <HistoryStyled>
        {historyItems.map((items) => {
            const {_id , title, amount, type } = items;
            return (
                <div key={_id} className="history-items">
                    <p style={{
                      color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}> {title} </p>
                    <p style={{
                      color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}>
                        {
                          type === 'expense' ? `-${amount}` : `+${amount}`
                        }
                    </p>
                </div>
            )
        })}
    </HistoryStyled>
  )
}
const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  h2{
    text-align: center;
  }
  .history-items{
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;


  }
    
`
export default ItemsHistory