const latestSection = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    const cards = data
    // console.log(cards)
    displayLatestCard(cards)
}

const displayLatestCard = posts => {
    const latestContainer = document.getElementById('latest-container')

    posts.forEach(post => {
        // console.log(post)
        const latestDiv = document.createElement('div')
        latestDiv.classList = `card bg-base-100 shadow-xl p-8`
        latestDiv.innerHTML = `
        <figure><img src="${post.cover_image}" alt="Shoes" /></figure>

        <div class="card-body text-[#12132D99]">
        <h2 class="flex gap-2"> 
            <span><img src="images/calender.png" alt=""></span>
            ${post.author?.posted_date || 'No Publish Date'
            }</h2>

        <p class="text-[#12132D] text-[18px] font-extrabold">${post.title}</p>

        <p class="text-[#12132D99]">${post.description}</p>

        <h2 class="flex gap-3 items-center"> <span><img class="w-[50px] rounded-full" src="${post.profile_image}" alt=""></span>

            <div>
                <p class="font-bold text-[#12132D] ">${post.author.name}</p>
                <p class="text-[#12132D99]">${post.author?.designation || 'Unknown'
                }</p>
            </div>
        </h2>
        
        </div>
        
        `;
        latestContainer.appendChild(latestDiv)
    })
}



    // handle search
    const handleSearch = () => {
        const searchField = document.getElementById('input-field')
        const searchText = searchField.value
        console.log(searchText)

    }



latestSection()








