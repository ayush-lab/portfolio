import React, { Component } from "react";
import styles from "./backToTop.module.css";
import ArrowUp from "../../Assets/Images/up-arrow.webp";
// import { Modal } from "react-bootstrap";

class BackToTop extends Component {


  state = {
    arrowVisibility: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      this.toggleVisibility();
    });
  }


  componentWillUnmount() {
    document.removeEventListener('scroll', () => {
      this.toggleVisibility();
    });
}

  toggleVisibility = () => {
    // console.log(window.pageYOffset);

    if (window.innerWidth >= 1100) {
      if (window.pageYOffset > 200) {
        if (window.pageYOffset < 1800) {
          this.setState({
            arrowVisibility: true,
          });
        } else {
          this.setState({
            arrowVisibility: true,
          });
        }
      } else {
        this.setState({
          arrowVisibility: false,
        });
      }
    } else if (window.innerWidth < 1100 && window.innerWidth >= 581) {
      if (window.pageYOffset > 200) {
        if (window.pageYOffset < 2700) {
          this.setState({
            arrowVisibility: true,
          });
        } else {
          this.setState({
            arrowVisibility: true,
          });
        }
      } else {
        this.setState({
          arrowVisibility: false,
        });
      }
    } else if (window.innerWidth < 581) {
      if (window.pageYOffset > 200) {
        if (window.pageYOffset < 2400) {
          this.setState({
            arrowVisibility: true,
          });
        } else {
          this.setState({
            arrowVisibility: true,
          });
        }
      } else {
        this.setState({
          arrowVisibility: false,
        });
      }
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <div className={styles.scrollToTop}>

          {this.state.arrowVisibility ? (
            <div
              onClick={this.scrollToTop}
              className={`${styles.ArrowUp} ${styles.fadeAnimate}`}
            >
              <img className={styles.arrowUp} src={ArrowUp} alt="Top"/>
              {/* <span style={{color:'white'}}>TOP</span> */}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default BackToTop;