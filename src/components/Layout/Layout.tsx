import React, {Component} from "react";
import styles from "./Layout.module.scss";

interface propTypes {
  children: any,
}

class Layout extends Component<propTypes> {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;