---
layout: default
title: Welcome
---

I'm a web client engineer and audiovisual interactive artist in Portland, OR.

Current Activities
------------------

- Working for [Nike Digital Sport](https://secure-nikeplus.nike.com/plus/) as client engineer
- Building [Subvoko](https://github.com/heiskr/subvoko), interactive music creature experience.
- Building [Sagefy](http://sagefy.org/), an adaptive, collaborative, and open learning platform.
- Maintaining [ConceptCodify](http://conceptcodify.com), a card sorting app.
- Usually a course on [Coursera](https://www.coursera.org/), or a book, on programming, design, or learning psychology.
- Yoga everyday.

Links
-----

- [<i class="fa fa-file-text"></i> Resume](/resume)
- [<i class="fa fa-github"></i> Github](https://github.com/heiskr)
- [<i class="fa fa-twitter"></i> Twitter](https://twitter.com/heiskr)

Posts
-----

<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <time class="post-time">{{ post.date | date: "%-d %B %Y" }}</time>
        </li>
    {% endfor %}
</ul>

Student Projects
----------------

The projects listed here are from my student days (~2004-2010).

<ul>
    {% for project in site.data.projects %}
        {% if project.featured %}
            <li>
                <a href="/projects/{{ project.slug }}">{{ project.title }}</a>
                {{ project.brief }}
            </li>
        {% endif %}
    {% endfor %}
</ul>

<p><a href="/projects">See more projects &gt;</a></p>
