import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;
function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Romantic Comedy',
        Title: 'Once I was Engaged',
        Year: 2021,
        Director: 'Maclain Nelson',
        Rating: 'PG',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="col-md-6 mx-auto">
        <h3>Joel Hilton's Movie Collection:</h3>
      </div>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
