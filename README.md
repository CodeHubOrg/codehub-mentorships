# Mentoring App

## Introduction

This app is going to support the CodeHub mentorship programme. Users can register if they are looking for mentoring, or as mentors. There will be a simple algorithm to help match up mentors with mentees. The decision will still be made by a human though. The same goes for approval of registrations. 

## Tech Stack

The app uses [Laravel](https://laravel.com/) on the backend, and [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) on the frontend.

[InertiaJS](https://inertiajs.com/) allows us to use server-side auth and routing whilst building the view layer in React.

We are also using [Tailwind](https://tailwindcss.com/) for the User Interface.

## Getting started

For the Laravel backend to run, you will need a server (Apache or Nginx) and PHP. You can have these installed directly on your machine, or use a virtual environment. (see instructions on the [Laravel site](https://laravel.com/docs/7.x))

Find more detailed instructions here: https://github.com/CodeHubOrg/codehub-mentorships/wiki/Getting-started

## Authenticate

Some routes in this application require authentication.  In order to access these routes you will need to ensure you have a database running locally that you can run the Laravel migrations against using this command (run from the project route):

```php
php artisan migrate:fresh --seed
```

This will create the database tables for the application and create a User that you can use to authenticate in the application. 

The login credentials for this test user are:

email: `test@example.com`
password: `password`
