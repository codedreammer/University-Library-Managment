// Sample book data
const books = [
    { title: "Math sem - 1", available: true },
    { title: "Electronic fist year", available: false },
    { title: "Python textbook", available: true },
];

// Search for books
function searchBook() {
    const searchQuery = document.getElementById("searchBook").value.toLowerCase();
    const result = books.find(book => book.title.toLowerCase().includes(searchQuery));

    const bookResultDiv = document.getElementById("bookResult");
    if (result) {
        const status = result.available ? "Available" : "Not Available";
        bookResultDiv.innerHTML = `<p><strong>${result.title}</strong> is <strong>${status}</strong>.</p>`;
    } else {
        bookResultDiv.innerHTML = "<p>Book not found.</p>";
    }
}

// Handle seat reservation
document.getElementById("seatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const seatNumber = document.getElementById("seatNumber").value;

    const message = `Seat ${seatNumber} has been successfully reserved for ${name}.`;
    document.getElementById("seatMessage").innerText = message;

    // Clear form
    this.reset();
});
