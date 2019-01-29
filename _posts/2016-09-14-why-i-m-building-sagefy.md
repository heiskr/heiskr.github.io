---
layout: post
title: "Why I’m Building Sagefy"
---

# Why I’m Building Sagefy

_An open-content adaptive learning platform._

![](https://cdn-images-1.medium.com/max/600/1*QsmOK5NHyJBFs5viVaYCPw.png)

Sagefy logo and homepage text

I would like to share with you some things about a project I’ve been working on since early 2013.

## The challenge

**The greatest opportunity for technology is human learning.** By elevating ourselves, we can accelerate our progress and growth. I’m hoping [Sagefy](https://sagefy.org) shows a different way we can think about learning with technology.

The most important challenge we can address for learning is **ensuring we adapt the content to the learner’s current state of knowledge and skills, as well as their learning goals.** Learners waste time and effort when the content doesn’t tightly fit their prior knowledge. If the content references things the learner doesn’t know yet, or if the content repeats information the learner already knows well… that wastes time and effort and lowers motivation. And if the content is outside of the learning goal, the learner loses focus.

Also, we want to make sure that the learner _isn’t restricted by topic_. Many of our current educational tools make knowledge pay-to-play. We also rely heavily on experts to create selected (limited) content for learners. And where there are open systems with more varied and deep content, the learner doesn’t have a clear path to follow.

We have every reason to want every single person to pursue knowledge in the most time-and-effort efficient means possible. And we want to encourage each person to pursue their interests as deeply as possible.

## What Sagefy is

[**Sagefy**](https://sagefy.org) **is an open-content adaptive learning system.**

[**_Open-content_**](https://en.wikipedia.org/wiki/Open_content) means anyone can view, share, create, and edit content. Wikipedia is probably the most well-known example. Open-content means that Sagefy can grow quickly and reach learning subjects not regularly reached by current educational technology.

![](https://cdn-images-1.medium.com/max/600/1*wt9jkXbFug4XWVVh_uKWaQ.png)

An example of the flow of consensus-based decision making. [https://upload.wikimedia.org/wikipedia/commons/e/ed/Consensus-flowchart.png](https://upload.wikimedia.org/wikipedia/commons/e/ed/Consensus-flowchart.png)

Like most open-content systems, Sagefy works based on a [**consensus-based decision**](https://en.wikipedia.org/wiki/Consensus_decision-making) **making process**. Consensus-based decision making means that instead of relying on a single expert to create content or approve changes, a large community of learners can create the content themselves. Consensus-based systems tend to produce content as high of quality as experts, but in a much larger scale.

![](https://cdn-images-1.medium.com/max/600/1*dT4q1uScSz9T6DMhRJsaLw.png)

In an adaptive learning system, instead of a structured course, the material will adjust and flow based on learner knowledge.

An [**_adaptive learning_**](https://en.wikipedia.org/wiki/Adaptive_learning) system tries to optimize the learning experience based on what the learner already knows and what the learner’s goal is. So instead of a planned and structured course of content, Sagefy presents small pieces of content _based on the learner’s responses_. By basing the experience on prior knowledge and goals, Sagefy hopes to get the most out of the time and effort spent learning any topic of the learner’s choosing.

We can ensure the content matches the learner’s knowledge and goals by…

*   Assessing the learner’s current knowledge.
*   Skipping content the learner already knows well.
*   Backing up when the learner doesn’t know a prerequisite.
*   Repeating content when the learner needs review.
*   Staying focused on content specific to the learner’s goals.

For the time being, I am targeting Sagefy at _independent adult learners_. This target audience makes Sagefy simpler by not dealing with practical concerns of institutional integration. Younger learners tend to be in a classroom setting, which comes with expectations and challenges that would make Sagefy more difficult to build. Some of these challenges include participation requirements, preset curriculum requirements, testing and grades, mitigating cheating, and instructor analytics. Adult learners in institutional settings faces similar practical challenges as well. By focusing on intrinsically motivated learners, I skip, at least initially, many of the more practical concerns of the more traditional classroom and training scenarios.

_Sagefy is completely_ [_open-source_](https://github.com/heiskr/sagefy/) _and freely available._ My motivation is to share knowledge more broadly, more effectively, and with more focus. I’m not interested in making a profit. Money is simply a resource. By removing the concerns of profit, I can focus on making Sagefy the best platform I can imagine for learning.

The combination of _open-content_, _adaptive_, and _free_ positions Sagefy in a way no other learning technology is. This combination means Sagefy can reach a wide variety of learners, all while attempting to provide an in-depth and effective learning experience.

## How Sagefy works

![](https://cdn-images-1.medium.com/max/800/1*aZWxq_aGrXPXUG0v_e8DRw.png)

The three types of entities in Sagefy.

**_The types of things in Sagefy._** There are three types of entities in Sagefy: cards, units, and subjects.

![](https://cdn-images-1.medium.com/max/600/1*1q-J4s3aFBilvvvbSxWabg.png)

A card in a single learning activity. In this example, this is a multiple choice question card.

**Card**. A card is a single learning activity. Examples include a short video, a multiple choice question, or a single math problem. An example question would be, “What is the median of 5, 7, and 10?” Cards are the smallest entity in the Sagefy data structure. A card always belongs to a single unit.

![](https://cdn-images-1.medium.com/max/800/1*tBTZJLN6y4Hz3vFQfJhsxw.png)

Many cards belong to a single unit.

![](https://cdn-images-1.medium.com/max/600/1*D9J9t3JnW2DAj7w_y5-b0g.png)

A unit represents a single learning goal. In this example, the unit is “describe the differences between mean, median, and mode.”

**Unit**. A unit is a single learning goal. A unit is similar to a short lesson. An example would be, “describe the differences between mean, median, and mode.” A unit is the medium size entity in the Sagefy data structure. A single unit has many cards. A unit can require other units before it. A unit belongs to many subjects.

![](https://cdn-images-1.medium.com/max/800/1*4BKRtf69VvKv1q0Jxp3rwA.png)

Units can require other units.

![](https://cdn-images-1.medium.com/max/800/1*4rlrgdGfXxMmbXC70Eu70Q.png)

Many units belong to many subjects.

![](https://cdn-images-1.medium.com/max/600/1*gwvR4uamv5lhnmXlGs66VQ.png)

A subject is a combination of units and other subjects. A collection of units on central tendency might make up one subject, which is part of a larger subject on descriptive statistics.

**Subject**. A subject is a collection of units and other subjects. Subjects are like classes or courses, anything from like a short workshop to an entire degree program. Examples could be, “measures of central tendency”, “descriptive statistics”, or “first statistics course”. A subject is the large size in the Sagefy system. A subject contains many units and other subjects.

* * *

**_The learner’s experience._** For the learner, Sagefy is a simple, focused flow that allows for some choice in the process.

1.  After signing up, the learner finds a subject the learner would like to learn.
2.  Then, once starting the subject, the learner will see the tree of units that represent their progress to the learning goal.
3.  Next, the learner can choose a unit, with one choice recommended automatically.
4.  The learner engages with the content, in the form of videos, audio, written pages, multiple choice questions, short answers… until the learner has learned the unit.
5.  Finally, the learner continues to choose units and learn them until the overall learning goal is complete.

![](https://cdn-images-1.medium.com/max/800/1*9NTQTfc-zHvSGOw8lrXjsw.png)

Choosing the “An Introduction to Electronic Music — Foundation” subject.

![](https://cdn-images-1.medium.com/max/800/1*H6rOeh8TPxs4GnfQMEUB5w.png)

The learner’s progress towards the subject, in the form of a tree of units.

![](https://cdn-images-1.medium.com/max/800/1*h-0VYp1613Nv2uQ6iA06jQ.png)

The learner chooses a unit.

![](https://cdn-images-1.medium.com/max/800/1*uD02b_BmiaQaqN5gtB-pNg.png)

The learner engages with the content until the learner has learned the unit. Sagefy shows the learner’s progress in a bar across the bottom of the screen.

* * *

**_The content creation process._** Most open-content sites advertise “anyone can edit.” And it’s a true statement. However, that doesn’t mean you should expect to go to Wikipedia, make changes on a popular page, and still see those changes still there even one minute later. There’s an implied process instead:

1.  Go to the talk page, and describe the changes you’d like to make.
2.  Build a consensus with those who work on that content to make the change.
3.  Resolve any dissenting opinions.
4.  Make your content change.

Discussion is an inherit part of any consensus-driven process. So for Sagefy, rather than allowing direct editing, the content process requires discussion. And where else to post other than in the topic itself?

So to create a new unit, let’s say “describe the differences between mean, median, and mode”, the process in Sagefy would look like:

![](https://cdn-images-1.medium.com/max/600/1*8ic10Zg6T8gxd2EMm_Iwcw.png)

An outdated screenshot. A proposal with enough votes approving will update the entity automatically, focusing the content creation process on discussion. You can also see Sagefy is still rough around the edges.

![](https://cdn-images-1.medium.com/max/600/1*WKR4Kt0eNTvguEK9e8mrtg.png)

An outdated screenshot. When you create a topic or post, you can choose between a regular post, a proposal, or a vote.

1.  Go to the discussion section of the relevant subject, and make a type of post called a _proposal_.
2.  Describe the content you’d like to add by filling out the form. (So there’s no overhead.)
3.  Summon enough people to agree with your proposal. They can do so using the _vote_ post type.
4.  If someone has voted down your proposal, you can work with them to resolve differences or try to create a different proposal instead.
5.  When there are enough approving votes and almost no down votes left, the change will automatically occur. ([I have documented the specific math](https://github.com/heiskr/sagefy/wiki/Planning%3A-Contributor-Ratings).)
6.  Sagefy keeps a history of all changes made and proposed to every card, unit, and subject.

Because Sagefy is an adaptive learning system, content creators get statistical indicators of how different content performs with real learners. Hopefully, these statistics will help us to improve content and experiment to find teaching opportunities.

* * *

**_The adaptive learning process._** We know that [one-on-one learning](http://www.npr.org/sections/health-shots/2015/09/08/438592588/one-tutor-one-student-better-math-scores-less-fear) tends to have the highest effectiveness. Why? Because there’s an immediate feedback from the learner to the mentor. Does the learner already know the subject? Skip ahead. Missing something? Let’s back up. Bored? Let’s switch to something else. This interaction is easy to do one-on-one, but basically impossible when there’s multiple learners per mentor. Technology, however, makes this interaction widely scalable.

If you’re interested in getting into specific of what I’ve built so far and planned, [I have that documented](https://github.com/heiskr/sagefy/wiki/Planning%3A-Sequencer). I’ve tried to come up with something simple, easy to calculate, and fast on a server, while also general enough to work for a wide variety of topics. I hope someone smarter than me comes along and finds a much better way to do it than I have, but what I have is enough to get started with showing the concept.

* * *

## Sagefy’s ideas

After spending a few years reading of reading books and articles on educational research, I’ve come to the conclusion there are seven main ideas that come up repeatedly:

1.  Do one thing at a time.
2.  Set and adapt to goals.
3.  Adapt to the learner’s prior knowledge.
4.  Build the graph.
5.  Dive deep, going beyond rote memorization.
6.  Connect the learning experience with real-life examples.
7.  Get learners to learn together.

* * *

![](https://cdn-images-1.medium.com/max/600/1*xeNchmCOIgT92zDQWgjf0w.png)

“Do one thing at a time.” Sagefy tucks away other options behind a menu, so the learner can solely focus on the single task at the time.

**Do one thing at a time.** [Multitasking is a well established myth](http://www.apa.org/monitor/oct01/multitask.aspx). When we think we’re multitasking, instead what we are really doing is rapidly context-switching. Multitasking increases the time to complete individual tasks. We also can’t really learn more than one concept at a time, either. It’s better to focus on learning one concept, or one integration of concepts, at a single time. “Do one thing” also means cutting clutter and tucking away everything that isn’t the task at hand, creating focus.

![](https://cdn-images-1.medium.com/max/600/1*Dxz4Y7E9pK0zQXupxoKcMA.png)

Sagefy shows how the content creators organized the information, in the form of a tree of unit requirements.

**Set and adhere to goals.** Focus comes up again. When we present content to the learner outside of their goal, the learner loses motivation. Sometimes we do this mistakenly, other times we do this out of passion for the subject. Either way, by clearly articulating the goal the learner, the learner knows what parts of the content are primary, and which parts are supplementary.

**Adapt to the learner’s prior knowledge.** This idea is the one Sagefy focuses on the most. I’ve iterated this idea quite a bit throughout this article so far. If we task a learner with material they don’t have the prerequisite knowledge for, there’s no place to fit the new information in to. If the learner already knows the material, the learner gets bored and loses motivation. By optimizing for prior knowledge, we can reduce the time and effort it takes to learn new things. [Here’s](https://www.nap.edu/read/9853/chapter/6#78) [some](http://rer.sagepub.com/content/69/2/145.abstract) [research](http://onlinelibrary.wiley.com/doi/10.1002/tea.3660160403/pdf) [resources](https://www.nap.edu/read/10019/chapter/6#83) for further investigation.

**Build the graph.** Our learning system works not by just absorbing new material, but by connecting existing knowledge to new knowledge. Because of this, its critical to show how new information fits into the learner’s existing schema of what they are learning. Without this organizational map, learners can have difficulty storing the new information effectively.

![](https://cdn-images-1.medium.com/max/600/1*h-0VYp1613Nv2uQ6iA06jQ.png)

By showing the goal to the learner, we help create focus and motivation.

![](https://cdn-images-1.medium.com/max/600/1*DYvmOPcjl_urrj2BbNOiiA.png)

A variety of card types allows for content creators to both ‘dive deep’ and connect with real-life examples.

**Dive deep, going beyond rote memorization.** It would be silly to expect that someone who just memorized the names of the different joints in the body to then immediately perform knee surgery. Knowing the information isn’t enough. We also need to know how the information relates to other information, as well as how to apply that information to a variety of contexts. Those are separate pieces of knowledge. And its also not enough to expect learners to have something memorized for life after the first time they see the information. The learner needs to review information regularly to keep the memory strong.

**Connect the learning experience with real-life examples.** How many of us have been in a math class where the teacher goes very deep in abstractions, proofs, etc. without explaining how the concept is relevant? That’s the counter of this principle. When we show the learner the relevance of the material and also make connections to something tangible they already know, the learner integrates the material into their memory more quickly.

**Get learners to learn together.** By learning together, we can avoid gaps in knowledge. Also, we can work with someone at a similar level of prior knowledge to form knowledge, especially about how we can apply that knowledge to different contexts and different understandings. Of the ideas here, this idea has the most nuance. A learner with little prior knowledge would normally benefit from individual study before joining a group of learners. I haven’t figured out a good way to integrate social learning into Sagefy other than working together to create content. But, social learning is a topic I’d like to pursue more in the future.

There’s not widespread dissent on any of these points, though there are some nuances. Despite the repetition of these points throughout the literature, many of our current learning systems fail to take full advantage of these ideas.

* * *

## What makes Sagefy different

In this section, I’ll talk about some of the existing learning systems and how Sagefy would compare to them.

![](https://cdn-images-1.medium.com/max/600/1*kDvs12idIj-7-JoETbl-wg.jpeg)

The classroom suffers from both a lack of scale and adaptability. [https://commons.wikimedia.org/wiki/File:Andrew\_Classroom\_De\_La\_Salle\_University.jpeg](https://commons.wikimedia.org/wiki/File:Andrew_Classroom_De_La_Salle_University.jpeg)

[**_Classroom learning_**](https://en.wikipedia.org/wiki/Classroom)**_._** When we think of education, the classroom comes to mind first. The classroom can be a wonderful place to learn, to interact with other learners, and engage the content fully. The best classes motivate and inspire. Unfortunately, many classes don’t meet this bar. With so many learners, it is very difficult to create a system where the the system adapts the content tightly to the learner’s knowledge and goals. The classroom isn’t a free thing by any means, either, limiting its reach. Some teachers do a wonderful job of staying focused, showing examples, showing organization, getting learners to learn together, and going deep with the materials. But not all do. Probably not most.

![](https://cdn-images-1.medium.com/max/600/1*y363FFPgHkLwfp-89zOMxQ.png)

A screenshot of Moodle, an open-source learning management system. Designed to support in person classes, but sometimes used to teach a course by itself. [https://commons.wikimedia.org/wiki/File:1\_MyHomeExample.png](https://commons.wikimedia.org/wiki/File:1_MyHomeExample.png)

[**_Learning management systems_**](https://en.wikipedia.org/wiki/Learning_management_system)**_._** Learning management systems, or LMSs, are the most common educational technology used. Schools probably use [Blackboard](http://www.blackboard.com/) most frequently. The intention of the technology is to support or replace the classroom experience. The LMS’s features are almost completely driven around the classroom model. So most of the same issues with the classroom would apply to LMS, including both scale and adaptability. Most LMSs are not adaptive. [SmartSparrow](https://www.smartsparrow.com/) is one example of an LMS that is.

![](https://cdn-images-1.medium.com/max/600/1*A691T2AHx2_SBWYp6fuNmA.png)

A screenshot from Cognitive Tutor, a current adaptive learning system. The interactions it can produce are surprisingly rich and detailed. That said, it takes a long time to produce content for the system. [https://www.carnegielearning.com/learning-solutions/software/cognitive-tutor/](https://www.carnegielearning.com/learning-solutions/software/cognitive-tutor/)

[**_Current adaptive learning systems_**](https://en.wikipedia.org/wiki/Adaptive_learning)**_._** Current adaptive learning systems pair adaptive learning algorithms with expert created content. Usually, these systems support either classroom education or training. The adaptive ability, paired with the ability to create highly customized content for the given subject, means these systems currently provide some of the best in class experiences for learners. That said, making an adaptive learning system takes time and effort. I’m not aware of any of these systems that support open-content or are free for public use. I’m also not aware of any that deal with the groups of learners scenario. Some examples of this are [Cognitive Tutor](https://www.carnegielearning.com/learning-solutions/software/cognitive-tutor/), [Aleks](https://www.aleks.com/), [LearnSmart](https://www.mheducation.com/highered/platforms/learnsmart.html), and [Knewton](https://www.knewton.com/).

![](https://cdn-images-1.medium.com/max/600/1*x1xgAdgZ7KZnQK5p0sdx3w.png)

Screenshot from Khan Academy, a massively open online course. Here we see a ‘blackboard’ style video explanation. Some of this content is best in class. [https://commons.wikimedia.org/wiki/File:Khan\_Academy\_%282012%29.\_Transfer\_Pricing\_and\_Tax\_Havens.webm](https://commons.wikimedia.org/wiki/File:Khan_Academy_%282012%29._Transfer_Pricing_and_Tax_Havens.webm)

[**_Massive open online courses_**](https://en.wikipedia.org/wiki/Massive_open_online_course)**_._** Massively open online courses provide a LMS type of experience for free or low cost to a large audience. A few examples are [Khan Academy](https://www.khanacademy.org/), [Coursera](https://www.coursera.org/), [Duolingo](https://www.duolingo.com/), and [EdX](https://www.edx.org/). MOOCs scale widely, but still rely on expert created content and generally are not very adaptive. Some have some adaptive or adaptive-like features, like quizzes or practice questions that change in difficulty. Most MOOCs have the same disadvantages as LMSs. The quality varies widely; some of the content is best in class, some of it is thrown together.

There’s a few examples of MOOC-like platforms that do things a little differently. Udacity involves more practice, which is a plus, but still along the same lines. Duolingo focuses on languages, and uses gamification techniques. Khan Academy has a beautiful tree of knowledge, showing prerequisites easily, and again integrating practice heavily into the system. A few of the alternative MOOCs focus on problem-based learning instead of lecture-based.

![](https://cdn-images-1.medium.com/max/600/1*aJCUQacCwS8IRtNNJ3r3Fg.png)

A screenshot of Anki, a flash card system based on spaced repetition. [https://commons.wikimedia.org/wiki/Category:Anki#/media/File:Anki.png](https://commons.wikimedia.org/wiki/Category:Anki#/media/File:Anki.png)

[**_Flash card systems_**](https://en.wikipedia.org/wiki/List_of_flashcard_software)**_._** Flash cards systems are super common. Usually, these are learner created content, and provided for free. Some of these have some adaptive qualities, like [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition). Spaced repetition means that a learner will review the material after 1 day, then 3 days, then 7 days, and so on, until the material is strongly stored in long-term memory. Flash card system though don’t go beyond memorization. A few examples of these systems are [Anki](http://ankisrs.net/) and [SuperMemo](https://www.supermemo.com/).

![](https://cdn-images-1.medium.com/max/600/1*S6Z0TghQ32gIRPVkEiqTaw.png)

A screenshot from Wikipedia, the largest open-content system that exists. [https://commons.wikimedia.org/wiki/Wikipedia#/media/File:Www.wikipedia.org\_screenshot\_2013.png](https://commons.wikimedia.org/wiki/Wikipedia#/media/File:Www.wikipedia.org_screenshot_2013.png)

[**_Open content systems_**](https://en.wikipedia.org/wiki/Open_content)**_._** Current open content systems provide deep, high quality content on a variety of topics. However, they do not have adaptive qualities generally. The most common and largest example is [Wikipedia](https://www.wikipedia.org/).

* * *

## The backstory of Sagefy

Like most people, I considered the means of learning while attending school. As a technologist, I often considered how I would do things differently, or how to optimize the experience. For every wonderful, inspiring, enriching, and useful course I’ve taken over my life, there have been at least three or four that weren’t. During my time in graduate school, I also had the opportunity of getting to work on [educational websites for the University of Oregon](https://library.uoregon.edu/cmet).

After finishing school, it became clear immediately to me how many of my peers were struggling. All of us have been through 17 or more years of the education system. 17 years of largely forgotten material. 17 years of preparing to be adults in this society. Many of my peers still, about seven or eight years later, work either as baristas at Starbucks or clerks at the Apple store. I’m sorry, but no one is buying a house on $40k a year when there’s also $30k in student loans. I know, first world problems. I’ve been lucky to find myself in a career track in software, especially given that my degrees are in art and music.

> It takes about 17 years in the education system to become considered a contributing adult in our society.

17 years is just too long. 17 years is too long to become a contributing adult. Our expectations of how learning should work and what really works are so far out of sync. (I’m not saying Sagefy is _the_ solution to that, just that we need to be having the conversation.)

There was a time in my life, about 2012 or so, I got hooked on watching [TED videos](https://www.ted.com/). Yes, yes, a great deal of it is the same inspirational fluff on repeat. Some of it _is_ unique, however. During that time, my life had put me in this place and position. I was just following the course in front of me. And I started to ask myself, what do I really want to do? _What’s the best thing I can contribute?_

There’s so many huge challenges in front of us, more than any other time in human history. Global warming, energy, water, technological change, population growth, healthcare, debt. Just a few examples. I will never be a environmental scientist, a politician, a mathematician, a neuroscientist, or a rocket engineer. I’m not equipped to meet any specific challenge. **But the greatest investment we can make is on learning.** If I can’t solve it, I can help someone who can.

> I asked myself what the best thing I can contribute would be. I came to the answer that the best investment is on learning.

I started reading on learning science. It naturally fit into my knowledge and skills with user experience research. First, I started mostly with some [really](https://www.amazon.com/dp/0716786540) [great](https://www.amazon.com/dp/0470484101) [books](https://www.amazon.com/dp/0787988448). From there, I started to get into published articles, both academic and journalistic, about learning science. I started to form ideas of the best learning system I could imagine.

![](https://cdn-images-1.medium.com/max/600/1*H4pF2CPuAndPjnvR8xeeew.png)

An early wireframe from Sagefy.

My friend Noah came for a visit for a few days in early 2013. I talked about my reading and my ideas. He asked me, _“why don’t you just build it?”_ At first it didn’t seem possible. But I started thinking about it. I started thinking about the [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product). And even though I’m no expert at any specific part of it, I knew enough to put something together. I started working on Sagefy that April.

![](https://cdn-images-1.medium.com/max/600/1*DepXJSnweY5eP0vSKGSVJA.jpeg)

The equations for Bayesian Knowledge Tracing. It is simpler than it looks. P(L) is probability learned, P(S) is probability of “slip”, or making a mistake, and P(G) is probability of “guess”. P(T) is probability of “transit”, or how likely the learner learned the content from this material. From [https://www.researchgate.net/publication/249424313\_Individualized\_Bayesian\_Knowledge\_Tracing\_Models](https://www.researchgate.net/publication/249424313_Individualized_Bayesian_Knowledge_Tracing_Models)

I already knew how to build a web API and a web UI. So as I started [planning](https://github.com/heiskr/sagefy/wiki/Planning) and working on those, I researched the algorithms side. I’ve taken quite a few online courses on different platforms, one of which being Ryan Baker’s [Big Data and Education](http://www.columbia.edu/~rsb2162/bigdataeducation.html) course. Particularly, I understood the [Bayesian Knowledge Tracing](https://www.youtube.com/watch?v=_7CtthPZJ70) section and saw a perfect fit for what I was trying to build. Now, an MVP [exists and is live](https://sagefy.org), ready for use.

I realized after building the MVP that no one would understand what I built with no content. So the last few months, I’ve been building a small [course on Electronic Music,](https://sagefy.org/sets/CgDRJPfzJuTR916HdmosA3A8) the area of my masters. The first few units are live.

## The future of Sagefy

I realize, as much as anyone, that Sagefy _most likely won’t succeed_. I’m okay with that. There’s so many things that can go wrong, and more importantly, so many right things that may not happen. Lack of interest, difficulty gaining a user base, challenges with creating content, or improving the adaptive algorithms… there’s many challenges ahead. My biggest hope is that, even if Sagefy isn’t successful, that Sagefy may _inspire a conversation_ about learning in this technological era. Sagefy doesn’t have to be big or successful, but _some system_ does need to be successful. _The opportunity is too great to ignore._ For me, the best thing I can do is get some ideas out there about how to account for how people really learn in a learning system. Even if I fail, I can demonstrate that an alternative is both possible and realistic. Of course, if Sagefy does succeed, even better.

**I hope that someday, Sagefy will become a place where anyone can come to learn anything, regardless of what they already know.** And then, be able to achieve their learning goal as quickly as possible. Whether its something small, or an entire degree program, Sagefy will have all the information available in a format realistic with how people learn. I realize some subjects we can only teach in person, but there’s so many subjects that _we could_ teach online that we don’t currently.

I foresee a time too where some organizations, like schools, corporations, non-profits, and governments, would want to run their own instances of Sagefy for educational or training purposes. My current financial vision is Sagefy would be _donation supported_ for the public facing instance, and that support services would be available for private installations.

* * *

If you’d like to know more about [**Sagefy**](https://sagefy.org/), I have a [3-minute video overview](https://sgef.cc/overview). [Feedback is welcome](https://sgef.cc/feedback). [Sign up for updates](https://sgef.cc/devupdates).

Thank you for taking the time out of your day to read this article. If you enjoyed this article, **clap** 👏 **below**. _Thanks!_

By [Kevin Heis](https://medium.com/@heiskr) on [September 14, 2016](https://medium.com/p/731eb0ceceea).

[Canonical link](https://medium.com/@heiskr/why-im-building-sagefy-731eb0ceceea)

Exported from [Medium](https://medium.com) on January 29, 2019.
