import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Container from "react-bootstrap/Container";
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Купи и Отстань</NavLink>
                {user.isAuth ?
                    <Nav className='ml-auto' style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button 
                            variant={'outline-light'} 
                            onClick={() => history.push(LOGIN_ROUTE)}
                            className="ml-4"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className='mr-auto' style={{color: 'red'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar
