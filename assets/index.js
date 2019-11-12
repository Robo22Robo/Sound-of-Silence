

const renderTracks = (tracks)=> {
    document.querySelector("tbody").innerHTML = "";
    tracks.forEach((track,i) => {
   
      const trackEl = document.createElement("tr");
 
        trackEl.classList.add(track.wrapperType);
  
  
        trackEl.innerHTML = `
           <th scope="row">${i + 1}</th>
        <td><img src="${track.artworkUrl60}"/></td>
        <td>${track.trackName}</td>
        <td>${track.artistName}</td>
        <td>${track.releaseDate}</td>
        <td>${track.trackPrice} ${track.currency}</td>
      </tr>
        `
  
        document.querySelector("tbody").appendChild(trackEl);
    })
  }
  
  renderTracks(music);
  
  