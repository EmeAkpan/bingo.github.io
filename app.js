

// Includes the free cell, giving us all 25 board positions.
let all = document.querySelectorAll('.bingo-board > div');
let squares = document.querySelectorAll('.bingo-bio')
let imageScreen = document.querySelector('.bingo-image-screen')
let bingoImage = document.querySelector('.bingo-image-image')
let bingoImageText = document.querySelector('.bingo-image-text')
let listButton = document.querySelector('.list')
let listScreen = document.querySelector('.listopher')
let listClose = document.querySelector('.list-close')

       const galImages = document.querySelectorAll('.gallery-screen-image')
       const gallery = document.querySelector('.gallery-screen-images') 
       const galName = document.querySelector('.galley-screen-name') 
       const photoCount = document.querySelector('.photo-count') 
       const galButtons = document.querySelector('.gallery') 
       const galScreen = document.querySelector('.gallery-screen') 
       const galClose = document.querySelector('.gallery-close') 
     




let bingoImageClose = document.querySelector('.bingo-image-close-button')

       let inputt = document.querySelectorAll('.input')
        let imagePreview = document.querySelector('.bingo-take-image');

  let fullArr = []
  let selectedIndex = null

 const characters = [
  { name: "Batman", tag: "easy", image: "batman", userimageblob: "" },
  { name: "Barbie", tag: "easy", image: "barbie", userimageblob: "" },
  { name: "Mickey Mouse", tag: "easy", image: "mickey", userimageblob: "" },
  { name: "Witch", tag: "easy", image: "witch", userimageblob: "" },
  { name: "Vampire", tag: "easy", image: "vampire", userimageblob: "" },
  { name: "Ghost", tag: "easy", image: "ghost", userimageblob: "" },
  { name: "Zombie", tag: "easy", image: "zombie", userimageblob: "" },
  { name: "Pirate", tag: "easy", image: "pirate", userimageblob: "" },
  { name: "Cat", tag: "easy", image: "cat", userimageblob: "" },
  { name: "Skeleton", tag: "easy", image: "skeleton", userimageblob: "" },
  { name: "Spider-Man", tag: "easy", image: "spider", userimageblob: "" },
  { name: "Superman", tag: "easy", image: "superman", userimageblob: "" },
  { name: "Wonder Woman", tag: "easy", image: "wonder", userimageblob: "" },
  { name: "Princess", tag: "easy", image: "princess", userimageblob: "" },
  { name: "Fairy", tag: "easy", image: "fairy", userimageblob: "" },
  { name: "Angel", tag: "easy", image: "angel", userimageblob: "" },
  { name: "Devil", tag: "easy", image: "devil", userimageblob: "" },
  { name: "Cowboy", tag: "easy", image: "cowboy", userimageblob: "" },
  { name: "Police Officer", tag: "easy", image: "police", userimageblob: "" },
  { name: "Ninja", tag: "easy", image: "ninja", userimageblob: "" },
  { name: "Clown", tag: "easy", image: "clown", userimageblob: "" },
  { name: "Mummy", tag: "easy", image: "mummy", userimageblob: "" },
  { name: "Werewolf", tag: "easy", image: "werewolf", userimageblob: "" },
  { name: "Mermaid", tag: "easy", image: "mermaid", userimageblob: "" },
  { name: "Unicorn", tag: "easy", image: "unicorn", userimageblob: "" },
  { name: "Michael Myers", tag: "easy", image: "myers", userimageblob: "" },
  { name: "Frankenstein's Monster", tag: "easy", image: "franky", userimageblob: "" },
  { name: "Dracula", tag: "easy", image: "dracula", userimageblob: "" },
  { name: "Cheerleader", tag: "easy", image: "cheerleader", userimageblob: "" },
  { name: "Firefighter", tag: "easy", image: "firefighter", userimageblob: "" },
  { name: "Supergirl", tag: "easy", image: "supergirl", userimageblob: "" },
  { name: "Astronaut", tag: "easy", image: "astronaut", userimageblob: "" },
  { name: "Dinosaur", tag: "easy", image: "dinosaur", userimageblob: "" },
  { name: "Bunny Rabbit", tag: "easy", image: "bunny", userimageblob: "" },
  { name: "Cheetah", tag: "easy", image: "cheetah", userimageblob: "" },
  { name: "Hippie", tag: "easy", image: "hippie", userimageblob: "" },
  { name: "Sailor", tag: "easy", image: "sailor", userimageblob: "" },
  { name: "Queen of Hearts", tag: "easy", image: "queen", userimageblob: "" },
  { name: "King", tag: "easy", image: "king", userimageblob: "" },
  { name: "Little Red Riding Hood", tag: "easy", image: "little", userimageblob: "" },
  { name: "Elsa", tag: "easy", image: "elsa", userimageblob: "" },
  { name: "Wednesday Addams", tag: "easy", image: "wednesday", userimageblob: "" },
  { name: "Harry Potter", tag: "easy", image: "harry", userimageblob: "" },
  { name: "Wolverine", tag: "easy", image: "wolverine", userimageblob: "" },
  { name: "Shrek", tag: "easy", image: "shrek", userimageblob: "" },
  { name: "Mario", tag: "easy", image: "mario", userimageblob: "" },
  { name: "Luigi", tag: "easy", image: "luigi", userimageblob: "" },
  { name: "Pikachu", tag: "easy", image: "pikachu", userimageblob: "" },
  { name: "SpongeBob SquarePants", tag: "easy", image: "spongebob", userimageblob: "" },
  { name: "Minion", tag: "easy", image: "minion", userimageblob: "" },
  { name: "Jedi", tag: "easy", image: "jedi", userimageblob: "" },
  { name: "Darth Vader", tag: "easy", image: "darth", userimageblob: "" },
  { name: "Stormtrooper", tag: "easy", image: "stormtrooper", userimageblob: "" },
  { name: "Cinderella", tag: "easy", image: "cinderella", userimageblob: "" },
  { name: "Snow White", tag: "easy", image: "snow", userimageblob: "" },
  { name: "Rapunzel", tag: "easy", image: "rapunzel", userimageblob: "" },
  { name: "Tinker Bell", tag: "easy", image: "tinker", userimageblob: "" },
  { name: "Nun", tag: "easy", image: "nun", userimageblob: "" },
  { name: "Waldo", tag: "easy", image: "waldo", userimageblob: "" },
  { name: "Fred Jones", tag: "easy", image: "fred", userimageblob: "" },
  { name: "Ghostbusters", tag: "easy", image: "ghostbusters", userimageblob: "" },
  { name: "Jack Skellington", tag: "easy", image: "jack", userimageblob: "" },
  { name: "Greek Costume", tag: "easy", image: "greek", userimageblob: "" },
  { name: "Hello Kitty", tag: "easy", image: "hello", userimageblob: "" },
  { name: "Sonic the Hedgehog", tag: "easy", image: "sonic", userimageblob: "" },
  { name: "Princess Peach", tag: "easy", image: "peach", userimageblob: "" },
  { name: "Cookie Monster", tag: "easy", image: "cookie", userimageblob: "" },
  { name: "Transformers", tag: "easy", image: "transformers", userimageblob: "" },
  { name: "Caveman", tag: "easy", image: "caveman", userimageblob: "" },
  { name: "Mad Hatter", tag: "easy", image: "mad", userimageblob: "" },
  { name: "Poison Ivy", tag: "easy", image: "poison", userimageblob: "" },
  { name: "Catwoman", tag: "easy", image: "catwoman", userimageblob: "" },
  { name: "Harley Quinn", tag: "easy", image: "harley", userimageblob: "" },
  { name: "Joker", tag: "easy", image: "joker", userimageblob: "" },
  { name: "Deadpool", tag: "easy", image: "deadpool", userimageblob: "" },
  { name: "Nicki (Obsession)", tag: "medium", image: "nicki", userimageblob: "" },
  { name: "Patrick Bateman", tag: "medium", image: "patrick", userimageblob: "" },
  { name: "Frank-N-Furter", tag: "medium", image: "frank", userimageblob: "" },
  { name: "Knight", tag: "medium", image: "knight", userimageblob: "" },
  { name: "Buzz Lightyear", tag: "medium", image: "buzz", userimageblob: "" },
  { name: "Tiana", tag: "medium", image: "tiana", userimageblob: "" },
  { name: "Jessie (Toy Story)", tag: "medium", image: "jessie", userimageblob: "" },
  { name: "Regina George", tag: "medium", image: "regina", userimageblob: "" },
  { name: "Cyclops", tag: "medium", image: "cyclops", userimageblob: "" },
  { name: "Iron-man", tag: "medium", image: "iron", userimageblob: "" },
  { name: "Ryu (Street Fighter)", tag: "medium", image: "ryu", userimageblob: "" },
  { name: "Thor", tag: "medium", image: "thor", userimageblob: "" },
  { name: "Tyler Durden", tag: "medium", image: "tyler", userimageblob: "" },
  { name: "Michael Jackson", tag: "medium", image: "michael", userimageblob: "" },
  { name: "Green Lantern", tag: "medium", image: "green", userimageblob: "" },
  { name: "Beetlejuice", tag: "medium", image: "beetlejuice", userimageblob: "" },
  { name: "Edward Scissorhands", tag: "medium", image: "edward", userimageblob: "" },
  { name: "Kill Bill", tag: "medium", image: "kill", userimageblob: "" },
  { name: "Marty McFly", tag: "medium", image: "marty", userimageblob: "" },
  { name: "Doc Brown", tag: "medium", image: "doc", userimageblob: "" },
  { name: "Indiana Jones", tag: "medium", image: "indiana", userimageblob: "" },
  { name: "Lara Croft", tag: "medium", image: "lara", userimageblob: "" },
  { name: "Daphne Blake", tag: "medium", image: "daphne", userimageblob: "" },
  { name: "Velma Dinkley", tag: "medium", image: "velma", userimageblob: "" },
  { name: "Rabbit (Alice in Wonderland)", tag: "medium", image: "rabbit", userimageblob: "" },
  { name: "Raven from Teen Titans", tag: "medium", image: "raven", userimageblob: "" },
  { name: "Starfire", tag: "medium", image: "starfire", userimageblob: "" },
  { name: "Alice in Wonderland", tag: "medium", image: "alice", userimageblob: "" },
  { name: "Sailor Moon", tag: "medium", image: "moon", userimageblob: "" },
  { name: "Prince Charming", tag: "medium", image: "prince", userimageblob: "" },
  { name: "Princess Leia", tag: "medium", image: "leia", userimageblob: "" },
  { name: "Luke Skywalker", tag: "medium", image: "luke", userimageblob: "" },
  { name: "Cleopatra", tag: "medium", image: "cleopatra", userimageblob: "" },
  { name: "Glinda", tag: "medium", image: "glinda", userimageblob: "" },
  { name: "Dorothy", tag: "medium", image: "dorothy", userimageblob: "" },
  { name: "Jessica Rabbit", tag: "medium", image: "jessica", userimageblob: "" },
  { name: "Men In Black (Guy in Suit)", tag: "medium", image: "mib", userimageblob: "" },
  { name: "Bob Ross", tag: "medium", image: "bob", userimageblob: "" },
  { name: "Minnie Mouse", tag: "medium", image: "minnie", userimageblob: "" },
  { name: "Woody", tag: "medium", image: "woody", userimageblob: "" },
  { name: "Austin Powers", tag: "medium", image: "austin", userimageblob: "" },
  { name: "Evil Queen", tag: "medium", image: "evil", userimageblob: "" },
  { name: "Power Ranger", tag: "medium", image: "power", userimageblob: "" },
  { name: "Ghostface", tag: "medium", image: "ghostface", userimageblob: "" },
  { name: "Pennywise", tag: "medium", image: "pennywise", userimageblob: "" },
  { name: "Coraline Jones", tag: "medium", image: "coraline", userimageblob: "" },
  { name: "Doctor Doom", tag: "medium", image: "doctor", userimageblob: "" },
  { name: "Kim Possible", tag: "medium", image: "kim", userimageblob: "" },
  { name: "Shego", tag: "medium", image: "shego", userimageblob: "" },
  { name: "Danny Phantom", tag: "medium", image: "danny", userimageblob: "" },
  { name: "Carmen Sandiego", tag: "medium", image: "carmen", userimageblob: "" },
  { name: "Mystique", tag: "medium", image: "mystique", userimageblob: "" },
  { name: "Rogue from X-Men", tag: "medium", image: "rogue", userimageblob: "" },
  { name: "Spider-Gwen", tag: "medium", image: "gwen", userimageblob: "" },
  { name: "Miles Morales", tag: "medium", image: "miles", userimageblob: "" },
  { name: "TMNT", tag: "medium", image: "tmnt", userimageblob: "" },
  { name: "Rockstar", tag: "medium", image: "rockstar", userimageblob: "" },
  { name: "Elphaba", tag: "medium", image: "elphaba", userimageblob: "" },
  { name: "Prisoner", tag: "medium", image: "prisoner", userimageblob: "" },
  { name: "Cruella de Vil", tag: "medium", image: "cruella", userimageblob: "" },
  { name: "Maleficent", tag: "medium", image: "maleficent", userimageblob: "" },
  { name: "Ursula", tag: "medium", image: "ursula", userimageblob: "" },
  { name: "Ariel", tag: "medium", image: "ariel", userimageblob: "" },
  { name: "Jasmine from Aladdin", tag: "medium", image: "jasmine", userimageblob: "" },
  { name: "Aladdin", tag: "medium", image: "aladdin", userimageblob: "" },
  { name: "A Genie", tag: "medium", image: "genie", userimageblob: "" },
  { name: "Goku", tag: "medium", image: "goku", userimageblob: "" },
  { name: "Morticia Addams", tag: "medium", image: "morticia", userimageblob: "" },
  { name: "Cher", tag: "medium", image: "cher", userimageblob: "" },
  { name: "Stitch", tag: "medium", image: "stitch", userimageblob: "" },
  { name: "The Incredibles", tag: "medium", image: "incredibles", userimageblob: "" },
  { name: "Beastboy", tag: "medium", image: "beastboy", userimageblob: "" },
  { name: "Bumblebee", tag: "medium", image: "bumblebee", userimageblob: "" },
  { name: "Jason Voorhees", tag: "medium", image: "jason", userimageblob: "" },
  { name: "Freddy Krueger", tag: "medium", image: "freddy", userimageblob: "" }
];
  

  let bingo =JSON.parse(localStorage.getItem('characters'))
       
  
