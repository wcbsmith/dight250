/******************************
VARIABLES
******************************/
	// Setup a placeholder variable for the last hole a mole came up in
	let lastHole = null;
	
	// Set the initial value for the question: Is the game time up?
	let timeUP = true;  //boolean

	// Set the initial score
	let score = 0;
	
	// Set a value for length of a game in milliseconds

	// Set a value for the minimum amount of time a mole can be up in milliseconds

	// Set a value for the maximum amount of time a mole can be up in milliseconds

	// Select all of the holes on the page

	// Select all the moles on the page

	// Select the scoreboard



/******************************
FUNCTIONS
******************************/
	// Build a function to record when you 'bonk' a mole and score points
		// Increase the score

		// Update the scoreboard display

		// 'Bonk' the mole back into the hole


	// Build a function to select a random hole for a mole to pop up in
		// Randomly select a hole index
			// Now use that index to select a hole

		// If the randomly selected hole matches the last one picked
			// Randomly select again

		// Set the value of the lastHole variable to be the new randomly selected hole

		// Send the selected hole back


	// Build a function to get a random amount of seconds


	// Build a function to 'pop' up a mole
		// Get a random amount of time between your minimum and maximum up times

		// Select a random hole

		// Add the class of 'up' to the random hole

		// After the random time amount
			// Remove the class of 'up' from the random hole

			// Ask the question: Is the game time up?
				// If not, 'pop' another randomly selected mole


	// Build a function to setup and start the game
		// Reset the time to NOT be up

		// Reset the score

		// Reset the display value for the scoreboard

		// Command the moles to start 'popping'

		// Set the game to be over when time is up



/******************************
EVENTS
******************************/
	// Set each mole to watch for a 'bonk' to the head

	// Setup the game start button
