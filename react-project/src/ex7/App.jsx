import { useState } from "react";

export default function App() {
  const [deleteBtnClicked, updateDeleteBtnClicked] = useState(false);

  // function handleDeleteBtnClick() {
  //   updateDeleteBtnClicked(true);
  // }

  // function handleProceedBtnClick() {
  //   updateDeleteBtnClicked(false);
  // }
  function handleClick() {
      updateDeleteBtnClicked(!deleteBtnClicked);
  }

  return (
    <div>
      {deleteBtnClicked && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleClick}>Proceed</button>
        </div>
      )}
      {!deleteBtnClicked && <button onClick={handleClick}>Delete</button>}
    </div>
  );
}
