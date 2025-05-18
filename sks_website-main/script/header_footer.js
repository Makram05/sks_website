function generateHeader() {
    const headerContent = `
        <div class="logo-container">
            <a href="index.html"><img class="sks-logo" src="images/sks_logo.jpg" alt="sks-logo"></a>
        </div>
        <nav class="nav-bar">
          <a href="#">Men</a>
          <a href="#">Kids</a>
          <a href="#">Accessories</a>
          <a href="#">Shoes</a>
          <a href="#">Trendy<sup>New</sup></a>
        </nav>
        <div class="search-container">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>            
            <input class="search-bar" type="text" placeholder="search for products">
        </div>
        <div class="action-bar">
            <div class="action-container">
                <i class="fa-regular fa-user"></i>                
                <span class="action-name">Profile</span> 
            </div>

            <div class="action-container">
                <i class="fa-regular fa-heart"></i>       
                         <span class="action-name">Wishlist</span> 
            </div>

            <a class="action-container" href="pages/bag.html">
                <i class="fa-solid fa-bag-shopping"></i>    
                <span class="action-name">bag</span>
                <span class="bag-item-count">0</span> 
            </a>
        </div>`;

document.querySelector(".header-container").innerHTML = headerContent;
}

// Function to generate the footer content
function generateFooter() {
const footerContent = `

<div class="footer-panel1">
                Back to Top
            </div>
            <div class="footer-panel2">
                <ul>
                   <p>Get to Know <br>Us</p> 
                   <a href="about.html">About SKS</a>
                   <a>Careers</a>
                   <a>Press Releases</a>
                   <a>SKS branches</a>
                </ul>
    
                <ul>
                    <p>Connect with <br>Us</p> 
                    <a>Facebook</a>
                    <a>Youtube</a>
                    <a>Instagram</a>
                 </ul>
    
                 <ul>
                    <p>Make Money with Us</p> 
                    <a>Sell on SKS</a>
                    <a>Advertise Your Products</a>
                    <a>Fulfilment by SKS</a>
                    <a>Supply to SKS</a>
    
                 </ul>
    
                 <ul>
                    <p>Let Us Help You</p> 
                    <a>Your Account</a>
                    <a>Returns Centre</a>
                    <a>100% Purchase Protection</a>
                    <a>SKS App Download</a>
                    <a>Help</a>
                 </ul>
            </div>
    
            <div class="footer-panel3">
    
                <div class="footer-logo" >
    
                </div>
    
            </div>
    
            <div class="footer-panel4">
    
                <div class="pages">
                    <a>Conditions of Use & Sale</a>
                    <a>Privacy Notice</a>
                    <a>Interest-Based Ads</a>
                </div>
                <div class="copyright">
                    © 1996-2025, SKS.com, Inc. or its affiliates
                </div>
            </div>
`;

// Insert the footer content into the footer-placeholder div
document.querySelector(".footer-container").innerHTML = footerContent;
}

// Call the functions to generate and insert header and footer when the page loads
window.onload = function() {
generateHeader();
generateFooter();
};