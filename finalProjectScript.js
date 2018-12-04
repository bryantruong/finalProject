var rootUrl = "http://comp426.cs.unc.edu:3001/"

$(document).ready(() => {
  //Login
  $.ajax({
    url: 'http://comp426.cs.unc.edu:3001/sessions',
    type: 'POST',
    data: {
      "user": {
        "username": "bryanAndNick",
        "password": "finalProject"
      }
    },
    xhrFields: { withCredentials: true },
    success: (response) => {
      console.log("Successful login");
    },
    error: () => {
      alert("Error, no response recieved!");
    }
  });

  //Functionality to get all flights
  $('#viewFlightsButton').on('click', () => {
    $.ajax(rootUrl + 'flights',
    {
      type: 'GET',
      xhrFields: {withCredentials: true},
      success: (response) => {
        console.log("Got a response");
        console.log(response);
        //TODO: Display the flights
      },
      error: () => {
        alert('error');
      }
    });
  });



})
