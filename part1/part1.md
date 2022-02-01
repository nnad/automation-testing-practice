## Exploration target: what scenario are you exploring? What’s the functionality?
I explored the scenario of booking a hotel. During my exploring, I tried cases with different numbers of travelers, rooms, hotels, prices.
Main functionality includes a list of rooms, a booking form, and an invoice page. Users use this type of site for booking. 
And 	**full booking user experience includes**: watching previews of images, inputting certain dates and numbers of travelers, filling the booking page, and in some cases booking payment. I wanted to check: the ability to browse information about hotels and rooms, the ability to set values (rooms/travelers/dates), service saves correct information from booking form to invoice, service provides payment.

## Prioritisation of those use cases - which area of the website or testing would you explore first and why?
The main priority and critical points are the payment process and correct saving information from booking. Wrong information from booking is a problem for hotels, the problem with payment is customer’s problem which may be the cause of the decreasing company profit. Another priority: user experience.

###### 3 key scenarios:

The first scenario is a little bit excessive. But check to save all possible inputs and calculations. And imitate user scenarios. 

**Book a room when the user is not logged in with advanced inputs and bank payment.** 
Preconditions: Search inputs: 2 adults, 1 child, 2 Nights, 2 Rooms. 1 Room costs 66 USD. Travelers info (First Name, Last Name ….) 

**Steps:** 
1) Open the hotel page. 
2) Click the ‘Book’ button for the room with 66 USD. 
3) Fill all the fields about travelers.
4) Set payment option. 
5) Confirm booking. 
6) Proceed button. 

Expected result: the right panel is calculated correctly (2 rooms * 2 nights). Invoice displays all info about travelers.

**A user doesn’t fill the required fields on the booking page.** Expected result: The user can’t confirm the booking until the required field is filled.

**Book a room with the ‘pay later’ option. Expected result:** Invoice is ready. No, proceed button. 


Other scenarios which I explored:
- **Book a room and cancel it.** Expected result: Booking status is canceled.
- **Booked on specified dates.** Preconditions: Hotel with a booked room. Expected result: no Book button for the room.
- **Book room when the user is logged in.** Expected result: auto-filling the booking form. 

## Does the site behave as you would expect? Did you discover anything that looks like a bug? Did you see anything you think could be improved?

This site wasn’t as I expected. Because I can’t do several important things on the hotel page: change dates and change numbers of travelers. Also during filling out the booking form it wasn't a good experience because some elements aren’t user-friendly and not obvious (required fields). The hotel page has some bugs.

**Looks like bugs:** 
- The first image of the hotel is not clickable. 
- The left arrow icon in the preview has a different design and doesn’t work in the first image. 
- The magnifier icon in the room preview doesn’t work/expand. add form for changing the date on the hotel page. 
- Booking status on the invoice page. 
- Nationality dropdown displays country dropdown.

**Areas of improvement:** 
- Display required fields of the booking form. 
- Only radio buttons are clickable, not item space (Payment method panel). 
- Some fields do not have a predefined format and validation.

## What kind of risks do you need to mitigate for this type of application

The most important part of this application is providing service between the travelers and the hotels. 
To reduce the risks, QA engineers need to check the end-to-end scenarios (including interaction with the backend) 
and the opportunity to pay a booking. Also, do scenario analysis. In this case, it is impossible to change the booking data on the hotel page.
It makes site interaction more complicated. As a result, the user's expectations are a mismatch
___________________
## Notes during exploratory testing: 
Open the hotel from the main page with 15% discount and the price is 100 USD. On the hotel page 
there is only an icon with discounts, but in the rooms table with prices discounts aren’t displayed, prices start from 110 USD. 
The first image of the hotel is not clickable but other images are clickable. Preview mode is not looped. Left arrow icon in 
the preview has a different design and doesn’t work in the first image.

Open room preview. magnifier icon doesn’t work/expand. Dropdown for the number of rooms is clickable. Hotel amenities display icons 
without white images inside. New state of room: One of the rooms displays ‘Booked on specified dates’ instead of the ‘Book now’ button.

No field with dates. I can’t change dates. Change dates via the main page. Booking page displays new dates. 

Change the number of adults to 30, 3 children and duration is 29 nights. 33 traveler cards are displayed. Policy contains information about the limits of children in the room. But there is no warning if the user has more children than permitted. Right panel still contains information about 2 adults and 1 child. The number of nights are correct.

Booking page. The email field requires the correct email format with @ sign. First and Last names don’t include letters check. No information about required fields. Country and nationality dropdowns are the same. Payment method panel. Only radio buttons are clickable, not item space. Some fields are optional. 

Cancel booking but booking status is still “Pending”.
Try different payment methods. For “Pay letter” there is no ‘Proceed’ button(expected). For other options, this button is displayed. Dropdown display selected method.
Add children’s info in the booking. The invoice doesn't display fields with information about children.
Login is failed with provided credentials. 
