import React from "react";
import styled from 'styled-components';
import avatar from "../../image/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";

export default function Navigation({ active, setActive }) {
    return (
        <NavStyled>
            <div className="user-icon">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>

            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>

            <ul className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </ul>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 380px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .user-icon {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.05);
        }

        .text {
            h2, p {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.5);
            padding-left: 1rem;
            position: relative;
            &:hover {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
    }

    .active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
    }

    .bottom-nav {
        li {
            display: flex;
            align-items: center;
            font-weight: 500;
            cursor: pointer;
            color: rgba(34, 34, 96, 0.8);
            transition: all 0.4s ease-in-out;

            &:hover {
                color: rgba(34, 34, 96, 1);
            }
        }
    }
`;
