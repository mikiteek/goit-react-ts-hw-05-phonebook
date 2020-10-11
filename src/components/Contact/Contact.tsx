import React, {Component} from "react";
import styles from "./Contact.module.scss";

interface propTypes {
  name: string,
  number: string,
  id: string,
  onClick: any,
}

class Contact extends Component<propTypes> {
  private handleDeleteContact = (): void => {
    const {onClick, id} = this.props;
    onClick(id);
  }

  render() {
    const {name, number} = this.props;
    return (
      <li className={styles.contactItem}>
        <p className={styles.contactInfo}>{name}: {number}</p>
        <button className={styles.btn} type="button" onClick={this.handleDeleteContact}>Delete</button>
      </li>
    );
  }
}

export default Contact;