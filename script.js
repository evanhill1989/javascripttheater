console.log("Hello from script.js");
const movieShowtimes = {
    movie1: ["10:00 AM", "1:30 PM", "4:45 PM",  "8:00 PM",  "10:30 PM"],
    movie2: ["11:15 AM", "2:45 PM", "5:30 PM", "8:15 PM"],
    movie3: ["9:30 AM", "12:45 PM", "3:15 PM", "6:00 PM", "9:00 PM"]
    
};

const movieDropdown = document.getElementById("movie-dropdown");
const timeDropdown = document.getElementById("time-dropdown");
updateShowtimes();
//convert timeDropdown.value to 24 hour time 
function convertTo24HourFormat(time) {
    // Split the time string into hours and minutes
    const [hour, minute] = time.split(':').map(Number);

    // Determine whether it's AM or PM based on your time logic
    // For example, if hours are 1 to 11, it's AM, otherwise PM
    const isAM = hour >= 1 && hour <= 11;

    // If it's PM and not already 12:00 PM, add 12 hours to the hour
    if (!isAM && hour !== 12) {
        hour += 12;
    }

    // Convert the hour and minute back to a string
    const hourStr = hour.toString().padStart(2, '0'); // Ensure 2-digit format
    const minuteStr = minute.toString().padStart(2, '0');

    // Return the time in 24-hour format as a string
    return `${hourStr}:${minuteStr}`;
}

console.log(convertTo24HourFormat('9:30 AM'));
console.log(timeDropdown.value);

addEventListener

function matineeDiscount(){
    const matineeDiscount = 3;
   
   

    if(timeDropdown.value === "9:30 AM"){
        return matineeDiscount;
    } else return 0;

}

matineeDiscount();

// console.log(timeDropdown).value;

// Function to update the time-dropdown options based on the selected movie



function updateShowtimes() {
    // ***** Code is breaking for anything but the console log?
    // it breaks with line below because movieDropdown.value is null.
    // so it's all breaking because movieDropdown.value is null
    const selectedMovie = movieDropdown.value;
    // it breaks with line below because selectedMovie is not defined (because movieDropdown.value is null)
    const showtimes = movieShowtimes[selectedMovie] || []; // Get the showtimes for the selected movie
  
    // Clear the current options in the time-dropdown menu
    timeDropdown.innerHTML = "";

    // Add new options based on the selected movie's showtimes
    showtimes.forEach((showtime) => {
        const option = document.createElement("option");
        option.value = showtime;
        option.textContent = showtime;
        timeDropdown.appendChild(option);
    });
}

function updateShowtimeData(){
    const selectedShowtime = convertTo24HourFormat(timeDropdown.value);
    const showtimeData = convertTo24HourFormat(selectedShowtime);
    console.log(showtimeData);
}

// Add the event listener to the movie-dropdown menu

// Call the updateShowtimes function initially to populate the time-dropdown based on the default movie
// ***** Code is breaking here when I call updateShowtimes() *****




// Event listener for the "Buy Ticket" button
const buyTicketButton = document.getElementById("buy-ticket-btn");
buyTicketButton.addEventListener("click", () => {
    console.log("buyTicketButton clicked");
   // Get the selected movie and showtime
    const selectedMovie = movieDropdown.value;
    const selectedShowtime = timeDropdown.value;
   
const paymentCard = document.createElement("div");
    
paymentCard.className = "ticket-card";
paymentCard.id = "payment-card";
console.log("buyTicketButton clicked");
const totalPrice = 20;
paymentCard.innerHTML = `
    <h2 class="ticket-title">Payment Details</h2>
    <p>Total Price: <span id="total-price">$${totalPrice}</span></p>
    <form class="payment-form">
       
        <label for="payment-method">Choose Payment Method:</label>
        
        <select id="payment-method" name="payment-method">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <!-- Add more payment methods as needed -->
        </select>
        <button id="confirm-payment" type="button">Confirm Payment</button>
        <button id="buy-another" type="button">Buy Another Ticket</button>
    </form>
`;
const ticketContainer = document.querySelector(".ticket-container");
const currentCard = document.querySelector(".ticket-card");


ticketContainer.replaceChild(paymentCard, currentCard);
    // Calculate the total price (you can use your own pricing logic)
    // const totalPrice = calculateTotalPrice(selectedMovie, selectedShowtime);
    
  
    console.log("buyTicketButton clicked");
  
    // First let's just get paymentCard to show in DOM
    // now it won't even flash
    
    


    // Replace the current card with the payment card
    // const currentCard = document.getElementById("ticket-card");
    // currentCard.parentNode.replaceChild(paymentCard, currentCard);
    
});



movieDropdown.addEventListener("change", updateShowtimes);
timeDropdown.addEventListener("change", updateShowtimeData); 
console.log(convertTo24HourFormat(timeDropdown.value));


console.log("End of script.js");
/*
const genAdmissionPrice = 20;
        const discountedPrice = 10;


        

        const matineeDiscount = 3 ;
       

        /*Bonus Challenge 1 Create applyMatineeDiscount() . 
        I used my own algos not suggestions 1-5, For deeper practice and because this structure seems a little convoluted to me. Feels like we're opening
        ourselves up to all sorts of easy scoping mistakes and unnecessary complexities - and for what? The code does the same thing and isn't any easier to 
        to look at. The matinee discount is straight forward as is and doesn't need to be abstracted, and I really don't think it should be abstracted outside of the buyTicket()
        function only to be called back into it at such a granular level.

         */
        // BONUS CHALLENGE 2 - already handled this in main challenge using toLowerCase()
        /* BONUS CHALLENGE 3 - The jump in web dev skills seems enormous here. So ditch the basic JS prompts and alerts and just completely redo the whole project? Why don't
        I just make it with React and Tailwind while I'm at it?
        */
/*
        
        
        function buyTicket(){
            let age = prompt('What is your age?');
            let isMatinee = prompt('Are you attending a matinee?');

            function getBaseTicketCost(age){
                if(age < 12 || age > 65){
                return discountedPrice;
                } else {
                return genAdmissionPrice;
                }
            }

            //Bonus Challenge 1 applyMatineeDiscount() function without separating prompt from rest of logic
            function applyMatineeDiscount(cost){
                if(isMatinee.toLocaleLowerCase() === 'yes'){
                    return cost - 3;
                } else return cost;
            }


            let baseTicketCost = getBaseTicketCost(age);
            let realCost = applyMatineeDiscount(baseTicketCost);

            alert(`Ticket price is $${realCost}`);

            
        }
*/