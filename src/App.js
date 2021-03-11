// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  // fetch(
  //   "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/%7Bcountry%7D/GBP/en-GB/?query=Stockholm",
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "9da154b716msh63b249836851661p12258cjsn71a386811e08",
  //       "x-rapidapi-host":
  //         "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
  //     },
  //   }
  // )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  const options = {
    method: "GET",
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
    params: { query: "Stockholm" },
    headers: {
      "x-rapidapi-key": "9da154b716msh63b249836851661p12258cjsn71a386811e08",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div className="App"></div>;
}

export default App;
