import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;