// Importing the useState hook and the Articles component.
import { useState } from "react";
import Articles from "./article";

// App functional component that takes in the articles prop.
function App({ articles }) {
  // Declaring a state variable called dataToShow and its setter function using the useState hook, and initializing it to "none".
  const [dataToShow, setDataToShow] = useState("none");

  // Sorting the articles array by upvotes and storing it in the mostUpVoted constant.
  const mostUpVoted = articles.sort((a, b) => b.upvotes - a.upvotes);

  // Sorting the articles array by date and storing it in the mostRecent constant.
  const mostRescent = articles.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

  // handleMostUpvoted function that sets the value of dataToShow to "mostUpVoted" when called.
  const handleMostUpvoted = () => {
    setDataToShow("mostUpVoted");
  };

  // handleMostRecent function that sets the value of dataToShow to "mostRescent" when called.
  const handleMostRecent = () => {
    setDataToShow("mostRescent");
  };

  // Return statement for the App component.
  return (
    <div className="App">
      {/* Navigation buttons */}
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={handleMostUpvoted}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={handleMostRecent}
        >
          Most Recent
        </button>

      {/* Passing articles to the Articles component with a sorted version of it depending on the value of dataToShow */}
      <Articles
        articles={
          dataToShow === "mostUpVoted"
            ? mostUpVoted
            : dataToShow === "mostRescent"
            ? mostRescent
            : articles
        }
      />
    </div>
  );
}

// Exporting the App component as the default export of this module.
export default App;