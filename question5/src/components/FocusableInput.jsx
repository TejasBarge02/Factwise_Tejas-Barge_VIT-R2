import React from "react";
import TextInput from './TextInput'

class FocusableInput extends React.Component {
  ref = React.createRef();

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) { }

  componentDidMount() { }
}

export default FocusableInput;


