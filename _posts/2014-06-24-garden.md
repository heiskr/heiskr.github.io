---
layout: post
title: Garden, hypothetical language syntax
---

If I were to design a programming language, what system by which would I design it? How would I go about making decisions? What would it look like? This document is the beginning of a plan for a hypothetical language syntax. It will change, grow, and update frequently as I continue to research for the project. I'm still exploring this idea. So anything in this document is likely and open to change. There is no plan to implement this syntax.

Version 0.0.0 - Planning

Principles
----------

- Read out-loud as is.
- Omit the obvious, but be explicit.
- Prefer one way to do things, and explain exceptions.
- Separate data, functions, and references.
- Flat, not abstracted.
- Isolate modules.

*Influences*: Lisp, Hypertalk, Python, Coffeescript.

Core Syntax
-----------

Garden only has three types of things: data, functions, and references.

**Data**. Data does not own functions. Immutable examples are boolean, numbers, strings, tuples, and maps. Mutable lists and objects are also available.

**Functions**. Functions are first-class.

**References**. References, or variables, are plain text in Garden. References may refer to data or functions. References always denote mutable types with a prefixed `$`.

----

Comments start with a semicolon.

    ; This is a comment.

Semicolons are the comment character because semicolons:
    a) require only one key,
    b) are easy to reach, and
    c) aren't mistaken for another operation.
Comments may be in block format.
Indentation is 4 spaces.

    ;
        This
        is a
        block comment.

Statements are terminated with the new line character.

The most basic data type is none. It is always falsy. It is always immutable.

    none

Booleans. Always immutable.

    true

Only one type of number. Numbers are always immutable.
Each data type has one falsy value: for numbers, its 0.

    42

Strings use only the single-quote `'` character. Regular expressions are just strings.
`\'` is the escaped version of the single quote character.
 `''`, empty string, is the falsy value. Strings are always immutable.

    'abcd'

Strings can be defined in multiple lines with indentation just like comments. The indentation is stripped.

    '
        abcd
        1234

Tuples are defined with `[]`. Tuples are zero-indexed.
The falsy value of tuple is the empty tuple, `[]`. Tuples are immutable.
Tuples can only store other immutable data types, such as boolean, number, string, tuple, and map.

    [1 2 3]

Tuples do not differentiate between the kind of whitespace, so we can just as easily write:

    [
        1
        2
        3
    ]

Lists are defined with `$[]`.
The falsy value of list is the empty list, `$[]`. Lists are like tuples, but mutable.
Lists can store immutable data, mutable data, and functions. Lists only store references.

    $[1 2 3]

Maps are defined with `{}`. The falsy form of map is an empty map, `{}`.
Maps are unordered. Maps support embedding.
Maps are immutable. Maps may only store immutable data types.

    {'a':1 'b':2 'c':3}

Maps may be also written as:

    {
        'a':1
        'b':2
        'c':3
    }

Objects are like maps, but mutable. They are defined with `${}`.
The falsy object is the empty object.
Objects can store immutable data, mutable data, and functions. Objects only store references.

    ${'a':1 'b':2 'c':3}

References are set using the `set` function, where the `given` argument is the reference and accepts an argument `to`.

    set a to 1

References are dynamic, so they can change type.

    set a to 1
    set a to 'abcd'

References are always lexically scoped.

    set a to 0  ; `a` is scoped to the module
    set f to do   ;  function declaration with `do`
        set b to 2  ; `b` is scoped to the function `f`
        if equal a with b
            set a to 5  ; `a` still has module scope
            set c to 3  ; `c` is scoped to `if`

Any references to mutable data types, such as list or object, *must* start with a `$`.

    set $a to $[1 2 3]

The `get` and `set` methods exist on all tuples, lists, maps, and objects, respecting the mutability characteristic. A `set` operation will always return the full value of the iterable.

    set a to (get 'key' in my_map)

Files are treated as modules, with their own namespaces.
If a cycle is formed with `import`, the compiler will throw an error.
Everything in the module is made available.

    set my_module to (import './path/to/module')

Access functions and other references in modules with the `get` function.

    set math to (import './math')
    set average to (get 'average' in math)

Functions are called simply by having a reference to the function the first in the group.
The first argument is the _given_ argument.
After the first argument, prepositions are used before each argument as keywords.
After the first argument, arguments may take any order.

    add 1 to 2

Parentheses can be used to have multiple statements in a single line.

    add 1 to (divide 3 by 4)

The anonymous function is defined as: `do (given) arg1 (preposition) arg2 ... \n block`
Functions always have a _given_ first argument, and all following arguments are keyword by prepositions.

    do col
        divide (sum col) by (length col)

Define functions using the following formation:

    set average to do col
        divide (sum col) by (length col)

Every statement is an expression, so returns are only needed when wanting to return early.

    set average to do col
        if equal (length col) with 0
            return 0
        divide (sum col) by (length col)

Functions may be passed by reference as arguments to other functions. If a function reference is not the first it its group, the function is passed as reference.

    map col by add

Any function that receives or returns mutable data types must have all references start with `$`.

    set $scale_list to do $list by num
        map $list by (divide by num)

