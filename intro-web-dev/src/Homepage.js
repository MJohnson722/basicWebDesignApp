import React, { useState } from 'react';
import DummyPage from './pages/DummyPage';
import DefaultPage from './pages/contentElements/DefaultPage';
import HtmlPage from './pages/contentElements/HtmlPage';
import CssPage from './pages/contentElements/CssPage';
import JavascriptPage from './pages/contentElements/JavascriptPage';
import GitHubPage from './pages/contentElements/GitHubPage';
import ReactPage from './pages/contentElements/ReactPage';
import "./Homepage.css"


function Homepage() {
    const [allPages, setAllPages] = useState({
        home: {
            display: true,
            content: <DefaultPage />
        },
        htmlPage: {
            display: false,
            content: <HtmlPage />
        },
        cssPage: {
            display: false,
            content: <CssPage />
        },
        javascriptPage: {
            display: false,
            content: <JavascriptPage />
        },
        githubPage: {
            display: false,
            content: <GitHubPage />
        },
        reactPage: {
            display: false,
            content: <ReactPage />
        }
        });
    const [pages, setPage] = useState([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);
    
    return (
    <div className='homepage'>
        <div className="homepage__menu">
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="page" onClick={() => {setAllPages({home:{display: true, content: <DefaultPage />}, htmlPage: {display: false, content: <HtmlPage />}, cssPage: {display: false, content: <CssPage />}, javascriptPage: {display: false, content: <JavascriptPage />},githubPage: {display: false, content: <GitHubPage />}, reactPage: {display: false, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>Home</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => {setAllPages({home:{display: false, content: <DefaultPage />}, htmlPage: {display: true, content: <HtmlPage />}, cssPage: {display: false, content: <CssPage />}, javascriptPage: {display: false, content: <JavascriptPage />},githubPage: {display: false, content: <GitHubPage />}, reactPage: {display: false, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>HTML</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => {setAllPages({home:{display: false, content: <DefaultPage />}, htmlPage: {display: false, content: <HtmlPage />}, cssPage: {display: true, content: <CssPage />}, javascriptPage: {display: false, content: <JavascriptPage />},githubPage: {display: false, content: <GitHubPage />}, reactPage: {display: false, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>CSS</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => {setAllPages({home:{display: false, content: <DefaultPage />}, htmlPage: {display: false, content: <HtmlPage />}, cssPage: {display: false, content: <CssPage />}, javascriptPage: {display: true, content: <JavascriptPage />},githubPage: {display: false, content: <GitHubPage />}, reactPage: {display: false, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>Javascript</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => {setAllPages({home:{display: false, content: <DefaultPage />}, htmlPage: {display: false, content: <HtmlPage />}, cssPage: {display: false, content: <CssPage />}, javascriptPage: {display: false, content: <JavascriptPage />},githubPage: {display: true, content: <GitHubPage />}, reactPage: {display: false, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>GitHub</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => {setAllPages({home:{display: false, content: <DefaultPage />}, htmlPage: {display: false, content: <HtmlPage />}, cssPage: {display: false, content: <CssPage />}, javascriptPage: {display: false, content: <JavascriptPage />},githubPage: {display: false, content: <GitHubPage />}, reactPage: {display: true, content: <ReactPage />}}); setPage([allPages.home, allPages.htmlPage, allPages.cssPage, allPages.javascriptPage, allPages.githubPage, allPages.reactPage]);}}>React</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="homepage__content">
            <div className="pageContent">
                {pages.map(page => (
                    <DummyPage
                        display={page.display}
                        content={page.content}
                    />
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Homepage