# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Implementation Notes

Please note that this solution uses a local JSON file (`data.json`) instead of the live [REST Countries API](https://restcountries.com/). This decision was made to avoid hitting the strict rate limits associated with the public API, ensuring the application remains functional and fast for all users at all times.

## The challenge

Users should be able to:

- [x] See all countries from the API on the homepage
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode _(optional)_

### Extra Requirements & Improvements

- [ ] **Data Fetching Architecture:** - Implement a dedicated service layer to mock API behavior, decoupling components from the raw data source
  - Integrate pagination ("Load More" logic) and sorting filters (alphabetical & population) directly into the data retrieval pipeline
  - Implement Skeleton Screens to handle asynchronous states during data fetching for a smoother user experience

- [ ] **Sorting:** Add alphabetical sorting filters

## Links

- Solution URL: [https://github.com/Owczarek-Kamil/rest-countries-api-with-color-theme-switcher](https://github.com/Owczarek-Kamil/rest-countries-api-with-color-theme-switcher)
- Live Site URL: [https://rest-countries-api-with-color-theme-smoky.vercel.app/](https://rest-countries-api-with-color-theme-smoky.vercel.app/)

## Built with

- [Next.js](https://nextjs.org/) - React framework (App Router)
- [TypeScript](https://www.typescriptlang.org/) - For static type checking
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Author

- Frontend Mentor - [@Owczarek_Kamil](https://www.frontendmentor.io/profile/Owczarek-Kamil)
