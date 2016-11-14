# Details about the implementation
- When the link is shortened there is no transition effect as the GIF shows
- The real implementation would use Redux + Redux Saga to manage the states, but I used only the ReactJS state instead (for the sake of simplicity)
- I still don't have a Photoshop installed, so the measures are not exactly the same of the PSD (and I preferred rem and % instead)
- As this I created it as a gulp project and I am fetching the JSON, it need to be served from a http server. If you only open the HTML file on public, it will fail to fetch the JSON. To use it properly, run:

```
npm install
npm install --global gulp
gulp watch
```

Cheers ;)
