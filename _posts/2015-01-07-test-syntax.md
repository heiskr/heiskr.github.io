---
layout: post
title: Test Syntax
---

There's no shortage of testing frameworks. Let's look at some of the syntaxes.

A simple one is just a list of functions with assertions within them.

    test('calculate the mean', function()
        ...
        assert(mean == 2)
    )

This is usually how TAP style tests are done. While simple, it doesn't really keep things organized.

Perhaps the most common is to force object-oriented programming on testing. For example, JUnit or Python's native unit test. This model uses the class as a component and functions as tests:

    class ComponentTest(Test)
        setup = function()
            ...

        teardown = function()
            ...

        test_calculate_mean = function()
            ...

It doesn't really fit though. There's no really no object representation here, just a collection of functions.

Some frameworks that are very popular, like RSpec, Jasmine, and Mocha, do a similar approach, but just use functions instead.

    describe('Component', function()
        before(function()
            ...
        )

        after(function()
            ...
        )

        it('should calculate the mean', function()
            ...
        )
    )

This is pretty gravy overall, but not a huge step from the OOP model.

It's pretty easy to see the evolution happening in the last three examples. But some testing frameworks really step away from this model. Like Cucumber based tests.

    In order to make sense of the data
    As a user
    I want to see the mean

    Given I have provided a list of numbers
    When I run the function
    Then I should get the mean

    given('I have provided a list of numbers', function()
        ...
    )

    when('I run the function', function()
        ...
    )

    then('I should get the mean', function()
        ...
    )

It's very cool this written from the user's perspective. I wonder though if perhaps it disassociates the individual steps too much however.

As far as assertions go, there's really only two major styles I've seen. The most traditional is the `assert` function or keyword.

    assert(mean == 2)

Sometimes, they get more clever with using chaining the second style, like with RSpec or Chai.

    expect(mean).to.be(2)
    mean.should.be(2)

I don't know that any of these really is ideal in my mind.

I'd like the testing syntax to meet the following requirements:

1. Provide me with a good way to break up my tests by component.
2. Be able to prioritize tests without resorting to an special syntax. Some tests are a _must_, while others are a _should_ or _could_, and if I don't have working code yet, then it's probably a _would_.
3. Human driven. I love the Gherkin syntax, but wish it wouldn't go as far to remove the step-by-step orientation, and would better fit unit testing.
4. Very simple assertion pattern.
5. Give very clear information when a test fails.
6. Make fixtures clear.
7. Force my tests to be independent of each other, and make this very explicit.
8. Define tests in a way that make the underlying data structure clear. I sort of dislike the `test('description', function)` pattern.

Thoughts, questions? Let me know in the comments.