if(localStorage.getItem('characters')){

    console.log("yes it exist osetkay")}
    else{
          console.log("no it no exist osetkay") 
  let bingo = []
            for (let i = 0; i < 24; i++) {
  const j = Math.floor(Math.random() * (characters.length - i));
  bingo.push(characters[j])
characters[j]=characters[characters.length-1-i]
}
      localStorage.setItem('characters', JSON.stringify(bingo))
location.reload()

    }
  

 

  console.log('Here is your array:', bingo);
  console.log('First item:', bingo[0]); // Outputs: Apple
fullArr = bingo

for (let i = 0; i < all.length; i++) {

    // Center square (index 12) is the free space.
    if (i === 12) continue;

    // Convert board position to character-array position.
    let characterIndex = i < 12 ? i : i - 1;

    all[i].textContent = bingo[characterIndex].name;

    squares[characterIndex].style.backgroundImage =
        `url(../costume/${bingo[characterIndex].image}.jpg)`;

    all[i].addEventListener('click', () => {

        imageScreen.style.display = 'flex';

        bingoImage.style.backgroundImage =
            `url(../costume/${bingo[characterIndex].image}.jpg)`;

        selectedIndex = characterIndex;

        bingoImageText.textContent = bingo[characterIndex].name;

        if (bingo[characterIndex].userimageblob === '') {

            imagePreview.style.backgroundImage = `url('camera-image.svg')`;
            imagePreview.style.backgroundSize = '80px';

        } else {

            imagePreview.style.backgroundImage =
                `url('${bingo[characterIndex].userimageblob}')`;

            imagePreview.style.backgroundSize = 'contain';
        }

    });

} 

