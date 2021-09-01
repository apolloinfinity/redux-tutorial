# Small Demonstration of How Redux Works

I have scoured the internet on the topic of hitting multiple endpoints or how to use Redux and access the various states that may exists in it and to no avail. Most projects on the internet are simple in design and simple in teaching Redux.

## The Original Project
As I was going through a tutorial on how to use Authentication and Redux for a MERN project Called ***[Memories](https://www.youtube.com/watch?v=ngc9gnGgUdA)***, I was able to partially understand some of the key concepts of Redux. The tutorial is easy enough to understand but now so complicated that one couldn't understand what was happening. Because of it's simplicity, it never really went past using one endpoint from different sources. Although it the project has other endpoints, they all came from the same source not including authentication. So only two states were needed, not many like it would be in real life. 

## The Problem...
The Memories project was the basis for implementing Redux along with Authentication for a Front-end project at work. The issue came up for me is that hitting two different endpoints within ***FE*** project was causing issues of only one state being filled with two different data sets. Since React likes list rendered in the view to have a key, the options tags had two identical keys with different data sets. With Redux, the Action Types, they are strings stored in variables to prevent misspelling, had action type of ***FETCH_ALL***. What was unbeknownst to me is that despite the fact that FETCH_ALL is a simple reference to a string, this would make a big difference in how Redux accesses and stores state. 

### The Solution to My Problem.
I scoured the internet to find answers but couldn't. Most google searches led to the Redux documentation which didn't really lead to anything considerable.

[Redux Toolkit Thunk for Asynchronous API calls](https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice)
[Medium Article on how to use Thunk with Redux Toolkit](https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb)