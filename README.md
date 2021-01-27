# The Arcade

Link: https://agitated-edison-3dff49.netlify.app/

## Project Description

The Arcade is an Airtable and React build, RPG environment where the user is able to engage in a number of retro-styled arcade games. From the homepage, the user is able to navigate through a top-down-view 2D world where all life is based around, you guessed it, ARCARDE! By reaching particular checkpoints on the map, users are able to interact with a number of classic arcade games including Minesweeper, Pong, and many more. Leaderboards are posted and updated (and even have editing functionality). Play to win. Good luck!

## Wireframes

The wireframe below depicts the homepage and leaderboard for Minesweeper in web format. The homepage contains a timer keeping track of the users progress, and the game board containing an array of clickable cells, with each reavealing more of the hidden game board. The leaderboard button in the top right-hand corner routes to the leaderboard page which tabulates username, ranking, and user time. The edit button on the lower right-hand corner of that page allows for the user to edit the name of their posted scores.

![imageAlt](https://i.ibb.co/RYFCPSB/Screen-Shot-2021-01-20-at-2-47-58-AM.png)
<!--
    https://wireframe.cc/ut5FUe
-->
![imageAlt](https://i.ibb.co/bNYH4rQ/Screen-Shot-2021-01-20-at-3-01-46-AM.png)

## Component Hierarchy

![imageAlt](https://i.ibb.co/R2800bM/Screen-Shot-2021-01-20-at-3-14-12-AM.png)
<!--
    https://wireframe.cc/6OEh1y
-->

## API and Data Sample

https://airtable.com/tblSWWslEIgCor7aj/viwTMcThgq096TUMO?blocks=hide

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recCLDT6v38PtnfIw",
            "fields": {
                "rank": "Abrasive Antwon",
                "time": 30
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        },
        {
            "id": "recnVoFPhy3cATBkt",
            "fields": {
                "rank": "Bashful Bethany",
                "time": 35
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        },
        {
            "id": "recWTHN0kQg5l7VWj",
            "fields": {
                "rank": "Crazy Coraline",
                "time": 40
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        }
    ],
    "offset": "recWTHN0kQg5l7VWj"
}

```

Each entry contains the user's name, and their time in seconds. Ranks on the leaderboard will be assigned on the React App.

### MVP/PostMVP

#### MVP

- Game board with clickable cells that uncover and accurately hint at the number of neighboring 'mines'.
- A timer that tracks the users progress.
- Post successful minesweeper scores to the leaderboard and on Airtable.

#### PostMVP

- Improve UX with animations and advanced CSS
- Use forms to edit only the name of leaderboard posts that the user is responsible and update Airtable.
- Allow user to choose difficulty level (board size and number of "mines")
- Add difficulty-level field to Airtable and create algorithm to give user scores based on time and difficulty level

## Project Schedule

| Day    | Deliverable                                | Status     |
| ------ | ------------------------------------------ | ---------- |
| Jan 20 | Proposal Approval / Airtable Setup         | Complete   |
| Jan 20 | Component Creation / Get, Set, Edit Data   | Complete   |
| Jan 21 | Cell Revealing / Timer                     | Complete   |
| Jan 22 | Jan 21 cont'd / Post Scores to Leaderboard | Complete   |
| Jan 23 | Advanced CSS                               | Complete   |
| Jan 25 | Deployment                                 | Complete   |
| Jan 27 | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested |
| ------------------------- | :------: | :------------: | :-----------: |
| Proposal                  |    H     |      3hrs      |     4hrs      |
| Airtable setup            |    H     |     .5hrs      |     1hr       |
| Game Board                |    H     |      1hr       |     8hrs      |
| Cells                     |    H     |      3hrs      |     0.5hrs    |
| Timer                     |    H     |      2hrs      |     4hrs      |
| Game Play                 |    H     |      6hrs      |     5hrs      |
| Leaderboard               |    H     |     .5hrs      |     5hrs      |
| Posting to Leaderboard    |    H     |      4hrs      |     2hrs      |
| Play Again?               |    H     |      2hrs      |     6hrs      |
| Advanced CSS              |    H     |      5hrs      |     5hrs      |
| Total                     |    n/a   |     29hrs      |     36.5hrs   |

## SWOT Analysis

### Strengths:

As far as functionality and UX design go I know exactly what I want. I can circumvent the hours of brainstorming required for both of those tasks, and will better spend my effort carefully planning the logic of game-play.

### Weaknesses:

Especially in the realm of game-play I recognize the lack of detail in my plan. A majority of class exercises dealt with the basics of React and GET/POST/PUT/DELETE requests, so outside resources and careful planning will guide me towards MVP.  My component hierarchy is a solid foundation.

### Opportunities:

I am extremely excited at the prospect of pushing my base knowledge of React to the limits. Getting, Posting, Putting, and Deleting from API's is extremely important in business application, and I see no better way to showcase my understanding of those concepts than in an interactive project that I am passionate about.

### Threats:

The two largest challenges I anticipate are updating the leaderboard (so that rankings are re-assigned and displayed in order), and dealing with gameplay (the revealing of hidden cells).
