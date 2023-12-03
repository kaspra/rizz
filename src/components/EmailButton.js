import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styles from "./modules/EmailButton.module.css"


export default function Header(props) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function handleClick(score) {

    }

    return (
        <div>
        <button className={styles.button74} role="button" onClick={onOpenModal}>{props.text}</button>
        <Modal open={open} onClose={onCloseModal} center>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        </div>
    )
}
