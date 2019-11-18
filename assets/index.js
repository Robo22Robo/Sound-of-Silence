const formatDate = (date) => {
  return new Date(date).toISOString().substring(0,10);
}




const renderTracks = (tracks)=> 
{

  document.querySelector("tbody").innerHTML = "";
  tracks.forEach((track,i) => 
  {
 
    const trackEl = document.createElement("tr");




      trackEl.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td><img src="${track.artworkUrl60}"/></td>
      <td>${track.trackName}</td>
      <td>${track.artistName}</td>
      <td>${formatDate(track.releaseDate)}</td>
      <td>${track.trackPrice} ${track.currency}</td>
    </tr>
      `

      document.querySelector("tbody").appendChild(trackEl);
  })

}


document.querySelector("#search").addEventListener("keyup",(e)=> {
  const keyword = e.target.value.toLocaleLowerCase();

  const filteredMusic = music.filter(
      track=>track.artistName.toLocaleLowerCase().includes(keyword) 
      || track.trackName.toLocaleLowerCase().includes(keyword))

  if(filteredMusic.length===0){
      document.querySelector("tbody").innerHTML = "No tracks were found";
      return;
  }

  renderTracks(filteredMusic);
})


renderTracks(music);

