const discussSection = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const cards = data.posts
    // console.log(cards)
    displayCards(cards)
}

const displayCards = posts => {
    const cardContainer = document.getElementById('card-container')

    posts.forEach(post=>{
        // console.log(post)
        const postDiv = document.createElement('div')
        postDiv.classList= `card flex flex-col lg:flex-row card-side bg-base-100 shadow-xl p-4 border border-gray-300 mt-4 mb-4`

        postDiv.innerHTML = `
        <figure class=""><img class=" w-[200px] p-8" src="${post.image}"
        alt="Movie" /></figure>
        <div class="card-body">

            <div class="flex flex-col lg:flex-row space-y-3">
                <p class="text-lg font-medium "># ${post.category}</p>
                <p class="text-lg font-medium ">
                    Author: ${post.author.name}
            </div>

            <h2 class="card-title font-bold">${post.title}</h2>
            <p class="text-[#131318]">${post.description}</p>
            <br>

            <hr>

            <div class="flex mt-4">
                <p class="flex gap-2">
                    <img src="Images/comment.png" alt="">
                    <span class="font-medium text-[#13131880]">${post.comment_count}</span>
                </p>
                <p class="flex gap-2">
                    <img src="Images/eye.png" alt="">
                    <span class="font-medium text-[#13131880]">${post.view_count}</span>
                </p>
                <p class="flex gap-2">
                    <img src="Images/time.png" alt="">
                    <span class="font-medium text-[#13131880]">${post.posted_time
                    } min</span>
                </p>
                <p class="flex gap-2">
                    <img src="Images/email 1.png" alt="">
                                    
                </p>
            </div>
        </div>
        
        `;

        cardContainer.appendChild(postDiv)

        // console.log(postDiv)
    })

}




discussSection()