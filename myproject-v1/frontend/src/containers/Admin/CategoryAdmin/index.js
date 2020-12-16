import React from 'react';

const CategoryAdmin = () => {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Category</h1>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Edit</button>{' '}
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Edit</button>{' '}
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Edit</button>{' '}
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Edit</button>{' '}
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdmin;
