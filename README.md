# Furrl: React Product Browsing and Sharing App

Furrl is a captivating React application designed to elevate the product browsing experience. It showcases a visually appealing grid of products, empowering users to seamlessly share product links with others. By leveraging an external API, Furrl retrieves comprehensive product data and implements infinite scrolling, ensuring a continuous stream of products as you navigate down the page.

## Key Functionalities

* **Effortless Product Exploration:** Furrl presents a user-friendly interface featuring a grid layout that meticulously curates product information. As you scroll down, additional products are progressively loaded, fostering an uninterrupted browsing experience. 
* **Intuitive Product Sharing:** Sharing product discoveries with friends and colleagues is a breeze with Furrl. Clicking the designated share button on a product instantly triggers a popup window. This window conveniently displays the product link along with a handy copy-to-clipboard button, streamlining the sharing process.
* **Responsive Design Philosophy:** Furrl adheres to responsive design principles, guaranteeing an exceptional user experience across various screen sizes. This ensures that the product grid and functionalities adapt flawlessly to desktops, tablets, and mobile devices.

## Unveiling the Components

Furrl's functionality is meticulously orchestrated by a combination of meticulously crafted React components:

* **Grid Component:** This pivotal component shoulders the responsibility of fetching product data from the designated API and presenting it in a visually compelling grid layout. The implementation of infinite scrolling within this component ensures a seamless browsing experience. (Source code location: src/components/Grid.js)
* **Card Component:** Each product within the grid is meticulously rendered by the Card component. It meticulously extracts and displays essential product details, along with a strategically placed share button that activates the product sharing functionality. (Source code location: src/components/Card.js)
* **SharePopup Component:** This component meticulously manages the product sharing popup window. It prominently displays the product link and incorporates a user-friendly copy-to-clipboard button, facilitating effortless sharing. (Source code location: src/components/SharePopup.js)

## Aesthetics with Purpose

Furrl prioritizes a visually appealing user experience. To achieve this, meticulous CSS styling is applied to each component. This styling is segregated into distinct CSS files for better organization:

* Grid CSS: src/styles/Grid.css
* Card CSS: src/styles/Card.css
* SharePopup CSS: src/styles/SharePopup.css

## API Integration

Furrl seamlessly fetches product data from a designated API endpoint:

* **Endpoint:** [https://api.furrl.in/api/v2/listing/getListingProducts](https://api.furrl.in/api/v2/listing/getListingProducts)
* **Method:** POST
* **Request Body:**

```json
{
  "input": {
    "page": 1,
    "pageSize": 10,
    "filters": [],
    "id": "#HomeHunts",
    "entity": "vibe"
  }
}

## Live Demo

A live demo of the Furrl application is available on Github Pages: [Furrl-Homehunts](https://vikramkonidhala.github.io/Furrl-Homehunts)
