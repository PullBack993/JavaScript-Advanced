window.addEventListener('load', solve);

function solve() {
    let songsColectionArea = document.querySelector("#all-hits > div")
    let saveSongsArea = document.querySelector("#saved-hits > div")
    let likes = document.querySelector("#total-likes > div > p")


    let genre = document.getElementById('genre')
    let songName = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')

    let totalLikes = 0

    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', addSong)

    function addSong(e){
        e.preventDefault()

        if (!genre.value || !songName.value || !author.value || !date.value){return}

        let mainDiv = document.createElement('div')
        mainDiv.classList.add("hits-info")
        
        let img = document.createElement('img')
        img.src = "./static/img/img.png"

        let popHeat = document.createElement('h2')
        popHeat.textContent = `Genre: ${genre.value}`
        let nameHeat = document.createElement('h2')
        nameHeat.textContent = `Name: ${songName.value}`
        let nameAuthor = document.createElement('h2')
        nameAuthor.textContent = `Author: ${author.value}`
        let h3 = document.createElement('h3')
        h3.textContent = `Date: ${date.value}`

        let saveBtn = document.createElement('button')
        saveBtn.classList.add('save-btn')
        saveBtn.textContent = `Save song`
        saveBtn.addEventListener('click', saveSong)

        let likeBtn = document.createElement('button')
        likeBtn.classList.add('like-btn')
        likeBtn.textContent = `Like song`
        likeBtn.addEventListener('click', likeSong)

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteSong)

        mainDiv.appendChild(img)
        mainDiv.appendChild(popHeat)
        mainDiv.appendChild(nameHeat)
        mainDiv.appendChild(nameAuthor)
        mainDiv.appendChild(h3)
        mainDiv.appendChild(saveBtn)
        mainDiv.appendChild(likeBtn)
        mainDiv.appendChild(deleteBtn)

        songsColectionArea.appendChild(mainDiv)

        genre.value = ''
        songName.value = '' 
        author.value = '' 
        date.value = ''

        function saveSong(e){
            let currentArea = e.currentTarget.parentElement
            saveSongsArea.appendChild(currentArea)
            e.currentTarget.nextElementSibling.remove()
            e.currentTarget.remove()
            
        }

        function likeSong(e){
            totalLikes += 1
            likes.textContent = `Total Likes: ${totalLikes}`
            e.currentTarget.disabled = true


        }

        function deleteSong(e){
            if (totalLikes !== 0){
                totalLikes -= 1
                likes.textContent = `Total Likes: ${totalLikes}`
            }else{
                likes.textContent = `Total Likes: 0`
            }
            
            e.currentTarget.parentElement.remove()

        }
    }

}

'<p>TotalLikes1</p><imgsrc="./static/img/like-btn.jpg"alt="image-like">'
'<p>TotalLikes:1</p><imgsrc="./static/img/like-btn.jpg"alt="image-like">'