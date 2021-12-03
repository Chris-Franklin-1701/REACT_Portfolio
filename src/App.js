
import './styles/App.css'
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const styles = {
    bodyStyle: {
        background: '#ffffff'
    }
}
function App() {
    const [page, setPage] = useState('AboutMe');

    return (
        <div>
            <Header setPage={setPage} />
            <div style={styles.bodyStyle}>
                <Main page={page} />
            </div>
            <Footer/>
        </div>
    )
}

export default App;