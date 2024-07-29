import axios from 'axios';

export const CreateUser = (name: string, email: string , password: string, callback: (error: any, response: any) => void) => {
    const baseUrl = process.env.API_Base_URL || 'https://nodenewapi.vercel.app/';

    axios.post(`${baseUrl}api/signup`, {
        name: name,
        email: email,
        password
    }, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            callback(null, response.data);
        })
        .catch(error => {
            let errorMessage;

            // Check the status code and set an appropriate error message
            switch (error.response?.status) {
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
                    errorMessage = `An error occurred: ${error.response?.status} ${error.response?.statusText}`;
            }

            // Pass the error message and any additional data back through the callback
            callback(errorMessage, null);
        });
};
