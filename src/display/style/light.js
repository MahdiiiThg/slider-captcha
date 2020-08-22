const lightTheme = `@font-face {
  font-family: "Roboto";
  src: url("../../../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../../../fonts/roboto/Roboto-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto-Regular";
  src: url("../../../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../../../fonts/roboto/Roboto-Regular.woff") format("woff");
}
.scaptcha-icon-dark {
  display: none;
}

.scaptcha-anchor-container {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #f8f8f8;
  width: 100%;
  height: 50px;
  padding: 13px;
  max-width: 400px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.scaptcha-anchor-checkbox {
  display: inline-block;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 24px;
  width: 24px;
  padding-left: 3.5px;
  background-color: #fff;
}

.scaptcha-anchor-checkbox-default:hover {
  cursor: pointer;
  border: 2px solid rgba(0, 0, 0, 0.35);
}

.scaptcha-anchor-label {
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  display: inline-block;
  color: #424242;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: 4px;
  margin-left: 13px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: default;
}

.scaptcha-card-background {
  width: 250px;
  height: 150px;
}

.scaptcha-card-loading {
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 250px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.scaptcha-card-container {
  position: absolute;
  padding: 15px 15px 0px 15px;
  min-width: 280px;
  min-height: 216px;
  background-color: #f1f1f1;
  box-shadow: 0px -1px 0px -2px rgba(0, 0, 0, 0.2), 0px 2px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 9px 0px rgba(0, 0, 0, 0.15);
  margin-top: -260px;
}

@media only screen and (max-width: 400px) {
  .scaptcha-card-container {
    margin-left: -13px;
  }
}
.scaptcha-card-slider-puzzle {
  margin-left: 15px;
  margin-top: 15px;
  position: absolute;
  left: 5px;
  top: 0;
  height: 150px;
  width: 60px;
  cursor: pointer;
}

.scaptcha-card-slider-control {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scaptcha-card-slider-control-default {
  background-color: #fafafa;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-control-active,
.scaptcha-card-slider-control-success,
.scaptcha-card-slider-control-failure {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-control-active {
  background-color: #0889e4;
}

.scaptcha-card-slider-control-success {
  background-color: #35dd74;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-control-failure {
  background-color: #e40808;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-container {
  margin-top: 7px;
  position: relative;
  height: 44px;
  width: 250px;
}

.scaptcha-card-slider-track {
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 3px;
  left: 0;
  width: 250px;
  height: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;
}

.scaptcha-card-slider-mask {
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 3px;
  left: 0;
  width: 0;
  height: 24px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.scaptcha-card-slider-track-default,
.scaptcha-card-slider-track-active {
  background-color: #3caeff;
}

.scaptcha-card-slider-track-success {
  background-color: #83f788;
}

.scaptcha-card-slider-track-failure {
  background-color: #ff3c3c;
}

.scaptcha-card-slider-label {
  color: #716e6e;
  padding-left: 20px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
}

.scaptcha-hidden {
  background: none;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: fixed;
}
`; export default lightTheme;