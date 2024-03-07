// Serach Bar animations

const searchBarContainerEl = document.querySelector(".search-bar-container");
const magniEl = document.querySelector(".magni")

magniEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

// Serach Bar animations


function searchEmoji() {
  let input = document.getElementById("emoji-search").value;
  displayResult(input);
}

function displayResult(searchQuery = ""){

  let filteredResult = emojiList.filter((e) => {
      if(e.description.indexOf(searchQuery) != -1){
          return true;
      }
      if(e.tags.some(elem => elem.startsWith(searchQuery))){
          return true;
      }
      if(e.aliases.some(elem => elem.startsWith(searchQuery))){
          return true;
      }
  })

  let parent = document.getElementById("emoji_result");

  parent.innerHTML = "";

  filteredResult.forEach((e)=>{
      let newRow = document.createElement("div");
      let newEmoji = document.createElement("div");
      let newAliases = document.createElement("div");
      let newDescription = document.createElement("div");

      newEmoji.innerText = e.emoji;
      newAliases.innerText = e.aliases;
      newDescription.innerText = e.description;

      newRow.classList.add("rows");
      newAliases.classList.add("newAliases")
      newDescription.classList.add("description");

      newRow.appendChild(newEmoji);
      newRow.appendChild(newAliases);
      newRow.appendChild(newDescription);

      parent.appendChild(newRow);
  })
}

document.getElementById("emoji-search").addEventListener("keyup" , searchEmoji );

window.onload = () => displayResult();