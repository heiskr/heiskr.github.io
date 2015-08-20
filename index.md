---
layout: default
---

_I'm a web client engineer and audiovisual interactive artist in Portland, OR._

Current Activities
------------------

- Working for [Nike+](https://secure-nikeplus.nike.com/plus/) as a JavaScript engineer.
- Building [Sagefy](https://sagefy.org/), an adaptive, collaborative, and open learning platform.
- Building [Subvoko](https://github.com/heiskr/subvoko), interactive music creature experience.
- Usually a course on [Coursera](https://www.coursera.org/), or a book, on programming, design, or learning psychology.
- Yoga.

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
