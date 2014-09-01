---
layout: post
title: The Ideal Database
---

_The relational database is a brilliant system._ Once you learn the rules, anyone can query and design the schema for just about any dataset. You need significant study and some practice to fully understand the capabilities of the relational database, but once you do there's so much power. There's little guesswork with the design of tables; the rules are well established. Simple tables look like spreadsheets; rows are entries, columns are different types of data. To make more complex data entries, you join rows from different tables together. The relational database concept is by far the most popular and it has withstood the test of time. Two of the most popular relational (SQL) databases are [MySQL](http://www.mysql.com/) and [PostgresQL](http://www.postgresql.org/), and there are many others.

There's some very real problems with relational databases, just as there would be problems with any technical solution. Perhaps the biggest challenge is getting a database to successfully run on more than one server. The foundational ideal of the relational database, joining tables to make more complex entries, becomes far more challenging. You layer complexity by adding concepts like sharding, replication, and distributed indexes. There are problems with many types of data in both schema design and querying. Some types of data fundamentally cannot be represented well in a relational database.

There have always been alternatives to the relational database. Perhaps in the last five to ten years, there's been a growing number of software organizations instead using what are called "NoSQL", or non-relational, databases. Of these, the most popular types are key-value databases and document databases.

Key-value databases, like [Memcached](http://memcached.org/), [Redis](http://redis.io/), and [Riak](http://basho.com/riak/), are very good at specific applications, such as data caching and session storage. These systems are similar to the relational database, except they lose the concepts of columns and joins. Software organizations use these databases most often as auxilliary systems to the main database.

Document databases, like [MongoDB](http://www.mongodb.org/) and [CouchDB](http://couchdb.apache.org/), instead allow rows that are not represented by columns but instead by hashes of data. These hashes can contain arbitrary representations of data, including arrays and nested data. Typically, document databases do not enforce any schema on the table entries. Document databases are sometimes used along with relational databases, but sometimes they are used instead as the primary database.

Other types of databases, such as search systems like [Solr](http://lucene.apache.org/solr/) and [ElasticSearch](http://www.elasticsearch.org/), graph databases like [Neo4J](http://www.neo4j.org/), and wide-column stores like [Cassandra](http://cassandra.apache.org/) and [HBase](http://hbase.apache.org/), solve alternative problems like high-quality search querying and mass distribution of data over a very large cluster of servers.

Each of these database types come with limitations. Key-value stores limit querying severely, and in most cases can only be queried by table and key. Document databases introduce complexity in schema maintenance and design, and only recent examples support joins. Search databases add a great deal of overhead to performance to be able to support a richer querying capability. Wide-column stores can also be very challenging to design successful schemas. Almost all alternatives to the relational database require foreseeing future query needs at the schema design stage.

Likely, there will never be a database that can do it all. But in this environment, I have to ask the question:

**What if we return to the original concepts of the relational database, but address some of the challenges which brought on these alternative types of databases?**

Let's examine some of these challenges.

-----

1) _I want to be able to get data out fast._

This need is the primary motivation for using key-value stores. There's already a solution in place, which is to cache the results of queries and break those caches when the impacted rows of the cache change. This caching can take place in system memory or local disk. The main problem with this solution is that, while it ensures good caching by automation, it isn't implemented in the distributed fashion that a system like Redis is. If a relational database could implement a built-in caching system that leverages a distributed technology like Redis, and is well vetted, it would greatly alleviate this need.

Perhaps another challenge here is needing to cache results which aren't coming from the database, but the code itself. In this scenario, this cache would need to be able to receive information from the code as well without needing to go to the database first. This may add more complexity than its worth, however.

2) _I want my database to scale effortlessly._

Relational databases have historically handled scaling by replication and sharding. Most document stores also use the same solution, though due to the lowered need to join entries, there's more possibility for automating this solution. Wide-column stores however _really_ solve this problem by fully distributing the database over the servers in a completely automated fashion. When one server goes down, there's no need for a failover or voting system either. Being able to use this sort of system on other types of databases seems like it would be a great win. Queries would also need to be able to distribute themselves effortlessly as well with this system.

3) _I want flexibility in my schemas._

There's a great deal of advantage to having explicit schemas to databases. But sometimes, the data just isn't that clean. Also, as a developer, sometimes you don't fully know the schema until you start developing it. Right now it seems to be all or nothing with databases. Either you have a very strict relational database schema, or you have no schema at all. Is there a middle ground?

Let's say for example I know I will need three columns in my database for sure to start. I know the types of two of them, and one is the primary key. But I know too there will be more data later, I just don't know exactly what that is yet. An _everything optional_ sort of schema system would be the best of both worlds, but perhaps bring challenges of its own. Perhaps we could even have tables with strict schema, some tables with a partial schema, and some tables with no schema at all.

4) _I want to use MapReduce, and other functional ideas._

MapReduce is an excellent paradigm, and often used in non-relational databases. Recently, a new system called Spark allows for the full expression of lambda calculus over a server cluster. Relational databases support only relational queries in there querying language. Ideally, a query language would be able to support both, and know when to use the relational system when it would be more performant versus when to use the lambda calculus system for distributing the query.

5) _I want to do embedding._

Document stores are most famous for their ability to embed data within their hashes, which strongly represents the nature of object-oriented code. But there's some problems with embedding, just as there are problems with not being able to do embedding. Embedding brings in questions of schema design that have a single, simple answer with relational databases.

For this point, I'll break it down into how these relationships work between the two databases.

- One-to-One Relation
    - SQL:
        1. Use the same ID
    - Document:
        1. Embed if small enough and non-distinct type
        2. Use same ID
- One-to-Many Relation
    - SQL:
        1. Put the "One" ID in the "Many" rows
    - Document:
        1. Embed "Many" directly if small enough and non-distinct type
        2. Put the "One" ID in the "Many" documents
        3. Embed list of "Many" IDs into the "One"
- Many-to-Many Relation
    - SQL:
        1. Use a join table
    - Document:
        1. Embed directly if small enough and non-distinct (e.g. tags)
        2. Embed list of IDs into one side
        3. Use a join table

Perhaps a simpler solution instead abstracts this difference from the user. A database where I specify relationships instead of IDs and can embed data and query just like a document-store, but essentially underneath using the relational design instead of the document store design. In this model, I'm no longer tied to a specific form of querying like the relational model, but I'm also not managing a million different tables and their join expressions like in SQL.

6) _I want to use my native client language._

One of the relational database's problems is that queries are built in the client language (e.g. Ruby, Python, Java, JavaScript...) using strings. This introduces many security problems. Many organizations will use an object-relational mapper on top of their database to avoid these problems and make the integration between the two easier. Non-relational databases often instead built libraries for each target client that can be used directly in the language of development instead. This hybrid database would likely benefit from sticking with the non-relational model, in this case.

-----

Perhaps this isn't the ideal database. It doesn't account for search querying. It doesn't account for graphs. And perhaps there's ways to incorporate that as well. But it might solve many of the most common challenges software organizations face with databases.

Questions, comments, or thoughts on this article? Let me know in the comments below!
