import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);}}>
                        х
                    </button>
                </div>
                <div className="title">
                    <h1>Hi</h1>
                </div>
                <div className="body">
                    <p>Ты меня любишь? Если да, то дыши. Если нет, прочитай библию на японском языке.</p>
                </div>
                <div className="footer">
                    <button onClick={() => {setOpenModal(false);}} id="cancelBtn">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;