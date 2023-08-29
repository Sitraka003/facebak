import './home.css';
import React from 'react';
import { Header } from '../../main/header.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NewPost } from '../post/new-post.jsx';
import { PostList } from '../post/1-post-list.jsx';
import { Main } from '../../main/main.jsx';
import { NavBar } from '../../main/nav-bar.jsx';
import { Profil } from '../profil/profil.jsx';

export function Home() {
    return (
        <>
            <Header />
            <Main>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<PostList />} />
                        <Route path="newPost" element={<NewPost/>} />
                        <Route path="profil" element={<Profil/>} />
                        <Route path="*"  element={<div className="center"> <h1>PAGE NOT FOUND ! </h1> </div>} />
                    </Route>
                </Routes>
            </Main>
        </>
    );
}