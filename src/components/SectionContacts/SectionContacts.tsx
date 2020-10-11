import React, {Component} from "react";
import styles from "./SectionContacts.module.scss";

interface propTypes {
  title: string,
  children: any,
}

class SectionContacts extends Component<propTypes> {
  render() {
    const {title, children} = this.props;
    return (
      <section>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default SectionContacts;