import React , {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalcontext';
import Button from '../button/button';
import {plus} from '../../utils/Icons'

const ExpenseForm = () => {
    
    const {addExpense, getExpense} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description} = inputState;
    
    const handleInput = (name) => (e) => {
        const value = name === 'amount' ? parseFloat(e.target.value) || 0 : e.target.value;
        setInputState({ ...inputState, [name]: value });
    };
      

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        getExpense()
        setInputState({ title: '', amount: '', date: null, category: '', description: '' });
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className='input-control'>
            <input
             type="text"
             value={title}
             name={'title'}
             placeholder="Title"
             onChange={handleInput('title')}
              />
        </div>
        <div className='input-control'>
            <input
             type="number"
             value={amount}
             name={'amount'}
             placeholder="amount"
             onChange={handleInput('amount')}
              />
        </div>
        <div className='input-control'>
            <DatePicker
            id='date'
            placeholderText='Exter a Date'
            selected={date}
            dateFormat="dd//MM/yyyy"
            onChange={(date) => {
                setInputState({
                    ...inputState,
                    date: date
                })
            }}
            />
        </div>
        <div className="selects input-control">
            <select 
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput('category')}
            >
                  <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
             </select>
        </div>
        <div className='input-control'>
        <textarea
            value={description}
            cols={30}
            rows={3}
            name={'description'}
            placeholder="Description"
            onChange={handleInput('description')}
/>
        </div>
        <div className="submit-btn">
            <Button 
                type="submit" 
                name={'Add Expense'}
                icon={plus}
                btnPadding={`.8rem 1.6rem`}
                btnRadius={`30px`}
                bg={`var(--color-accent)`}
                color={`#ffffff`}
                
                >
                
            </Button>
        </div>

    </FormStyled>
  )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select {
    font-family: inherit;
    outline: none;
    font-size: inherit;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #ffffff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    }
    .input-control input {
        width: 100%;  
    }
        
        .selects{
            display: flex;
            justify-content: flex-end;
            select{
                color: rgba(34, 34, 96, 0.9);
                &:focus, &:active{
                    color: rgba(34, 34, 96, 1);
                }
            }
        }

        .submit-btn{
            button{
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
                &:hover{
                    background: var(--color-green) !important;
                }
            }
        }
    }
`

export default ExpenseForm;