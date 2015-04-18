---
layout: post
title: Async Syntax &ndash; Labelled Returns
---

I'll show one way we could handle asynchronous code. Then, I'll compare this method with existing patterns.

### Labelled Returns

One question I ask myself is, _what problem are we trying to solve?_ By taking the time to cleanly state the problem, we get a new perspective.

Here's my attempt:

**Some functions will return immediately, other functions will return later.**

There's no simpler way to state the problem of concurrency.

Then, the idea came to me: almost all the current syntaxes are about changing how we _set variables_ and _consume the data_. But if you look at the problem statement, it says nothing about consumption. The problem only discusses _returning_ data.

Take some synchronous code:

    str = toString('contents of foo.txt')
    print(str)

What about something like this for asynchronous code:

    file = readFile('foo.txt')
    str = toString(file)
    print(str)

We don't need to make any changes from the regular synchronous code.

In the next example, I'll use an `@` to mean `return`.

    add = function(a, b)
        @ a + b

This specific syntax does not matter. What matters is the idea behind the syntax.

Instead of changes happening while consuming code, the change would happen in the code _getting_ the data.

    readFile = function(path)
        doSomething(path, function(data)
            @readFile data
        )

All we have to do is label the return. In this example, `@readFile` means return `data` for the function `readFile` instead of the anonymous function.

How would this work? Simple. Garbage collection algorithms already have a similar pattern. We store an `async` flag on both data and references (variables). Here's how it would roughly go down:

1. I call a function.
2. The computer realizes the return is actually asynchronous because of the labelled return within another function.
3. The computer marks as `async`...
    1. Every reference that will be set by calling the function.
    2. Every argument received by the function. Both the data and references.
4. When the labelled return runs, the computer removes the `async` flags.
5. When the computer reaches a call that requires any references or data marked as `async`, the computer waits for those to be unmarked.

So how would we handle errors? We can use our normal error handling syntax.

    try
        file = readFile('foo.txt')
        str = toString(file)
    catch(error)
        str = toString(error)
    finally
        print(str)

I'm not sure 100% that this system would work. There's likely some gotchas to this system. But the general idea is: _change the way we write asynchronous functions instead of changing the way we consume them_.

### Callbacks

Let's do some comparison shopping. Here's what our example looks like in callbacks.

    readFile('foo.txt', function(error, file)
        if error
            str = toString(error)
        else
            str = toString(file)
        print(str)
    )

This specific example isn't so bad. It is easy to implement. The issue is nested callbacks.

    readFile('foo.txt', function(error, file)
        if error
            print(toString(error))
        else
            process(file, function(error, str)
                if error
                    print(toString(error))
                else
                    print(str)
            )
    )

Gross.

### Promises

What about promises?

    readFile('foo.txt')
        .done(function(file)
            print(toString(file))
        )
        .catch(function(error)
            print(toString(error))
        )

Again this isn't so bad, but we have two issues. One, we need a special syntax to deal with multiple asynchronous calls. Two, we've walked pretty far away from our synchronous example.

### Events

One possible alternate is to use an event system. In practice, events have a similar syntax to promises.

    readFile('foo.txt')
        .on('done', function(file)
            print(toString(file))
        )
        .on('error', function(error)
            print(toString(error))
        )

Events are conceptually simpler than promises, but suffer from the same syntax issues.

### Generators

A more recent formation is to use generators.

    file = readFile('foo.txt').next()
    if is(file, error)
        print(toString(file))
    else
        print(toString(file))  ; ...the same line as above.
                               ; Most of the time, it wouldn't be the same.

The generator syntax gets us closer. Half the changes are in the consuming code. The other half in the returning code.

    readFile = function(path)
        yield doSomething(path)

It does get us much closer. But, we still have some goofy things to do when consuming them to get them to run in optimal order and timing.

### Coroutines

Coroutines are trending. Coroutines are similar to generators, but more powerful.

    file = wait readFile('foo.txt')
    if is(file, error)
        print(toString(file))
    else
        print(toString(file))

Coroutines do not necessarily relinquish control back to the consuming code. The extra power comes at a cost. It means more management.

Goroutines, implemented in go, offer an interesting twist on coroutines. However, for this conversation, the same issues would apply.

### Conclusion

The best way to handle asynchronous code is to not handle asynchronous code. Concurrency is a difficult problem. Sometimes, we don't have a choice.

If we are able to reduce the cognitive load of the programmer, we should. Make as few syntax changes as required. When we need to add advanced capabilities, push any change to as far back into the code as possible.

Thoughts, comments? Let me know!