listButton.addEventListener('click', () =>{

  listScreen.style.display= 'flex';
  document.body.style.backgroundColor = 'black'

}
)

listClose.addEventListener('click', () =>{

  listScreen.style.display= 'none';
location.reload()
}
)

galButtons.addEventListener('click', () =>{

  galScreen.style.display= 'flex';

}
)



galClose.addEventListener('click', () =>{

  galScreen.style.display= 'none';
}
)


bingoImageClose.addEventListener('click', () => {
        imageScreen.style.display = 'none'; 
            imagePreview.style.backgroundImage = `url('camera-image.svg')`;
            imagePreview.style.backgroundSize = '80px';

      });


    // First upload input: attach the selected image to the costume currently open.
    if (inputt[0]) {
      inputt[0].addEventListener('change', async (event) => {
        const imageFile = event.target.files[0];
        if (!imageFile || selectedIndex === null) return;

        try {
          const imageData = await get64(imageFile);
          bingo[selectedIndex].userimageblob = imageData;
          localStorage.setItem('characters', JSON.stringify(bingo));
          updateBingoSquares();
          imagePreview.style.backgroundImage = `url('${imageData}')`;
          imagePreview.style.backgroundSize = 'contain';
          updateGallery();
          updatePhotoCount();
        } catch (error) {
          console.error('Could not read the selected image:', error);
        }
      });
    }


    function get64(imageFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(imageFile);
      });
    }

    function updateGallery() {
      if (!gallery) return;

      gallery.innerHTML = '';
      const originalGalImage = document.querySelector('.gallery-image-container');
      if (!originalGalImage) return;

      bingo.forEach((character) => {
        if (!character.userimageblob) return;

        const clone = originalGalImage.cloneNode(true);
        const cloneImg = clone.querySelector('img');
        const cloneName = clone.querySelector('.galley-screen-name');
        clone.style.display = "flex"; 
        if (cloneImg) cloneImg.src = character.userimageblob;
        if (cloneName) cloneName.textContent = character.name;

        gallery.appendChild(clone);
      });
    }

    function updatePhotoCount() {
      if (!photoCount) return;

      const validImageCount = bingo.filter((item) =>
        item.userimageblob !== null &&
        item.userimageblob !== undefined &&
        item.userimageblob !== ''
      ).length;

      photoCount.textContent = `${validImageCount}/24`;
    }

    updateGallery();
    updatePhotoCount();

    const validImageCount = bingo.filter((item) =>
        item.userimageblob !== null &&
        item.userimageblob !== undefined &&
        item.userimageblob !== ''
      ).length;
 
  function galButtonToggle(){
if(validImageCount>0){
galButtons.style.boxShadow = 'inset 5px 5px 10px rgba(252, 252, 252, 0.308), inset -5px -5px 10px rgba(0, 0, 0, 0.3)'
  galButtons.style.backgroundColor = 'black'  
}
  }
