# Tasks

Tasks is react native app that tries to help users manage their tasks in categories.

## Feature List
  - User can add, edit and delete tasks from any categories.
  - User can add new categories and edit the old categories.
  - On the category View, user sees
    - Category Infomation
    - Status of completed/total tasks,
    - An option to edit category details,
    - List of tasks in that category
  - On Task
    - User can click on tick box to mark a task completed. 
    - When the task is marked completed, Delete option will be visible.
    - On Click on Delete, Task will be deleted from that category.
  - Header
    - On any screen of app, user Can select the language option from here,
    - On Selection an screen will come up to show available languages app supports,
    - It shows the user selected language, and an option to apply a new langauage.

## Localization
App Support multiple languages

 - English
 - Spanish
 - Arabic ( support RTL mode as well)
 
 ## Setup and get it running
 
 React native apps takes few tries before they run from the new repo on local machine. But it can be solved.
 I worked with Apple M1 Chip, so there are few CPU issues as well.
 
 Same old steps: 
  - `git clone git@github.com:anujverma000/Tasks.git`
  - `cd Tasks`
  - `yarn`
  - `npx pod-install` // make sure to update new cocoapods, because why not.
  - `yarn android`

### Troubleshoot

 ## Android
  - `cd android`
  - `./gradlew clean`
  - `cd ..`
  - `yarn android` // make sure emulator is open.

Thanks a lot.
  
