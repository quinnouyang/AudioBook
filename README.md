# AudioBook (Front-end)

> Part of a HackIllinois 2023 project with [@jacobko57](https://github.com/jacobko57). See our hastily written [devpost](https://devpost.com/software/audiobook).

> This is the **just the front-end**. See our "back-end" [here](https://github.com/jacobko57/music-ereader-nlp), where we house our custom machine learning model (details below).

> :warning: This doesn't fully work at the moment, despite looking (and sounding, heh) cool...

### Synopsis (*in theory*)

AudioBook is a browser-based e-reader that enhances your digital reading experience by dynamically generating and "playing" music based off what you read, as you read it (i.e. as if there was a movie theme for your chapter book).

To analyze what you read, we use custom-trained machine learning model powered by [Microsoft Azure's Cognitive Service](https://azure.microsoft.com/en-us/products/cognitive-services/language-service/ ) to perform [named-entity recognition](https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/custom-named-entity-recognition/overview) on text–fancy speak for "a magical computer identifies the sentiment, etc. of text." Our model generates sentiments (~~or rather, movie genres~~) from the words you read in real-time (~~or rather, hard-coded strings I gave up on PDF-to-text conversion~~) to inform music generation.

To generate music, we use [Spotify's Web API](https://developer.spotify.com/documentation/web-api/) to queue songs using the generated sentiments as search parameters. This yeilds a (hopefully) fitting track to what you're reading, and queues that automatically.

<img width="720" alt="Homepage hero" src="https://user-images.githubusercontent.com/90884224/221733589-09f273a8-72fe-4171-b441-ab4919216bea.png">

<img width="720" alt="Homepage information" src="https://user-images.githubusercontent.com/90884224/221732964-efff2838-5d20-4ec8-a85e-a617593c6173.png">

## Development

> Your typical Next.js application.

Install dependencies with a Node.js package manager (we use `npm`) and run the development server.
```
npm i
npm run dev
```
For production, build the application and run that build.
```
npm run build
npm run start
```

## What's broken/missing

*Hahaha...*
- You cannot authenticate your Spotify account access through us.
  - OAuth errors on production. (I speedran deployment in 5-minutes give me a break.)
  - Spotify seemingly forbids non-Premium accounts (a "feature" and not a bug??)
- We haven't replicated song queueing on the front-end. So yeah, we don't play music lol.
- Text analysis does not work.
  - Azure services have not been fully integrated with the front-end. Works in our ["back-end"](https://github.com/jacobko57/music-ereader-nlp) though...
  - Analysis is hard-coded lmao, pls don't try to find it in the code...
- PDF upload is effectively useless.
  - I gave up on managing global state to persist a PDF across pages on the client-side.
  - The e-reader is currerntly hard-coded to a few chapters of Rick Riordan's [*Percy Jackson & the Olympians*](https://github.com/quinnouyang/AudioBook/blob/main/assets/percy-jackson.pdf).
- Our rickroll link is broken. See [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ).
