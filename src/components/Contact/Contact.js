import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";


class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  handleDeleteContact = () => {
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