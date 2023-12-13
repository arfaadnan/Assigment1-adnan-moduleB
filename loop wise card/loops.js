function generateCard(id,title,price, content, imageUrl) {
    var card = document.createElement('div');
    card.classList.add('card');

    var titleElement = document.createElement('h2');
    titleElement.textContent = title;

    var priceElement = document.createElement('h5');
    priceElement.textContent = price;

    var contentElement = document.createElement('p');
    contentElement.textContent = content;

    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = title;

    card.appendChild(titleElement);
    card.appendChild(priceElement);
    card.appendChild(contentElement);
    card.appendChild(imageElement);
    imageElement.style.width = '300px';

    return card;
}

// Example data for card generation
var cardData = [
    { id : 4 , title: 'New Title',price : 205 , Description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', imageUrl: 'https://i.imgur.com/R2PN9Wq.jpeg' },
    { id : 7 , title: 'Ergonomic Wooden Tuna',price : 743 , Description: 'Bostons most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles', imageUrl: "https://i.imgur.com/mp3rUty.jpeg" },
    { id : 9 , title: 'Electronic Bronze Chips',price : 808 , Description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', imageUrl: 'https://i.imgur.com/R3iobJA.jpeg' },
    { id : 11 , title: 'Awesome Bronze Car',price : 382 , Description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals' , imageUrl: 'https://i.imgur.com/KeqG6r4.jpeg' },
    { id : 12 , title: 'Recycled Rubber Cheese',price : 30 , Description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', imageUrl: 'https://i.imgur.com/R2PN9Wq.jpeg' },
    
    // Add more items as needed
];

// Get the card container
var cardContainer = document.getElementById('cardContainer');

// Generate cards in a loop
for (var i = 0; i < cardData.length; i++) {
    var cardInfo = cardData[i];
    var card = generateCard(cardInfo.id ,cardInfo.title,cardInfo.price, cardInfo.Description, cardInfo.imageUrl);
    cardContainer.appendChild(card);
}