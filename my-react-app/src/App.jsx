import Profile from "./Components/Profile.jsx";
import Projects from "./Components/Projects.jsx";
import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";

function App() {
  return (
    <div>
      <Profile></Profile>
      <Projects
        name="Guess Number Game"
        screenshot={screenshot1}
        github="https://github.com/Hasoni7/JS_Assignment-4.git"
        tech="html, Javascript"
        description="The Guess the Number game is a console-based game where players guess a number between 1 and 10. 
           The game gives feedback on whether the guess is too high, too low, or correct. 
           Players can play multiple rounds.
           I learned to use JavaScript for game logic, loops, and user input validation. 
           The main challenges were ensuring valid input and managing the game flow, 
           especially prompting players to play again after each round."
      />

      <Projects
        name="ATM Program"
        screenshot={screenshot2}
        github="https://github.com/Hasoni7/JS_Assignment-5.git"
        tech="html, Javascript"
        description="TThe ATM program simulates an ATM interface where users can check their balance, make deposits and withdrawals, 
           and get their account holder name. It allows multiple transactions and ensures that inputs are valid, 
           handling errors like insufficient funds and invalid amounts.

           I learned how to structure JavaScript code using objects and functions, and how to manage user input and validation. 
           The key challenge was implementing error handling and ensuring the program runs smoothly through multiple transactions."
      />
    </div>
  );
}

export default App;
