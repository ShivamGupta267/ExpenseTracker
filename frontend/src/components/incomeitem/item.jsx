import React from 'react'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons'
import styled from 'styled-components'
import Button from '../button/button'
import { dateFormat } from '../../utils/dateFormat'



export const Item = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {

    const incomeCategoryIcon = () => {
        switch(category) {
            case 'salary': 
            return money;
            case 'freelancing': 
            return freelance;
            case 'investments': 
            return users;
            case 'stocks':
            return stocks;
            case 'bitcoin': 
            return bitcoin;
            case 'bank': 
            return card;
            case 'youtube': 
            return yt;
            case 'other': 
            return piggy;
            default:
            return '';
        }
    }

    const expenseCatgoryIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            deleteItem(id);
        }
    };
  

  return (
    <ItemStyled indicator={indicatorColor}>
        <div className="icon">
            {type === 'expense' ? expenseCatgoryIcon(): incomeCategoryIcon()}
        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{dollar} <span>{amount}</span></p>
                    <p>{calender} <span>{dateFormat()}</span> </p>
                    <p>
                        {comment} <span>{description}</span>
                        
                    </p>
                </div>
                <div className="btn-container">
                 <Button 
                     
                     
                     icon={trash}
                     btnPadding={`.6rem`}
                     btnRadius={`50%`}
                     bg={`var(--primary-color)`}
                     color={`#ffffff`}
                     onClick={handleDelete}
                     >
                     
                 </Button>               
                    

                </div>
            </div>
        </div>
    </ItemStyled>
  )
}

const ItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width:80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${(props) => props.indicator};
            }
        }
         .inner-content{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .text{
                    display: flex;
                    align-items: center;
                    gap: 1.4rem;
                    color: var(--primary-color);
                    opacity: .8;
                    
                }

         }   
        
    }
`

export default Item;