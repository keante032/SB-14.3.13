console.log("Let's get this party started!");

$(function () {
  $("#searchForm").on("submit", async function (e) {
    e.preventDefault();
    let query = $("#searchText").val();
    let response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    console.log("got", response);
  });
});