function updateBingoSquares() {

    for (let i = 0; i < all.length; i++) {

        if (i === 12) continue;

        let characterIndex = i < 12 ? i : i - 1;

        if (bingo[characterIndex].userimageblob !== '') {

            all[i].style.backgroundColor = 'black';
            all[i].style.color = 'white';

        } else {

            all[i].style.backgroundColor = '';
            all[i].style.color = '';

        }

    }

}

updateBingoSquares()
  galButtonToggle()



// All possible winning combinations.
// Index 12 is the free space.

// 5 horizontal
const bingoPatterns = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // 5 vertical
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    // 2 diagonal
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
];

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Check whether a board position has been completed.
function isCompleted(boardIndex) {

    // Free space automatically counts.
    if (boardIndex === 12) return true;

    // Convert board index into character index.
    let characterIndex = boardIndex < 12
        ? boardIndex
        : boardIndex - 1;

    return bingo[characterIndex].userimageblob !== '';
}


// Find a winning combination.
function checkBingo() {

    return bingoPatterns.find(pattern =>
        pattern.every(index => isCompleted(index))
    );

}


// Prevent multiple animations at once.
let bingoAnimating = false;


// Animate the winning combination.
async function animateBingo(winningBingo) {
    if (bingoAnimating) return;
    bingoAnimating = true;

    const bingoBoard = document.querySelector('.bingo-board');

    // Reset previous animation states
    bingoBoard.classList.remove('board-win', 'shake-board');
    bingoBoard.style.backgroundColor = 'white';

    all.forEach(square => square.classList.remove('square-pop'));

    document.querySelector('.bingo-win-message')?.remove();
    document.querySelector('.no-bingo-message')?.remove();

    await wait(50);

    // Raise each winning square one at a time
    for (let i = 0; i < winningBingo.length; i++) {
        all[winningBingo[i]].classList.add('square-pop');
        await wait(180);
    }

    await wait(300);

    // Raise and smash the board
    bingoBoard.classList.add('board-win');

    await wait(700);

    // Show winning message
    let message = document.createElement('div');
    message.className = 'bingo-win-message';
    message.textContent = 'BINGO SOLVED!!';
    message.style.color = "orange !important"
    bingoBoard.appendChild(message);

    await wait(2000);

    // Remove animation and restore board
    message.remove();

    bingoBoard.classList.remove('board-win');
    bingoBoard.style.backgroundColor = '';

    all.forEach(square => {
        square.classList.remove('square-pop');
    });

    bingoAnimating = false;
}


// Handle unsuccessful bingo.
async function noBingo() {

    if (bingoAnimating) return;

    const bingoBoard = document.querySelector('.bingo-board');

    bingoBoard.classList.remove('shake-board');

    document.querySelector('.no-bingo-message')?.remove();

    await wait(30);

    bingoBoard.classList.add('shake-board');

    let message = document.createElement('div');

    message.className = 'no-bingo-message';
    message.textContent = 'NO BINGO YET!';

    bingoBoard.appendChild(message);

    await wait(1500);

    message.remove();

    bingoBoard.classList.remove('shake-board');

}


// BINGO button click.
const bingoButton = document.querySelector('.bingo');

bingoButton.addEventListener('click', () => {

    if (bingoAnimating) return;

    const winningBingo = checkBingo();

    if (winningBingo) {

        console.log('Winning combination:', winningBingo);

        animateBingo(winningBingo);

    } else {

        console.log('No bingo yet!');

        noBingo();

    }

});

const resetButton = document.querySelector('.reload');

resetButton.addEventListener('click', () => {
    const confirmReset = confirm(
        'Are you sure you want to reset the game? All saved progress will be lost.'
    );

    if (confirmReset) {
        localStorage.clear();
        location.reload();
    }
});