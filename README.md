# Versus.lol

### What is this?

This is an app build with Meteorjs that my younger brother and I have created for the Riot Challenge, our idea is simple, we would like that LOL can have a new game mode where all players before the game can to talk in a chat, laugh a while and then decide which side they want to play, this can be 1vs1, 2vs2...5vs5.

The most interesting part is that all champions would play with the same mastery level, this is an important difference to the type of game Aram.
We believe it would be fun to see games where everyone are not so "good" with a certain champion because all are mastery 1 or where everyone knows play them because they are mastery 5, and with a group of friends this could be a lot of fun.

By the way for this demo we did that all summoners start with a random champion with the only condition that everyone had the same level in mastery of champions, that makes things interesting. 

The summoner who created the room is the only one who can start the match and choose the level of mastery for the game.
For this demo the invitations are from a "share link", with LOL that could be just  a simple invitation game, 
but for these web demo the share link works :v 

Finally, We have to say that this does nothing by itself, it's just a demo, after the match is made  nothing happens because we are not integrated with LOL, and we don't want a versus.lol page for this kind of game, we really want this type of game inside LOL, it just a simple idea that occurred to us for this Riot Challenge, thanks Riot.
Julián and Luis.

### Why MeteorJs and MongoDB ?

We play with Meteorjs and MongoDB since two years ago, Meteorjs is great to build Reactive stuff, and everything in this demo use reactivity, for example the chat, when a summoner get into the room, left the room, choose a side, when start the match, all players see everything real time, all is reactive, so Meteorjs
is good with these kind of things and MongoDB is the database integrated with Meteorjs and is great for something that need to scale and change without pain, MeteorJs and MongoDB has a huge comunity and is fun to code with them and make prototypes fast.

A personal challenge for this demo was handle the status of connected users without asking a login and how to use the Riot Api, additionally it is the first time we use version 1.3 (current) of MeteorJS, because is very new, if you are reading these and know something about Meteorjs you can feel me xD.

### UI and UX

This demo is flat, we just use Flexbox concepts for grid and responsive stuff, pure and good css with nice images is a beauty combination, a lot of opacity here, you will see that, all CSS code is in two files global.css and web.css. 
We don't want libraries and frameworks in front-end for something not to big. 

All our code is clean and with comments, go and check.

To see the aplication running visit [Versus.lol](https://www.versus.lol/). The database structure is in [packages/collections](https://github.com/Goluis/riot-contest/tree/master/packages/collections)

## Install
1. Install [Meteor](https://www.meteor.com/install)
1. Clone this branch to your local machine
3. Run `npm install`
4. Run `meteor`

## API Key
in the file [packages/riot-api/riot-api.js](https://github.com/Goluis/riot-contest/blob/master/packages/riot-api/riot-api.js) put your [api key](https://developer.riotgames.com/)
```js
// riot-api.js
this.apiKey = 'your-api-key';
```

## Packages
### Core Packages
| Name | Description |
| --- | --- |
| `app:parties` | Main application package, contains all the logic and front-end. |
| `app:collections` | All collections in Mongodb we are using.|
| `app:riot-api` | Facilitates connection to the Riot Api. |

### Meteor Community Packages
- [kadira:flow-router](https://github.com/kadirahq/flow-router/)
- [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout/)
- [cottz:publish-relations](https://github.com/Goluis/cottz-publish-relations/)