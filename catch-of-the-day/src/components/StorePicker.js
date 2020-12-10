import React, { Fragment } from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        {/** 
            Fragment allows for the wrapping of sibling elements, because 
            the return can only return one high level element.
            This is the same reason as to why you need to put the comment
            in here rather than above, as it will only return one element. 
        */}
        <form className="store-selector">
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
