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
                <button onclick="clickSeat()" id="A1">
                                    <p class="flex gap-2">
                                        <img src="Images/email 1.png" alt="">

                                    </p>
                                </button>
            </div>
        </div>
        
        `;

        cardContainer.appendChild(postDiv)

        // console.log(postDiv)
    })

}



function clickSeat(){
    const btn = document.getElementById('A1')
    // console.log(backgroundChange)

    btn.addEventListener('click', function(event){
        
        const name = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[3].innerText


        const view2 = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].innerText

        const appendContainer = document.getElementById('append-container')




        const div = document.createElement('div')
        div.classList= `
        flex justify-between bg-white p-5 mt-4 mb-4 rounded-lg font-semibold `
        const p1 = document.createElement('p')
        const p3 = document.createElement('p')


        p1.innerText = name;
        p3.innerText = view2;

        div.appendChild(p1)
        div.appendChild(p3)

        appendContainer.appendChild(div)



        const cartCount = getConvertedValue('current-count')

        document.getElementById('current-count').innerText = cartCount + 1
        // console.log(div)
    })
}



function getConvertedValue(id){
    const price =document.getElementById(id).innerText
    const convertPrice = parseInt(price)
    return convertPrice;
    }




discussSection()