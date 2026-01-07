import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import {HiMail} from "react-icons/hi";
const ContactForm = () => {
    return <section className={styles.container}>

        <div className={styles.Contact_form}>
            <div className={styles.top_btn}>
                 <Button text="Via Support Chat" icon={<MdMessage fontSize="24px"/>}/>
             <Button text="Via Call" icon={<HiMail  fontsize="24px" />}/>
            </div>
           
        </div>
        <div className={styles.Contact_image}>
            
        </div>
        
    </section>
};

export default ContactForm;