const bookDetails = {
    book1: {
        author: 'N.P Bali',
        price: '$6',
        availability: '25 copies available'
    },
    book2: {
        author: 'Author 2',
        price: '$12',
        availability: '3 copies available'
    },
    book3: {
        author: 'Author 3',
        price: '$15',
        availability: '7 copies available'
    },
    book4: {
        author: 'Author 3',
        price: '$15',
        availability: '7 copies available'
    },
    book5: {
        author: 'Author 3',
        price: '$15',
        availability: '7 copies available'
    },
    book6: {
        author: 'Author 3',
        price: '$15',
        availability: '7 copies available'
    },
    book7: {
        author: 'Author 3',
        price: '$15',
        availability: '7 copies available'
    }
    // Add more book details as needed
};

function showBookDetails(bookId) {
    const details = bookDetails[bookId];
    document.getElementById('author').innerText = `Author: ${details.author}`;
    document.getElementById('price').innerText = `Price: ${details.price}`;
    document.getElementById('availability').innerText = `Availability: ${details.availability}`;
    document.getElementById('bookDetails').style.display = 'block';
}

function hideBookDetails() {
    document.getElementById('bookDetails').style.display = 'none';
}
