
let bag;

onLoad();

function onLoad() {
    let bagItems = localStorage.getItem('bagItems');
    bag = bagItems ? JSON.parse(bagItems) : [];
    displayItems();
    dispalyCount();
}

function addToBag(itemId) {
    bag.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bag));
    dispalyCount();
}

function dispalyCount() {
    let itemCount = document.querySelector(".bag-item-count");
    if (bag.length > 0) {
        itemCount.style.visibility = 'visible';
        itemCount.innerHTML = bag.length;
    } else {
        itemCount.style.visibility = 'hidden';
    }
}

function displayItems() {
    let items_container = document.querySelector(".mens-items");

    let shirts = '';
    items.forEach(item => {
        shirts += `
            <div class="item">
                <a href="#"><img src="${item.image}" alt="${item.item_name}"></a>
                <div class="rating">
                    ${item.ratings.stars}⭐ | ${item.ratings.reviews} reviews
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount}% off)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
            </div>
        `;
    });
    
    items_container.innerHTML = shirts;
}

