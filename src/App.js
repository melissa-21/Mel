import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="App">
            <h1>hhh</h1>
            <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>
                Open
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default App;