Conditions are simply using the keywords `if` and `else`. Conditions are also expressions.

    set c to (if equal a with b
        true
    else
        false)

Of course, the previous example could be written more simply.

    set c to (equal a with b)

Conditions do not convert type.

    if equal 0 with (to_number '')
        true

While loops work like `if` statements.

    set a to 0
    while less_than a under 5
        set a to (add 1 to a)

`if` and `while` do not require parentheses around the first function call.

    if less_than a under 5  ; these two lines are the same
    if (less_than a under 5)
    while less_than a under 5  ; and so are these two lines
    while (less_than a under 5)

`for` loops are aware of the data type.

    set my_tuple to [1 2 3]
    set my_map to {'a':1 'b':2 'c':3}

    for num in my_tuple
    for [index num] of my_tuple
    for value in my_map
    for [key value] of my_map

Breaks and continues are allowed as well.

Try and catch blocks work very similar to other languages.

    try
        divide 1 by 0
    catch exception
        log exception

Aliases
-------

Aliases are opt-in language features that can reduce some verbosity from the language, at the cost of some consistency.

*Alias: Getters and Setters.* Many languages allow using `object.key` and `object[key]` for getters and setters of iterables, and Garden's alias can allow for that as well. Using the dot notation, the key is a string.

    set a to my_map.key
    set b to my_tuple[0]

*Alias: Set.* The set alias allows the regular variable syntax instead of the `set ... to ...` syntax.

    a = 42

*Alias: Comprehensions.* A few languages offer comprehensions as an alternative iterate-to-generate interface.

    [(divide num by 3) with num in my_tuple]

*Alias: Destructuring.* `for ... of ...` statements already provide a most basic destructuring. This alias will turn on destructuring across the board.

    set [a b] to [1 2]
    set {a b} to {'a':1 'b':2}

*Alias: Inline-block.* Sometimes, having to hit return just for a single-line block doesn't feel right. This alias enables a work-around. The colon character here replaces the newline plus indent.

    map lis by (do value: divide value by 3)

*Alias: Ternary operation.* Sometimes, having a single line set a value conditionally is convenient.

    set a to (if equal a with b then a else b)

*Alias: Pipe.* Sometimes, we can lose the "step-by-step" feel, and the pipe alias can help restore this feeling by letting us chain functions. The previous value is passed to the succeeding function as the given (first) argument. Pipes may be used on the same line or on succeeding indented lines.

    set b to a
        | filter by filtering_test
        | map by updater
        | sort by conditional_test
        | reduce by reducer after 0

*Alias: Type Annotation.* With this alias enabled, function arguments and returns can have a type specified. Type annotations are checked at build-type and not run-time.

    set my_add to do num1 to num2
        add num1 to num2
    type: given number to number return number

*Alias: Comparison Operators.* Comparison operators add back in the typical syntax, as well as the typical order of operations. Options include full function names, symbols, or both.

- not, !
- not_equal, !=
- equal, ==
- less_than, <
- greater_than, >
- less_than_or_equal, <=
- greater_than_or_equal, >=
- in
- and, &&
- or, ||

*Alias: Mathematical Operators.* Mathematical operators add back in the typical syntax, as well as the typical order of operations. Function names, symbols, or both are options.

- multiply, times, *
- divide, divided_by, /
- modulus, remainder, %
- add, plus, +
- subtract, minus, -
- power, to_power, ^

Examples
--------

### Quicksort, no Aliases

A mutable quicksort implementation.

    set $quicksort to do given $a
        set $less to $[]
        set $equal to $[]
        set $greater to $[]
        if greater_than (length $a) over 1
            set pivot to (random (length $a))
            for x in a
                if less_than x under pivot
                    append x to $less
                if equal x with pivot
                    append x to $equal
                if greater_than x over pivot
                    append x to $greater
            return (
                concat (quicksort $less)
                    with $equal
                    with (quicksort $greater)
            )
        else
            return $a

### Quicksort, with Aliases

A mutable quicksort implementation, including aliases.

    quicksort = do $a
        [$less $equal $greater] = $[$[] $[] $[]]
        if (length $a) > 1
            pivot = random (length $a)
            for x in a
                if x < pivot
                    append x to $less
                if x == pivot
                    append x to $equal
                if x > pivot
                    append x to $greater
            return (
                concat (quicksort $less)
                    with $equal
                    with (quicksort $greater)
            )
        else
            return $a

Compiler
--------

- Each indent should be four spaces per indent.
- Functions must contain less than ten statements.
- Blocks must not go more than three levels deep.
- Types must match to do a comparison.
- One empty line should be after each block.
- Two spaces should be before starting an inline comment.
- Mutable variable name should be prefixed with `$`. (Run-time)
    - `$` prefix indicates the variable _may_ be mutable, in the case of a function argument.
- Variable names should use underscores.
- All imports should be used.
- All variables should be used.
- No lines should have trailing whitespace.
- Lines should be no longer than eighty characters.

TODOs
--------

- Complex Numbers
- Vector / Matrix operations
- Standard functions
- Standard library
- Universal UTF-8
- Map / Object comprehensions
- Asynchronous code
- Default arguments
- Functions should use full words, not abbreviations or acronyms.
