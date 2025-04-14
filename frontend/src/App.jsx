import React, { useMemo, useState } from "react";
import styled from "styled-components"; 
import "./App.css";
import { MainLayout, InnerLayout } from "./styles/layouts";
import bg from "./image/bg.png";
import Orb from "./components/orb/orb.jsx";
import Navigation from "./components/Navigation/navigation.jsx";
import Expenses from "./components/expenses/expenses.jsx";
import Incomes from "./components/incomes/incomes.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import { useGlobalContext } from "./context/globalcontext.jsx";
import Transaction from "./components/transaction/transaction.jsx";

function App() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Orb/>
  }, [])
  
  const global = useGlobalContext()
  
  const displayData = () => {
    switch(active){
      case 1: 
      return <Dashboard/>
      case 2: 
      return <Transaction/>
      case 4:
      return <Expenses/>
      case 3:
      return <Incomes/>
      default:
      return <Dashboard/>
    }
  }

  return (
    <>
      <AppStyled bg={bg} className="App">
      {orbMemo}
        <MainLayout className="main-layout">
          <Navigation active={active} setActive={setActive}/>
          <main>
          {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
    width:0;
    }

  }
`;

export default App;
