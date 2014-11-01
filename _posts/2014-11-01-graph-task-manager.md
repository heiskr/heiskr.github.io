---
layout: post
title: Graph Task Manager
---

Working on different teams over the years, I've used more "project management" systems than I care to list.

I personally prefer systems that have limited options that can be used flexibly. A particular task should have a title, description, a reference ID, comments, labels/tags, dependencies, priority, and whether its open or closed. Anything more than that, and members of the team seem to endlessly disagree on what different fields mean.

There's a variety of issues to consider in designing these sorts of systems. In particular, these are the issues that seem to come up repeatedly regardless of which system you use:

1. Breaking down tasks into sufficiently small enough units.
2. Identifying dependencies between tasks.
3. Prioritization.
4. Assignment.

I'd go as far as to say almost all "miscommunication" issues I've seen, a word managers and bosses love to use, actually fall into one of these buckets.

Wouldn't it be great if the task manager just automated these capabilities? In fact, it isn't even all that hard.

For (1), you would just use [mind mapping](http://en.wikipedia.org/wiki/Mind_map) to create tasks. This pattern seems to be how most people think about what needs to get done. Why not just skip right ahead to this visual approach?

For (2), you would just list the dependencies by referencing the other tasks. Most task management systems provide this capability, but they don't really _use_ it. Tasks with outstanding dependencies should always be below in the queue.

For (3), if you combine knowledge in (2) and also add some way to score priority, the system should then be able to automatically prioritize your backlog.

For (4), simply allow a person to only allow themselves one task at a time. Humans can't really multitask anyways. This simple step clears out a ton of ambiguity about who is working on what.

I find it crazy that with all the difficult problems technology has solved, group task management seems unsolved. I don't know if these solutions would work for all scenarios, but probably worthy of an experiment.

Thoughts, comments? Let me know!
