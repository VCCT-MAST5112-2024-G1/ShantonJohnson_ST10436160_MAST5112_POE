# Changelog

## Part 2 Updates
HomeScreen Enhancements:

1) Enhanced Layout with Structured Sections:
The content on the HomeScreen was separated into distinct sections, which can make it feel more organized.
Header Section: Displays the app title and item count in a more prominent way.
Menu List Section: Contains the ScrollView and a styled, bordered container to make each menu item stand out.

2) Stylized Menu Items:
Each menu item has a shadow effect and increased padding, creating a card-like feel.
Different font styles and colors were used for the dish name, description, and price to make them visually distinguishable.

3) Add Button with Animated Touch Feedback:
The "Add Menu Item" button now has a subtle bounce animation when pressed, enhancing feedback.
Added rounded corners and an icon to give the button a more inviting look.
AddMenuItemScreen Enhancements

4) Improved Form Layout:
Input Fields: Each input field is now well-spaced with rounded corners and a shadow, giving them a more modern, 3D look.
Picker Component: The course picker has a custom-styled container, providing a consistent look with other input fields.

5) Form Feedback:
Dynamic Border Colors: Input fields’ borders change color based on whether they contain valid information. For instance, if the price input is left blank or invalid, it might turn red.
Custom Alert on Success: A custom toast-style alert or a modal appears when a new dish is added, replacing the standard alert for a smoother experience.

6) Animated "Add Dish" Button:
The “Add Dish” button also has a bounce effect when pressed, providing an interactive touch.
Rounded corners, an elevated shadow, and a gradient background give it a more premium look.

7) User-Friendly Touches:
Added Keyboard.dismiss() functionality, so the keyboard closes after the user submits the form, creating a better experience on mobile devices.

## Final PoE Updates
- Moved add-item functionality to a separate screen (ChefMenuScreen.tsx)
- Added average price display for each course on Home screen
- Created FilterMenuScreen for filtering menu items by course (FilterMenuScreen.tsx)

### Changes & Improvements Made to HomeScreen:

1) Added Average Price Calculation
In order to determine the average prices for each course type (Starters, Mains, and Desserts), a new utility function called calculateAveragePrice has been imported. The averagePriceContainer at the top of the screen shows the average prices. The supplied menuItems prop is used to get the average costs for each course. For uniformity, the results are formatted to two decimal places.

2) Added Navigation to New Screens
Chef's Menu and Filter Menu Items are two new buttons that open to different screens. For users to explore related screens or features, these offer more navigation possibilities.
The associated TouchableOpacity components use the 'ChefMenu' and 'FilterMenu' routes to navigate.

3) Styling Updates
New Average Price Container: To gather and style the average costs for every course, a new themed container called averagePriceContainer has been introduced. It gives users unambiguous visual feedback on the average cost of the dishes.
Updated Colors: To maintain consistency, a few minor color adjustments were made, such as using bright green for buttons, prices, and navigational elements and light gray for text.
Button Styling: For a more contemporary look, the buttons now feature rounded corners, padding, and consistent background colors.

4) Updated Layout
Arranged the list of menu items in a ScrollView with the average prices at the top. This makes it easy to distinguish between the list of specific menu items and the pricing overview.
To guarantee uniformity and improved alignment within the page layout, the margins and spacing were changed.

### New ChefMenuScreen Created: 
The user can add and remove dishes as well as manage menu items on this screen.
The meal name, description, course (starter, main, or dessert), and price are all entered in the form.
Users can click a button to add a dish, and each menu item card has a "Remove" option that allows them to take an item off the menu.

### Removal of AddMenuItemScreen:
By combining the functionalities of the old AddMenuItemScreen into the new ChefMenuScreen, the program is made more streamlined.

### New FilterMenuScreen Created: 
The FilterMenuScreen allows users to filter menu items by course (starter, main, or dessert) using a picker component. Upon selecting a course, it dynamically filters the menuItems array and displays only the relevant items. Each filtered item is presented within a scrollable view, featuring its name, course, and price, with a distinctive green color highlighting the price. The screen adopts a dark theme with shades of gray for consistency in design, and menu item cards are styled with rounded corners and contrasting text for readability. The state management utilizes a selectedCourse state to track user selection, and the filtering is implemented using an array filter method (menuItems.filter()), providing a seamless and organized user experience.





