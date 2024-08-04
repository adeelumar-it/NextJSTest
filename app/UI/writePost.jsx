import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SendIcon from '@mui/icons-material/Send';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { createPost } from '../services/addBlogPost';
import Loader from './Loader'; // Import the Loader component

export default function Writepost({ onCancel }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [blogtitle, setblogtitle] = React.useState('');
  const [cateGory, setcateGory] = React.useState('');
  const [blogdescription, setblogdescription] = React.useState('');
  const [publishdate, setpublishdate] = React.useState('');
  const [blgIMG_64, setblgIMG_64] = React.useState('');
  const [content, setContent] = React.useState('');
  const [alignment, setAlignment] = React.useState('left');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const userInfo = window.localStorage.getItem("userinfo");
    if (userInfo) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'blogtitle') setblogtitle(value);
  };

  const handleContentChange = (event) => {
    setblogdescription(event.target.innerHTML);
  };

  const handlecategoryChange = (event) => {
    setcateGory(event.target.value);
  };

  const handleImageInsertion = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      let base64 = e.target.result;
      base64 = base64.split(',')[1];
      setblgIMG_64(base64);

      setContent((prevContent) => prevContent + `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%; display: block;" />`);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  const postNewData = () => {
    const userInfo = window.localStorage.getItem("userinfo");
    const parsedUserInfo = JSON.parse(userInfo);

    if (parsedUserInfo && parsedUserInfo._id) {
      setLoading(true);
      const userid = parsedUserInfo._id;
      const currentDate = new Date();
      const formattedDateTime = formatDateTime(currentDate);

      createPost(userid, blogtitle, blogdescription, blgIMG_64, cateGory, formattedDateTime, (error, response) => {
        setLoading(false);
        if (response) {
          setSuccess('Post created successfully!');
          setError('');
          // Optionally, redirect or clear form
          window.location.reload();
        } else {
          setError(error);
          setSuccess('');
        }
      });
    } else {
      setError('You must be logged in to post.');
      setSuccess('');
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Box sx={{ flexGrow: 1 }} className='ml-3 mt-3 '>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <div className='dark:text-white'>
                  <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 mb-2 rounded" onClick={onCancel}>
                    <CloseRoundedIcon /> Cancel
                  </button>
                  <div className='display:flex items:center'>
                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                      <TextField
                        fullWidth
                        label="Title"
                        id="fullWidth"
                        name="blogtitle"
                        onChange={handleChange}
                      />
                      <input
                        type="file"
                        id="imageInput"
                        style={{ display: "none" }}
                        onChange={handleImageInsertion}
                      />
                      <div className='mt-2'>
                        <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                        <select onChange={handlecategoryChange} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected disabled>Choose a category</option>
                          <option value="Tech">Tech</option>
                          <option value="Fashion">Fashion</option>
                          <option value="News">News</option>
                          <option value="Gaming">Gaming</option>
                        </select>
                      </div>
                      <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => document.getElementById('imageInput').click()}
                      >
                        Select Image
                      </button>
                      <div
                        className="border border-gray-300 rounded-lg p-4 mt-5 focus-within:border-blue-300"
                        style={{ maxWidth: "60%", minWidth: "85%", minHeight: "36vh" }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </Box>
                  </div>
                  <div className='mt-3 -mx-3 pl-4'>
                    <ToggleButtonGroup
                      value={alignment}
                      exclusive
                      onChange={handleAlignment}
                      aria-label="text alignment"
                    >
                      <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                      </ToggleButton>
                      <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                      </ToggleButton>
                      <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                      </ToggleButton>
                      <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                      </ToggleButton>
                      <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                      </ToggleButton>
                      <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                      </ToggleButton>
                      <ToggleButton value="color" aria-label="color" disabled>
                        <FormatColorFillIcon />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <div style={{ marginTop: "-20px" }}>
                    <div
                      className="border border-gray-300 rounded-lg p-4 mt-5 focus-within:border-blue-300"
                      contentEditable="true"
                      style={{ maxWidth: "60%", minWidth: "85%", minHeight: "36vh" }}
                      onInput={handleContentChange}
                      placeholder="Enter your text here..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && <div className="text-green-500 mb-4">{success}</div>}
                <Button
                  onClick={postNewData}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  disabled={loading}
                  startIcon={<SendIcon />}
                >
                  {loading ? 'Publishing...' : 'Publish'}
                </Button>
                <Button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded"
                  startIcon={<DraftsOutlinedIcon />}
                >
                  Draft
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
