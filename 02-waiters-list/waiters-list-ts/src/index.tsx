import React from 'react';
import ReactDOM from 'react-dom/client';
import {WaitersApp} from "./features/waiters";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Home} from "./features/Home";
import {About} from "./features/About";
import {NotFound} from "./features/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const isActiveClass = ({ isActive }: any) => isActive ? "active" : "";

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <nav className='navigation'>
                <NavLink to="/" className={isActiveClass} end>Home</NavLink>{' | '}
                <NavLink to="/waiters" className={isActiveClass}>Waiters</NavLink>{' | '}
                <NavLink to="/about" className={isActiveClass}>About</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/waiters/*" element={<WaitersApp />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
