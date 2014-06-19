---
layout: post
title: Min, Hypothetical HTML Templating
---

There's a large number of HTML templating systems out there. Every language seems to have its own. I'm sure I could list at least 30 from the top of my head.

Instead of categorizing by language, let's consider syntax. Most will fall into one of two groups. Either they maintain the feel of HTML and add things like variables, if, each (such as Mustache), or they go completely dependent on whitespace and remove as much syntax as possible (such as Jade).

What if we found something in between? Inspired by Stylus, what if we start with HTML, and reduce down where we can by relying on whitespace.

This post is the beginnings of that idea. It's not a fully formed idea yet, but let's see where this goes.

------

Let's reduce HTML to its core bits, in the style of Stylus.

Let's start of with a basic HTML page:

        <!doctype html>
        <html>
            <head>
            </head>
            <body>
                <div id="page" class="modified">
                    <img src="/kitten.png" />
                    <h1>
                        Welcome to this home page!
                    </h1>
                    <a class="button" href="/logout">
                        Logout from this site
                    </a>
                    <ul>
                        <li>
                            <a href="/section1">
                                Section 1
                            </a>
                        </li>
                        <li>
                            <a href="/section2">
                                Section 2
                            </a>
                        </li>
                    </ul>
                    <input type="checkbox" checked="checked" />
                </div>
            </body>
        </html>
        <!-- Page done -->

So first off, we can use indentation, good line breaks, and knowledge about HTML tags to know when to close them. So let's get rid of close tags first.

        <!doctype html>
        <html>
            <head>
            <body>
                <div id="page" class="modified">
                    <img src="/kitten.png">
                    <h1>
                        Welcome to this home page!
                    <a class="button" href="/logout">
                        Logout from this site
                    <ul>
                        <li>
                            <a href="/section1">
                                Section 1
                        <li>
                            <a href="/section2">
                                Section 2
                    <input type="checkbox" checked="checked">
        <!-- Page done -->

Wow, already so much shorter! Do we really need the `>` after each tag? I think not.

        <!doctype html
        <html
            <head
            <body
                <div id="page" class="modified"
                    <img src="/kitten.png"
                    <h1
                        Welcome to this home page!
                    <a class="button" href="/logout"
                        Logout from this site
                    <ul
                        <li
                            <a href="/section1"
                                Section 1
                        <li
                            <a href="/section2"
                                Section 2
                    <input type="checkbox" checked="checked"
        <!-- Page done

Even simpler! It's common in CSS to refer to IDs by a `#` and classes by `.` so let's go ahead and implement that.

        <div #page .modified
            <img src="/kitten.png"
            <h1
                Welcome to this home page!
            <a .button href="/logout"
                Logout from this site

Neat! And let's make comments a little easier

        <- Page done

Now we probably want some variables like every templating system known to man.

        <img src="{url}"

What if we instead need it to descend down a path? No problem.

        <img src="{data.url}"

We should probably assume this will be HTML escaped. But let's say for this case we want the raw data.

        <img src="{#safe data.url}"

And if we really want the `{}` we can just escape them

        \{ \}

We should be smart about interpreting variables. Like when a boolean attribute is set by a variable.

        <input type="checkbox" checked={data.enabled}

Or when provided as a class.

        <div #page .{classNames}

Maybe we'd like to do some expressions? No problem.

        <a href="{url ? url : '#'}"

Many templating systems have some way of doing "block expressions", such as conditionals, looping, and other types of helpers. Maybe we want the html to depend if the user is logged in or not. Let's borrow from Handlebars again.

        <!doctype html
        <html
            <head
            <body
                <div #page .{classNames}
                    <img src="{#safe data.url}"
                    <h1
                        Welcome to this home page!
                    {#if loggedIn
                        <a .button href="/logout"
                            Logout from this site
                        <ul
                            <li
                                <a href="{link[0].url ? url : '#'}"
                                    {link[0].title
                            <li
                                <a href="{link[1].url ? url : '#'}"
                                    {link[1].title
                        <input type="checkbox" checked={data.enabled
                    {#else
                        <a .button href="/login"
                            Login to this site
        <- Page done

It's also common to be able to iterate over loops.

        <ul
            {#each link
                <li
                    <a href="{this.url ? url : '#'}"
                        {this.title

We can introduce a little Coffee here as well.

        <ul
            {#each link
                <li
                    <a href="{@url ? url : '#'}"
                        {@title

There's really no limit to what we could do with this block expressions though. We can do what's often called "filtering" in other systems.

        {#titleCase @title

We could even provide the contents of the block to the filter.

        {#markdown
            # Markdown
            **Subtitle**

Some other common capabilities include: Macros (a.k.a mixins).

        {#macro "title", arg
            <h1
                {arg
        {#title "Welcome!"

Includes.

        {#include "../template.html"

Inheritance.

        {#block title
            <h1
                Hello!

... (another file)

        {#extends title
            <h2
                Goodbye!

Operators.

        {#if 1 > 0 and 1 != 5
            It's true!

We can keep the feel of HTML and remove redundancy at the same time. Neat!

        <!doctype html
        <html
            <head
            <body
                <div #page .{classNames}
                    <img src="{#safe data.url}"
                    <h1
                        Welcome to this home page!
                    {#if loggedIn
                        <a .button href="/logout"
                            Logout from this site
                        <ul
                            {#each link
                                <li
                                    <a href="{@url ? url : '#'}"
                                        {@title
                        <input type="checkbox" checked={data.enabled
                    {#else
                        <a .button href="/login"
                            Login to this site
        <- Page done
