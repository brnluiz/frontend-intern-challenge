# Front-end Intern Challenge

This repository is an implementation for the Chaordic front-end intern challenge. It implements the layout placed on the Layout folder.

## Details about the implementation
- When the link is shortened, there is no transition effect as the GIF shows
- The real implementation would use Redux + Redux Saga to manage the states, but I used only the ReactJS state instead (for the sake of simplicity)
- I still don't have a Photoshop license, so the measures are not exactly the same of the PSD (and I preferred rem and % instead)
- As I created it as a gulp project and I am fetching the JSON, it need to be served from a http server (the browsers don't allow the access of the JSON through a file:// request). To use it properly, run:

```
npm install
npm install --global gulp
gulp watch
```

Cheers ;)
