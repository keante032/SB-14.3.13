console.log("Let's get this party started!");

$(function () {
  $("#searchForm").on("submit", async function (e) {
    e.preventDefault();
    let query = $("#searchText").val();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
      },
    });
    let rand50 = Math.floor(Math.random() * 50);
    let newGif = $("<img>", {
      src: response.data.data[rand50].images.downsized.url,
    });
    $("#gifContainer").append(newGif);
  });
});
