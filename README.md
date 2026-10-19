# FoodmineCourse

In the FoodMine Course -- I lay out a great way to create an Angular website doing the following princepls for front-end development. 

1. Demo & Installation Overview of the finished food-ordering website.
Install Angular and required tools.
Set up the development environment.

2. Create Header Component (Angular)
Generate the site's header component.
Add navigation structure and Angular component logic.

3. Create Header Component (CSS)
Style the header.
Add layout, colors, spacing, and navigation appearance.

4. Add Food List Images (Angular)
Display food items using Angular.
Bind data and show food images dynamically.

5. Add Food List Images (CSS)
Style the food item cards and image grid.
Improve page layout and responsiveness.

6. Add Food Details to Cards (Angular)
Add food names, prices, ratings, and other details.
Connect data to the UI.

7. Add Food Details to Cards (CSS)
Style card content and presentation.
Improve visual hierarchy and readability.

8. Add Search Bar (Angular)
Create a search feature.
Filter food items based on user input.

9. Add Search Bar (CSS)
Style the search box and controls.
Integrate it into the page layout.

10. Add Tags Bar (Angular)
Create category/tag filtering.
Allow users to browse foods by tags.

11. Add Tags Bar (CSS)
Style the tags and category buttons.
Improve navigation and usability.

12. Food Details Page (Angular)
Build a dedicated product details page.
Use routing and dynamic content loading.

13. Food Details Page (CSS)
Style the product page.
Format descriptions, images, and layout.

14. Cart Page (Angular)
Create shopping cart functionality.
Add items, update quantities, and calculate totals.

15. Cart Page (CSS)
Style the shopping cart interface.
Improve readability and organization.

16. Not Found Page (Angular & CSS)
Create a 404 page.
Handle invalid routes and improve user experience.

17. Using API and HTTP (Angular) 
call to dynamically show the weather using
the uers location, if no location is provided
show new orlean's weather instead.

18. Style the Component (CSS)
on the header.

19. Make a Attribute Directive (Angular)
of a tooltip to dynamically show a message with duration & delay.
this can be used everyone on the website if needed. These kind of directives work
great with modals or anything needing to be generated and destroyed when done.

20. Styling the Tooltip (CSS)
using inline template and css, we style the template.

https://www.youtube.com/watch?v=UIWK5_DrZ7w&list=PLpaspowtqj-dlt-C7FvRG42LNRFcXdRDD

## API Used for HTTP exmaples
```bash
https://openweathermap.org/api/one-call-4?collection=one_call_api
```

We created the first component by running the following in the terminal.
```bash
ng generate component header
```
OR for short you can do:
```bash
ng g c header
```

A way to create a component with no seperate CSS or HTML file.
```bash
ng g c myNewComponent --inline-template --inline-style
```

we can make a directive with
```bash
ng g d ACoolDirective
```

This will create a component called header with its respective html and css files, and store it in a folder for you!

If this doesnt work, perhaps your machine is block you to protect you front running scripts willy nilly.
to resolve this, run the following in a powershell as administrator
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
