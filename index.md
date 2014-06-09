---
layout: default
title: Welcome
---

I'm a web client engineer and audiovisual interactive artist in Portland, OR.

Current Activities
------------------

- Working for [Nike Digital Sport](https://secure-nikeplus.nike.com/plus/) as client engineer
- Building [Sagefy](http://sagefy.org/), an adaptive, collaborative, and open learning platform.
- Maintaining [ConceptCodify](http://conceptcodify.com), a card sorting app.
- Planning an upcoming web music creature game.
- Usually a course on [Coursera](https://www.coursera.org/), or a book, on programming, design, or learning psychology.
- Yoga everyday.

Links
-----

- [Resume](/resume)
- [Github](https://github.com/heiskr)
- [Twitter](https://twitter.com/heiskr)

Student Projects
----------------

The projects listed here are from my student days (~ 2004-2010).

<ul>
    {% for project in site.data.projects %}
        {% if project.featured %}
            <li>
                <a href="/projects/{{project.slug}}">{{project.title}}</a>
                {{project.brief}}
            </li>
        {% endif %}
    {% endfor %}
</ul>

<p><a href="/projects">See more projects &gt;</a></p>
