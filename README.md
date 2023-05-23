# react-photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. It used a pre-existing API to build a front-end user experience for users to interact with photos!

To complete this project I used different functionality of react such as state management, reducers, useEffects, and etc.

# Photolabs

Each user is able to see a full list of photos available in the database first. The user is able to see a list of categories in the navigation bar, and clicking on each category will show only the pictures for that category. 

Clicking on each image will open a modal for the user to see the larger version of the image, alongside the list of similar photos based on the category of the selected image. 

Every image has a favorite icon that can be selected by the user. The icon is available on all the sections of the app. Favoring at least one image would show a notification icon on the navigation bar. Also, each favorite image will be favorited across all the sections of the app.

To go back to the homepage, the user can click on the page logo to refresh the page.

To have a glance at the app, please see the screenshots below. To access the full project, please fork and clone the project and read through the setup section.


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
