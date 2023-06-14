// This is a functional component named 'Articles'
// It accepts an object 'articles' as a parameter
function Articles({ articles }) {

  return (
    // This is a container div with a class named 'card w-50 mx-auto'
    <div className="card w-50 mx-auto">
      {/* This is a table */}
      <table>
        {/* This is a table heading */}
        <thead>
          <tr>
            <th>Title</th> {/* Table column for article title */}
            <th>Upvotes</th> {/* Table column for number of upvotes */}
            <th>Date</th> {/* Table column for article date */}
          </tr>
        </thead>
        {/* This is a table body containing rows */}
        <tbody>
          {/* Loop through the 'articles' array and render a row for each item */}
          {articles.map((item) => (
            <tr key={item.id}> {/* Use unique 'key' attribute for each row */}
              <td>{item.title}</td> {/* Render the title of the article in a cell */}
              <td>{item.upvotes}</td> {/* Render the number of upvotes in a cell */}
              <td>{item.date}</td> {/* Render the date of the article in a cell */}
            </tr>
          ))}
        </tbody>
      </table> {/* Close the table element */}
    </div> /* Close the container div */
  );
}

export default Articles; // Export the 'Articles' component by default