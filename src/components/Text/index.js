import React, { PureComponent } from 'react';
import styles from './styles.scss';

export default class Text extends PureComponent {
  render() {
    return <span className={styles.text}>{this.props.children}</span>;
  }
}
