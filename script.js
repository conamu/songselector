let term = '';

const updateTerm = () => {
    term = document.getElementById('searchInput').value;

    if(!term || term==''){
    alert('please enter a search Term.')
    } else { 

    const url = `https://itunes.apple.com/search?term=${term}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
        const artists = data.results;

        return artists.map(result => {
            const outerdiv = document.createElement('div');
            const img = document.createElement('img');
            const div = document.createElement('div');
            const artist = document.createElement('h5');
            const song = document.createElement('p');
            const audio = document.createElement('audio');
            const audioSource = document.createElement('source');
            const songcontainer = document.getElementById('songs');
            const column = document.createElement('div');
            const row = document.createElement('div');

            artist.innerHTML = result.artistName;
            artist.setAttribute('class', 'card-title');
            song.innerHTML = result.trackName;
            song.setAttribute('class', 'card-text');
            img.src = result.artworkUrl100;
            img.setAttribute('class', 'card-img-top img-thumbnail');
            audioSource.src = result.previewUrl;
            audio.setAttribute('controls', '');
            outerdiv.setAttribute('class', 'card');
            div.setAttribute('class', 'card-title');
            column.setAttribute('class', 'col-12 my-2');
            row.setAttribute('class', 'row');

            div.appendChild(artist);
            div.appendChild(song);
            div.appendChild(audio);
            audio.appendChild(audioSource);
            outerdiv.appendChild(img);
            outerdiv.appendChild(div);
            column.appendChild(outerdiv);
            
            row.appendChild(column);
            songcontainer.appendChild(row);
            
        })
        
    })
    .catch(error => console.log(error));

    }
}

search = document.getElementById('searchbtn');
search.addEventListener('click', updateTerm);