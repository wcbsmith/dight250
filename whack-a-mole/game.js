/******************************
VARIABLES
******************************/
	// Setup a placeholder variable for the last hole a mole came up in
	let lastHole = null;

	// Set the initial value for the question: Is the game time up?
	let timeUp = false;

	// Set the initial score
	let score = 0;

	// Set a value for length of a game in milliseconds
	const gameLength = 10000;

	// Set a value for the minimum amount of time a mole can be up in milliseconds
	const minUpTime = 333;

	// Set a value for the maximum amount of time a mole can be up in milliseconds
	const maxUpTime = 1000;
	
	// Select all of the holes on the page
	const holes = document.querySelectorAll('[class^="hole"]');
	//console.log(holes);

	// Select all the moles on the page
	const moles = document.querySelectorAll('.mole');
	//console.log(moles);

	// Select the 
	const scoreBoard = document.querySelector('.score');
	//console.log();



/******************************
FUNCTIONS
******************************/
	// Build a function to record when you 'bonk' a mole and score points
	const bonk = e => {	    //same syntax as nodejs
		// Increase the score
		//score = score + 1; all three are the same
		//score += 1;
		score++;
		console.log({score});

		// Update the  display
		scoreBoard.textContent = score;

		// 'Bonk' the mole back into the hole
		e.currentTarget.parentNode.classList.remove('up');
	};

	// Build a function to select a random hole for a mole to pop up in
	const randomHole = (holes) => {
		// Randomly select a hole index
		const index = Math.floor(Math.random() * holes.length);

		
			// Now use that index to select a hole
			const hole = holes[index];

		// If the randomly selected hole matches the last one picked
		if (lastHole === hole) {
			// Randomly select again
			return randomHole(holes);
		}

		// Set the value of the lastHole variable to be the new randomly selected hole
		lastHole = hole;

		// Send the selected hole back
		return hole;
	}

	// Build a function to get a random amount of seconds
	const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

	// Build a function to 'pop' up a mole
	const peep = () => {
		// Get a random amount of time between your minimum and maximum up times
		const time = randomTime(minUpTime, maxUpTime);

		// Select a random hole
		const hole = randomHole(holes);

		// Add the class of 'up' to the random hole
		hole.classList.add('up');

		// After the random time amount
		// Remove the class of 'up' from the random 
		setTimeout(
			() => {
				hole.classList.remove('up')

				// Ask the question: Is the game time up?
				// If not, 'pop' another randomly selected mole
				if (!timeUp) {
					peep();
				}
			},
			time
		);			
	}

	// Build a function to setup and start the game
	const startGame = () => {
		// Reset the time to NOT be up
		timeUp = false;

		// Reset the score
		score = 0;

		// Reset the display value for the 
		scoreBoard.textContent = 0;

		// Command the moles to start 'popping'
		peep();

		// Set the game to be over when time is up
		setTimeout (
			() => timeUp = true,
			gameLength
		);
	}

/******************************
EVENTS
******************************/
	// Set each mole to watch for a 'bonk' to the head
	moles.forEach(mole => mole.addEventListener('click', bonk));

	//Temporarily set start game button to 'pop' a mole
	

	// Setup the game start button
	document.querySelector('button').addEventListener('click', startGame);
