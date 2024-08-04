import axios from 'axios';

export const createPost = (
  userid: string,
  blogtitle: string,
  blogdescription: string,
  blgIMG_64: string,
  cateGory: string,
  formattedDateTime: string,
  callback: (error: any, response: any) => void
) => {
  const baseUrl = 'http://localhost:4000/'; // Using HTTP for local development

  axios.post(`${baseUrl}api/blogpost`, {
    userid,
    blogtitle,
    blogdescription,
    blgIMG_64,
    cateGory,
    publishdate: formattedDateTime,
  }, { headers: { 'Content-Type': 'application/json' } })
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      let errorMessage;

      // Check if error response is available
      if (error.response) {
        switch (error.response.status) {
          case 400:
            errorMessage = 'Bad Request: The server could not understand the request.';
            break;
          case 401:
            errorMessage = 'Unauthorized: Access is denied due to invalid credentials.';
            break;
          case 403:
            errorMessage = 'Forbidden: You do not have the necessary permissions to access this resource.';
            break;
          case 404:
            errorMessage = 'Not Found: The requested resource could not be found.';
            break;
          case 500:
            errorMessage = 'Internal Server Error: An error occurred on the server.';
            break;
          case 503:
            errorMessage = 'Service Unavailable: The server is currently unable to handle the request.';
            break;
          default:
            errorMessage = `An error occurred: ${error.response.status} ${error.response.statusText}`;
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response received from the server. Please check your network connection.';
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = `Error in setting up the request: ${error.message}`;
      }

      // Pass the error message and any additional data back through the callback
      callback(errorMessage, null);
    });
};
