# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Implementation Notes

Please note that this solution uses a local JSON file (`data.json`) instead of the live [REST Countries API](https://restcountries.com/). This decision was made to avoid hitting the strict rate limits associated with the public API, ensuring the application remains functional and fast for all users at all times.

To bridge the gap between static data and dynamic requirements, I leveraged Next.js Route Handlers to create a mock API. This architecture allows the application to perform fetch requests on the client side just like it would with a real backend, while keeping the initial page load highly optimized via Server-Side Rendering (SSR).

## The challenge

Users should be able to:

- [x] See all countries from the API on the homepage
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode _(optional)_

### Extra Requirements & Improvements

- [x] **Data Fetching Architecture:** - Implement a dedicated service layer to mock API behavior, decoupling components from the raw data source
  - Integrate pagination ("Load More" logic)

Based on [@vickbk](https://www.frontendmentor.io/profile/vickbk) feedback:

- [x] **Leverage Next.js `loading.tsx`** - _"Right now, when a user clicks a country to view its details, there is no visual feedback while the new page loads. On slower networks, the app feels frozen or unresponsive."_
- [x] **Implement a quick de-bounce mechanism for search input (300-500ms delay)** - _"Forcing a user to press Enter to search without providing an explicit "Submit" button feels broken in modern web apps. Users expect data to filter dynamically as they type."_
- [x] **Pagination size optimization (Change limit to 12 or 24)** - _"Loading only 5 items at a time leaves massive empty gaps in your layout"_
- [x] **Theme discovery on initial load** - _"On a user's very first visit (before any cookie is set), the app defaults to light mode. If a user has their operating system or browser set to dark mode, forcing them into a bright light mode on initial load creates a jarring user experience."_
- [ ] **Add hover styles for interactive elements** - _"Curiously, your interactive components have excellent native focus states (when using keyboard navigation), but they lack visual shifts on mouse hover. Desktop mouse users need that same immediate feedback to know an element is clickable"_
- [ ] **(Optional) Explore Infinite Scroll** - _"While 'Load More' is fine, you could eventually upgrade this to an infinite scroll experience."_

## Links

- Solution URL: [https://github.com/Owczarek-Kamil/rest-countries-api-with-color-theme-switcher](https://github.com/Owczarek-Kamil/rest-countries-api-with-color-theme-switcher)
- Live Site URL: [https://rest-countries-api-with-color-theme-smoky.vercel.app/](https://rest-countries-api-with-color-theme-smoky.vercel.app/)

## Built with

- [Next.js](https://nextjs.org/) - React framework (App Router)
- [TypeScript](https://www.typescriptlang.org/) - For static type checking
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Author

- Frontend Mentor - [@Owczarek_Kamil](https://www.frontendmentor.io/profile/Owczarek-Kamil)
