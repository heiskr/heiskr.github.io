---
layout: post
title: "Max for Web"
---

Back when I was a master's student in [intermedia music technology at the University of Oregon](http://pages.uoregon.edu/fmo/home/), I focused a great deal of energy on building audiovisual interactive artwork using [Cycling '74's Max](http://cycling74.com) (then Max/MSP/Jitter). One particular thought that came to me then is, why does this need to be a desktop application? If it were available on the web, it would open many doors to collaboration and data source synchronization.

Now as a JavaScript engineer, I realized the technical challenge would be too great to full replicate this capability in the browser. Simply, the technologies don't exist to support everything Max (or similar software, such as PureData, AudioMulch, vvvv...). It does look like someone attempted this a few years ago but [abandoned the effort](https://github.com/billorcutt/lily/). 

But now that we have the Web Audio API, we would replicate at least a small fraction of what Max can do, and use a minimal amount of new API creation by simply layering over the existing APIs. The performance benefit would make this more realistic, but it wouldn't still be as performant as a full desktop experience.

Thoughts, comments? Let me know below!
