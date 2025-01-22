00:00 TypeScript is a programming language based on JavaScript that is becoming increasingly popular.
00:05 In this complete course, Hitesh Chaudhary will teach you everything you need to know
00:09 to get started with TypeScript. Hitesh is a very popular teacher who has created over 1,000
00:15 tutorials. Hey there everyone, Hitesh here, back again with another video, and I know you are
00:20 pretty excited about this new series that we're going to get started. This series is going to be
00:25 a little bit fast-paced so that you can understand what TypeScript is. And I totally understand
00:30 the excitement, the enthusiasm to learn all about TypeScript that you want to have.
00:37 The right now the entire world is traumed by JavaScript. A lot of people are loving it,
00:42 a lot of people are hating it, but regardless of the fact, everybody is writing JavaScript.
00:47 And there are plethora of tutorials available on JavaScript, including mine and I am also
00:52 determined to add more videos in those tutorial series. But there is new kit in the town known
00:57 as TypeScript. A lot of people are loving it, those who start writing the TypeScript just claims
01:02 that I don't want to go back into writing JavaScript. So what's this all fun about TypeScript?
01:07 Are we missing anything? Not at all. Today we're starting a brand new series on the TypeScript,
01:11 and eventually as we go further, you will have the full knowledge and full right-table skills so
01:16 that you can transform from JavaScript to TypeScript. But before going further there, I would like to
01:21 just give you an introduction what TypeScript is and should you be even writing TypeScript at all
01:26 on the first place. There is a lot of hurry in the market that I just want to jump into TypeScript.
01:31 I don't even want to learn JavaScript, but that is not the case, that is not how it should be started.
01:36 It should be started with JavaScript, and there is a reason behind it. I'll walk you through
01:40 with that. And I'll also walk you through that why it is important and why even you should be
01:45 writing JavaScript at the first place or shouldn't be. That is the big question that we're answering.
01:50 So welcome to the series on the TypeScript, and we will be running this series into a fast-paced
01:55 mode. I'll be pushing up a lot of videos. So go ahead, buckle up, and let's get started with TypeScript.
02:01 So TypeScript, obviously you want to learn it, and everybody knows one thing about TypeScript.
02:06 I'm pretty sure in case you are living unless and until under a rock, you have heard about that if
02:10 this is a JavaScript, the classic yellow icon, this is a TypeScript. Often called as the TypeScript
02:17 is a superset of JavaScript. That means everything that you can do in JavaScript that is already
02:22 available in TypeScript, and a lot more is available to that. But that is a kind of a true statement,
02:28 but not accurately being contextualized by a lot of people. Yes, you have accurate
02:34 statement that TypeScript is a superset of JavaScript, but it's not like it is adding more features
02:40 to JavaScript. No, it doesn't give you more of callbacks. It doesn't give you more of arrow
02:44 function. It just allows you to write JavaScript in a much precise manner so that your code
02:50 faces a lot less error in the runtime. If there is any error, it is already being displayed to you
02:56 while writing the code at the kind of when you're just typing them out in the your favorite editor,
03:02 maybe VS code or something. That is where we want to just catch those error and find that we
03:07 shouldn't be doing something like that. So that is all your TypeScript. It is not going to give you
03:11 a new loop. It is not going to give you a classes or new modules. It is not going to give you
03:16 anything new. In fact, all the code that you write in the TypeScript is finally compiled into
03:22 JavaScript. Not only that, even though your codator might be yelling at you with some
03:26 squiggly line about the TypeScript code, still you are allowed to compile that code in the
03:31 JavaScript and it might run with errors, but it might run. So there is a strong thing that you
03:37 need to understand that it's not like TypeScript is the ultimate way of writing the pure JavaScript
03:42 and is not going to give you any quirky behavior. It might still throw you around off somewhere
03:47 and that is exactly what we are going to learn in this series. So first, yes, I understand that you
03:52 know this statement that there is a JavaScript, there is a TypeScript, it encircles the entire
03:57 JavaScript. In this series, I'll walk you through all the details and depth of the TypeScript,
04:01 so don't you worry about that, I'll cover that up. But first and foremost, should you be even learning
04:06 TypeScript? That is the big question. TypeScript is not about reinventing the entire JavaScript
04:11 language, it is not. It just is asking that you write JavaScript with a little bit more
04:16 accurate behavior. Don't just do anything, just try to write a JavaScript in a more precise manner
04:22 so that errors are less. And I honestly would say you shouldn't be using TypeScript. If your
04:27 project is just too far long and there are in each file, there are just five or ten lines of code.
04:33 It is not compulsory that every single place you need to write TSX or TS for TypeScript.
04:38 I've seen a lot of people who use TypeScript, but all the places they use any, which is a keyword,
04:44 we'll talk about that later on. If you're using TypeScript, you need to use the super power of TypeScript
04:49 to make your code much more powerful and much more error prone. And if you're using
04:54 just TypeScript for the fanciness of writing TS, you're probably not using it correctly.
04:59 After watching this series, you'll be watching TypeScript in a much more powerful manner.
05:04 So TypeScript is all about TypeSafety. Nothing more. Just this word. And I'll be repeating this word
05:11 probably a million times in this entire series that what is this TypeSafety? TypeScript is all
05:17 about TypeSafety, nothing else. So what is this TypeSafety? Let me give you a couple of code
05:21 examples. So TypeSafety is nothing that JavaScript allows us to do some odd behavior. For example,
05:27 I can go ahead and just add two with a string of two, which I shouldn't be allowed to do when
05:32 it gives me an odd result of 22. This is happening because the TypeSafety was missing.
05:38 On the very first place, it should have stopped me from doing an addition of number with string.
05:44 Now it doesn't stop you. It tries to do its own behavior, which I've discussed a little bit in
05:49 my other videos, but let's just say right now, stick here. So this behavior shouldn't be allowed.
05:53 That is all a mismatching of the type. If you have been consistent with your type, this error
05:58 shouldn't be there. And TypeScript allows you to just stop this behavior. That's all it does.
06:03 For example, let's just say you have null. You're allowed to add a two value to the null.
06:08 And on top of that, there is undefined. And you're allowed to add a two to undefined and get another
06:13 thing like two and none. Not a number. This is all not the quirky behavior of JavaScript, but rather
06:21 your way of you haven't been concerned about the types of JavaScript. There is an explanation in
06:26 the documentation of JavaScript that what behavior is going to kick in or what behavior is going to
06:31 superpower and power that. But apart from MDN, we haven't read the documentation of JavaScript,
06:37 which are being the language specification given by ECMAScript. They are all right here.
06:42 But the idea is I shouldn't be reading that much on the first place. I should be focused on
06:46 building my application with the type safety. And that is where the TypeScript comes into the
06:51 picture. So in this series, you're going to be mastering the TypeScript. So subscribe to the
06:56 channel. And we're going to be walking through, in fact, rolling coasting through this ride of
07:01 Type Safety with the TypeScript. I hope you're all excited. A lot of videos are coming in. Get
07:05 subscribed. And let's catch you up in the next video. Hey, there, everyone. I'm Tashir back again
07:10 with another video. And before we even move further in the TypeScript, even its installation process,
07:15 I want to make this absolutely clear that what TypeScript is and what it isn't.
07:20 In this video, I'll focus on what TypeScript is not. And this will help you to understand TypeScript
07:26 in a better way. And the perspective of the TypeScript is going to change. A lot of people believe
07:31 that TypeScript is a new programming language, which honestly is not a 100% true statement. There
07:37 is a little bit difference in understanding the TypeScript. So let's get our vision clear first.
07:42 And then in the next video, we'll move on the installation part and the environment setup so
07:46 that we can start writing TypeScript. But before that, let's clear our perspective about what
07:51 TypeScript is. In order to understand what TypeScript is, you need to understand is the simple
07:56 statement what TypeScript does for you. The simple idea behind the TypeScript is static checking.
08:02 That's the only job. And yes, that's the only one job that TypeScript has got for you.
08:08 The static checking is something which is present in many languages, especially the languages such as
08:13 Java or maybe even GoLang. A lot of languages are built in with the static checking. And what does
08:20 the static checking means that whenever you're writing the code, the parser of the language or the
08:26 entire syntax of the language is constantly being analyzed by the IDE's. But not in the case of
08:31 JavaScript. Whatever you write is just okay for the JavaScript. And when the code executes in the
08:37 browser or in the engine like node environment or anything done, then only the errors of JavaScript
08:43 are being thrown at your face. And at that time, you just say, ah, that's wrong. And you need to
08:48 rerun the code itself. But it would be really a great help if there is a static checker which
08:53 checks my code as I try to write it. For example, I'm trying to access an object which is not yet
08:58 defined. If something can analyze my code and can give me a hint that that object doesn't exist
09:04 in the object properties, then obviously it's much more easier for me. For example, when we are
09:10 trying to add a few numbers and then the one of the number is not a number, maybe a string, then
09:15 if somebody helps me in giving me a squiggly line that, hey, that is not going to work. So that is
09:20 great for me. And again, the level of the detail that which one is going to stop you from doing
09:26 something and not stop you, that's all about the static checking. So just to repeat,
09:30 TypeScript is just for static checking. It just analyze your code and help you to understand that
09:36 you might be running into a potential error without even running the code and getting the errors
09:41 at the runtime itself. That's all it does. So I hope you understand that. The whole job of the
09:46 TypeScript is simply to analyze the code. That's it. That's all it does. Now on top of that, I'll also
09:52 walk you through with an example as well that it just checks and gives you hint about that,
09:57 yeah, you might be doing something wrong. But yes, it is still possible that your code might be
10:02 giving you a squiggly lines or errors and still you may export this entire code into JavaScript
10:07 and that might run absolutely well. And I'll walk you through with a couple of more
10:11 missed things, kind of a misheard concepts about TypeScript that, hey, with the TypeScript,
10:16 you write less code and it does build the JavaScript code for you. So that is way more code.
10:20 In fact, reverse is the true. In the TypeScript, you write a lot more code compared to JavaScript
10:26 and sometimes even I have seen 50 lines of code are being compiled into just 10 lines of JavaScript.
10:31 Yes, but it is worth it. I'll walk you through with that as well. So first,
10:36 how the development process works. You write all of your code in ts.ts format, which is a simple
10:41 TypeScript. When you're building components like React or something, I have seen people use a
10:46 simple extension of.tsx, which is also totally fine. It has nothing to do. It is just a mixture of
10:52 TypeScript plus the gsx kind of a syntax. So this is kind of a same component thing. Basically,
10:59 your HTML is baked into the system. I'll walk you through with that as well. But the whole idea behind
11:03 the TypeScript is you write your TypeScript code and that code is being transpiled into JavaScript.
11:08 And there are a lot of fancy words here. It has compiled. It is transpiled. We'll work through with
11:13 that. I'll give you a brief overview of what is the difference between them, what is the meaning of
11:17 it and how it is working. You can just simply say at this point of time that TypeScript code is being
11:21 converted into JavaScript. That is a rather safe word to use right now. And then your JavaScript.
11:27 And one thing, the most important thing to learn and to know for this video is TypeScript is a
11:32 development tool. Yep. It is a development tool. Your project still runs in JavaScript. The code
11:38 that you produce or you send to the production is still a pure 100% JavaScript code. So TypeScript
11:45 is just a layer on top of JavaScript. As I told in the earlier video, it's a super set of JavaScript.
11:50 But rather, it would be accurate to say that it's a development tool. It helps you to write
11:55 better code with less problems with a more scalable and maintainable code that is easily
12:00 understandable and produces and the chances of producing the error is much more less. But it by
12:05 no means that it's a standalone language in itself. It's something which is a wrapper around the
12:10 JavaScript. And yes, there are new keywords here like Union and Interface and a whole lot of them.
12:15 We'll walk through with that. But understand this very important thing that it is honestly a
12:20 development tool which helps you to write better code. This might be a surprising for a lot of us,
12:24 but this is how it works. Okay. Giving you some examples on that, we'll be writing a ton of
12:29 hands of code. We'll be setting up our own environment as well. But I'll walk you through with those.
12:34 So this is a TypeScript lang.org. A free code environment that is available to all of us. And we can
12:39 see on the left hand side, we run the TypeScript and there are a lot of versions of it. And on the
12:43 right hand side, it just produces a JavaScript code. For example, I can just go ahead and say, hey,
12:48 I want to do a simple console dot log. And I want to just say, I want to print my name or hello
12:55 world. That's how it got started. And you can see that the JavaScript part that is coming out. It's
12:59 exactly the same. In fact, let me just go ahead and declare a simple user. So let's just say we are
13:04 going to call this one as simple user. This is an object. And in this object, there is a property
13:09 something like a name, which is going to be my name. And let's just say we also have another
13:15 property, which is age and let's just say age is 10, fictitious, of course. And you can see that
13:20 this is exactly what is producing. Now, what TypeScript allows you to do if I just let's just say I want
13:26 to have an variable email. And that email comes from user dot email. Now, notice here, there is a
13:32 squiggly line. The error was given to me here that, hey, this property doesn't exist. So TypeScript
13:38 smartly just go through with your code and tells you that email was not available there. But notice
13:44 here, most important thing here is although this property was not there, but there is nothing which
13:49 is stopping me to produce the equivalent JavaScript code. Yes, that is the most important thing.
13:54 In fact, this might be a little bit surprising to you in the initial first look that let's just say
13:59 if you go ahead and say that I have a simple number one, which is three. And let's just say if we
14:05 have a number two, which is three. And if I go ahead and say, hey, let's just call this one as some,
14:14 that is going to be equal to number one. And we're going to go ahead and say number two.
14:20 The notice here, if I go ahead and do a simple console dot log and I go ahead and say, hey,
14:26 give me a sum, you might be thinking that JavaScript or TypeScript, especially is going to just
14:30 just allow you to do these kinds of things. You can see right now, nothing is doing that. If I run
14:35 this code, the code is transpiled. We get the same things as 33. Yes, there are ways to avoid this.
14:41 I'll walk you through with that. But here we can see in the playground, it is working fine.
14:46 So it is very important to understand in depth about TypeScript that what is allowed,
14:50 what is not allowed, how we can enhance more of Type Safety in our JavaScript code. And that's
14:55 exactly what we are going to learn in this video. So again, always remember, it's a development tool.
15:01 It's yes, there are a lot of keywords and everything that is new in this stuff. But it would be
15:05 rather much more accurate to call it as a development tool instead of just a standalone language.
15:09 Because this language is too much dependent. In fact, entirely dependent on JavaScript,
15:14 it just a wrapper around it. So let's go ahead. In the next video, we'll be setting up an environment
15:18 so that all of us can write some TypeScript on our own environment. And you can just send this up.
15:23 Let's go ahead and catch up in next video. Hey, there, everyone.
15:26 Here, back again with another video and welcome to another video in the TypeScript series.
15:31 Now, I'm a firm believer that if you show people the code and try to explain the concept within
15:37 the code and the execution of the code, it's much easier to explain. I've tried it out, tested it
15:42 out with a whole million student and it works nicely. The another consequence is that if you don't
15:47 try to write the code and instead you just use the pen pencil, which is a great way of learning.
15:53 But it takes much more time. It requires, let's just say, 40-minute videos or a one hour,
15:57 40-minute video. But what I have noticed is take people directly on the code, try to write the
16:02 code, execute the code and explain the concept just right there. It brings a more functionality
16:07 to the teaching pedagogy as well as it's much more easier to understand. And that's exactly what
16:12 we'll be following in this entire series. Instead of just putting you all in the theory of pen and
16:18 pencil, which is a good way again of teaching this stuff. But I'm a firm believer of taking you
16:23 onto the code editor as quickly as possible. Let's go ahead and work with that. So in this video,
16:27 I'll walk you through that how you can install TypeScript on your system and there are a couple of
16:31 ways how you do it. Now the way how we are going to start with the TypeScript and the way how we
16:35 use it in the projects are two different installation of the TypeScript. The first one is a global
16:40 system installed that we're going to use. This will be helpful for you to understand the concepts
16:45 of TypeScript. But when you're going to use TypeScript in a project, maybe react project or
16:50 Angular project, they're an additional TypeScript config file is required so that you can address what
16:55 kind of settings you want, what kind of things you don't want. So there will be a two different
16:59 installation. First of all, we're going to focus just on the core system-wide installation so that
17:04 you can create basic files, understand what is the new thing in the TypeScript, how you can understand
17:09 it. And then we're going to later on move into the project section where we're going to see how we
17:13 can config the TypeScript settings so that can help us to produce a better code. I hope that is
17:18 all clear. For this, now let me take you on to my computer screen and walk you through with that.
17:23 The first thing that we're going to do is obviously create a new folder and we're going to call
17:26 this one as simply let's just call this one as TypeScript and why not TypeScript YouTube because
17:35 that's what we're doing up here. Okay, so TypeScript YouTube is here. Inside this also, I would like to
17:40 create a new folder and let's call this one as zero one. This is getting intro so let's call
17:45 this one as zero one intro. So this is the folder. We're going to do everything up here. Now before
17:50 that, we need to install TypeScript. So installation of the TypeScript is pretty super straight forward.
17:57 Now let me walk you through with that. All you have to do is first open up your terminal and by the
18:02 way, all these instructions are also mentioned on the TypeScript website. We are going to study that
18:07 in a minute. Let me open that up. Just give me a second. So let me go ahead and open up the TypeScript.
18:13 So here it is. Okay, so here it is. The TypeScript website officially and all the things are available
18:19 here. And we can see that this is online where NPM, there are lots of ways how you can actually
18:24 go ahead and install that. Let's go on to the download section and here it says that hey,
18:28 you can install the TypeScript by saying NPM installed TypeScript. This is a way, but we won't
18:34 be using this one. Rather, we'll be actually installing it globally so that we can use it wherever
18:38 we like. Once we are done with that global installation, we have understood the basic concept,
18:43 then in the project, we'll be using the same NPM installed TypeScript as a dev. I told you,
18:48 this is a development tool. That's why it's usually installed as a dev dependency. So things will
18:53 make much more sense as we move forward. So get that. It's pretty easy and same. And again,
18:57 it's exactly same for Mac, Windows, Linux, whatever the system you're using. In case you are on
19:02 Windows, I highly recommend to use GitBash, which is Vibera Shell or use PowerShell. So there's a
19:08 shell available known as GitBash. For Windows, I highly recommend people to use this shell. It gives you
19:14 the same command that I'm using like CD, LS and all Linux friendly commands. Again, nothing much
19:19 to do, nothing a hard and fast requirement. Now, the very first thing that we need is nodes. So
19:24 make sure there is a node installed in your system. If you just say node dash V, it should pop up
19:29 some number. It doesn't really mean that exact same number should come up to you. Any number
19:34 is fine. If it is giving us an error, then go ahead on to node website and install node. Pretty
19:39 simple. Next, next, I agree. Click OK. All those kind of stuff should be OK. Node also gives us
19:45 a utility of NPM. And we can check out what version of NPM node package manager is given to us.
19:50 And we have to install that as well. Once we're done with this, then we have to simply go ahead and
19:54 install the TypeScript. And for installation, it's pretty simple. NPM install and we're going to
20:00 install TypeScript. That's all what we need. Now, this is what we need, but we want to install it
20:05 globally so that we can use wherever and anywhere we like throughout the system. And that is why
20:10 the dash G flag works. Now, this is going to work absolutely fine. In case you are on Windows,
20:15 make sure you right click and open up your GitBash as an administrator. In case you are on Linux or
20:20 Mac, make sure you append this with pseudo. In some cases, it is required. As soon as you hit pseudo,
20:25 you need to enter a password and that's it. Let's go ahead and do this. This is going to ask a
20:29 password. That's it. And mine is already installed. So, it didn't took much time, but this is all
20:34 what we got. So now, TypeScript is available in our system. And if I just open up this one here,
20:42 this actually gives us a unique command, which is TSC TypeScript. Now, there are a couple
20:47 of other ways of installing it with node package executor and a whole bunch of other things.
20:52 But the focus here is that it gives us an access to the command, which is TSC. This is the whole
20:57 which is going to allow us to install, not install, but actually execute the TypeScript file.
21:03 So, I can go ahead and say TSC and I can hit a dash V to find out the version of it. As long as
21:10 it gives me any number of version, that is totally fine. Throughout this course, we'll be focusing on
21:15 the core foundation and fundamental of TypeScript. So, any version beyond this or even this version
21:20 is absolutely fine. In case you're using any previous version, that is also absolutely fine.
21:25 Nothing should be worried. These are core foundation. These are the things which never change
21:30 in the language itself. All right. Pretty basic installation, but I have explained each line by
21:35 line. I hope you appreciate that. If you appreciate that, make sure you hit that subscribe button.
21:39 I have noticed that 70% of my audience doesn't do a subscribe button. So, go ahead and please hit that out.
21:45 Okay. Now, this is all done. So, we have a new folder up here. Let's go ahead and fire up a
21:50 VS code as well. So, we're going to go ahead and say VS code, Visual Studio code.
21:55 Should be taking just a minute to get started. And this is what we have. This is a previous iOS
22:00 dev version that is already installed. So, we're going to just remove this. Get started with the
22:06 intro and there we go. Yes. Of course, I trust this. Okay. Now, in this intro, all we're going to do
22:13 is write the very basic hello world, but in TypeScript, we'll be able to compile that into JavaScript
22:18 so that we can see how that works. So, we're going to go ahead and call this one as intro.ts.
22:25 And again, make sure you write this as TS. You can also write it TSX, but that's for a component
22:31 level thing when we want to use or install JSX, execute JSX in the same file. If you didn't
22:36 understand that, that's totally okay. Make sure you write.ts, which is an extension of TypeScript.
22:42 Now, VS code will try to give you a.ts automatically as a TypeScript. In case you don't have that,
22:47 go ahead and install some packages for icons and stuff. Pretty, there are plethora of icons available.
22:53 You can go ahead and look for icons, material icon to what not. Everything is available.
22:57 Now, all right. Now, let's go ahead and see that how we can actually write some of the code and
23:03 convert them into JavaScript. So, the classic, let's go ahead and do a console log and let's go
23:09 ahead and write name. Make sure you write your name. That would be fantastic one. This is a
23:15 classic code of JavaScript that has nothing to do with the TypeScript at all. Let's go ahead and
23:20 create a couple of variables. So, we're going to go ahead and say, let's call this one as number
23:24 or let's go ahead and have a user. So, same example that we have talked through previously.
23:30 And let's go ahead and say that this is going to have a name. Let's say this is my name and an age
23:35 that is going to be 10. Pretty good. And let's just say what more we have email. Well, let's just
23:44 not put email. Let's just have this much only. And further down the road, we also want to have a
23:49 console log of something. So, let's go ahead and remove this one and say we want to print out
23:54 user.name. Now, this is a classic JavaScript. Nothing to do, classic TypeScript. Nothing to do
24:00 with JavaScript. But this thing whole thing cannot be executed at all in the TypeScript format.
24:06 If you put this into production or any application, it's not going to work. This is where your
24:11 installation of TSEX or the TypeScript comes into the picture. So, what you can do is you can simply
24:16 say TSE TypeScript. And once we have this TypeScript, then all we got to do is name the file. In this
24:25 case, intro.ts. As soon as I hit this enter, notice this has automatically created an intro.js
24:32 for me. And the code is exactly same. Yes, the spaces were removed and it tries to align it.
24:38 This is all what TypeScript does. It converts your TypeScript into JavaScript, no matter what project
24:42 you are using. This is the exact implementation of it. Now, the only advantages, as I told you,
24:48 right now it's giving us a squiggly line that it says cannot really clear the blocks go
24:52 variable and all of that. So, that's the basic. We'll go through with a more detail that it should
24:57 be a let or it should be a const. Whatever it should be, why is it giving us errors and whole
25:02 those details? We'll study about that in depth. The only advantage that we get is if I go ahead and
25:07 do an email, it gives me a gain squiggly line that property email does not exist on Type.
25:12 So, the whole idea behind TypeScript is it saves me from some errors which I will eventually fall
25:17 into if I'm writing just code JavaScript. And again, I told you one more time. This is just a
25:23 dev tool. This is a development tool, a wrapper around JavaScript to make your life easier and safer.
25:29 Now, again, there is nothing which is stopping me to execute this code. If I go ahead and run this
25:34 file again, this command again, notice it gives me an error, but still the code works. It says user.email.
25:41 So, yes, there will be errors, but these errors doesn't stop you from producing your JavaScript as
25:47 well. Again, there are a lot of settings for that as well. So, again, you get the idea how this is
25:51 being done. One more thing I would like to mention here is on to the playground. So, if I go ahead and
25:57 click on the playground on the TypeScript website, you will notice that there is a tab which says
26:03 settings. Now, in the settings, you can see there is a lot of settings that are available for you.
26:08 And on top of that, there is a TS config. This is the configuration file that we make while creating
26:16 a React project or another project. In this, there are a lot of options that you want to include
26:20 JSX or maybe you want to include the ES next module. What is your target? Maybe ES 2017, 2019, ES next,
26:29 whatever your target. There's a lot of declaration, a lot of output formatting. How you want to make
26:34 your code pretty fine? Do you want to have an error, not error, strict checking and all of that?
26:40 Yes, we will understand them when we'll be creating our TS config file for the project,
26:44 but I just wanted to give a brief overview that it does exist. And you can see a lot of example.
26:49 One thing that I forgot to mention in the last video is the same thing that a lot of people believe
26:54 that with the TypeScript, you write less line of code. And you can just click on example. And let's
26:59 just say you want to have an example of built-in utility types. And you can see that these are so much
27:04 of a line of code, but ultimately it generates only this much of a line of code. If you remove the
27:09 comments, you can see this is the only code that we were able to generate in JavaScript. And we
27:15 are writing so much in TypeScript. So yes, this is the case. We write a lot more code in TypeScript,
27:19 but it's a safer code. Quite a lot, quite a lot in just one video. So that's it for this video.
27:24 Let's catch up in the next one and try to get one by one the details and the nitty gritty of
27:29 the TypeScript. Let's catch up in the next video. Hit that subscribe.
27:33 Hey there, everyone. They share back again with another video and welcome to the TypeScript series.
27:38 So in case you are new along from learning from me or in case you have watched other videos,
27:42 then you probably know this. So whenever I start a series, I go slow in the very beginning. It might
27:48 feel like it's too slow, but eventually I pick up the pace with the tutorial so that it's
27:52 easier for everyone to follow. And we are exploring TypeScript and one more big thing.
27:57 In all of my videos, I encourage a lot of people to learn from documentation. Surely you can just
28:02 keep on watching my videos, but the ultimate knowledge that I can give you is how to read the
28:07 documentation. So throughout the series, I'll walk you through that how you can read the documentation
28:12 can better at the things so that you can learn things on your own. And we'll be also coding along
28:17 with that. So this is going to be our very first official kind of hello world. And we're going to
28:21 see what impact TypeScript can add when we write a simple hello world program. Nothing fancy,
28:26 just getting started, very basics, very slowly. So let me talk you through and let me bring you up
28:31 on my screen first. So let's first understand about the types. So as I've already mentioned,
28:37 TypeScript is all about types and we're going to study a whole lot of types. So the obvious question
28:42 is what are kind of types that are available in the TypeScript. And trust me, there are many,
28:47 many of the types are available. For example, you'll be saying me talking about numbers and
28:52 strings and Boolean, but these are not the only types. Yes, they can be divided into primitive
28:57 type or the other types or modern types. I honestly say that don't do this kind of division
29:02 between the categories and types. They are all just types and try to picture them through just one
29:07 screen that all of them are just types. And just to name others, there are null, undefined and
29:12 there is a special type known as wide. And there's also objects and arrays and tuples and couple
29:19 of more types as well, which are available in the TypeScript language. And once you understand and
29:24 master what are the types which are available and how to utilize them, that's all the TypeScript.
29:28 That is all the TypeScript is all about. But what I have noticed in a lot of code basis that people
29:33 use TypeScript, but a lot of time this keyword I have found floating around like here and there.
29:38 If you're using any as a keyword, that means you are intentionally making your code more
29:42 wonderful or more like a Java scriptish so that we don't have to worry about the types. If there
29:48 are a situation where you're using any, that means you are not probably not many, not much sure
29:53 that you should be either using it or not. And to surprise a lot of you, there is even a type
29:58 known as never an unknown. Yes, these are a special type given to us by the TypeScript.
30:04 And I would like to walk you through with this documentation. So this is a documentation which
30:09 talks about the unknown and any and object and void and undefined. There's a lot of them.
30:14 And if you look at the stable summary, this is an abstract row, what is allowed, what is not
30:19 allowed and strict checking all of that. Now we'll come back onto this table and chart. We'll
30:23 understand the meaning of it that how any impacts the code that you're writing or how unknown and
30:28 object and void define all of this impact. This is your very first look of how to jump into the
30:33 documentation. So instead of that, let me just click on the get started. And this is what it's
30:38 saying TS for new program. Or in fact, if you go at the very top of it, you'll find the docs tab.
30:43 The docs of the TypeScript and even all of the language are designed by different people. So they
30:47 are very different for all of the other, but they follow some of the specification that this is what
30:53 the guidelines I'll follow in the documentation. So this is the guideline that we'll be following
30:57 through in this entire tutorial. And you can see there's a lot of cheat sheets and all these things
31:01 like decorators, enums are available. We'll be going through with all of them. The first I want to
31:06 bring your attention is just simply the basics, not the handbook, but the basics. So once you click
31:11 on the basics, you can notice that there are things available. So if I click on everyday types,
31:15 you can see there is a primitive type and a lot of tutorial goes through with that, which is good
31:20 that there are strings and numbers and Boolean. But not only that, if you look a little bit lower
31:25 down, there is array, there is any, which is notoriously known for not being used. And there is no
31:32 implicit any, then we have a whole lot of functions and all of them. So JavaScript and TypeScript are
31:37 closely related. We'll come back onto this one. All I want to you for this tutorial is just go
31:42 through this. Don't read the example. Just go through how many types actually can you figure out
31:45 and find out. So on this page, how many types or how many keywords you can find out just let's
31:51 them in the comment section. That would be really helpful for other people who are coming in. So for
31:55 example, we have object, we have union and a whole lot of things. Eventually, we'll be covering them
31:59 up. Don't you worry on that part. Now, once you've gone through with the type, we will be writing
32:04 some code in this tutorial. One thing more I would like to put a picture in your mind while
32:08 learning the TypeScript. The first one is situation. So at what situation the TypeScript serves best,
32:14 although you can design your variable or declare your variable any given time. But imagine to think
32:19 that TypeScript is helping you out and figuring out what data is about to be processed or what
32:24 data is about to be coming from any resource or what data your function is going to send out.
32:29 So just to example, I have taken as a use case scenario here, a function accepts two number.
32:34 Now, what happens in the regular JavaScript code is once a function accepts the number, then you
32:39 check the type of these values. And you want to be make sure that these are actually number because
32:44 I want to perform some operations on that. What TypeScript helps you out is you don't have to
32:50 explicitly check that hey, if the function which is accepting and what is coming as a data,
32:55 is it really number? Is it might be a string or it might be a void or nothing might be coming in?
33:00 So TypeScript allows you to get away from the situation. So extra line of code that you don't
33:05 have to write. The similar situation is a function returns a string. So obviously the situation that
33:10 comes in the JavaScript that suppose you're using a function and you're expecting that the data
33:15 coming out of that function is a string, but that not might be the case. Maybe some other programmer
33:20 has written this and he might have thrown out a number and that could be a problematic situation.
33:26 So when you're working with the team and you're using TypeScript, you are absolutely sure that
33:30 from this function, I always expect that a string is going to come out and that's where when
33:36 you're working with the team, the TypeScript actually makes a life a lot more easier. Yes, there are
33:40 a lot of rules and protocols that we have to follow, but this helps us to actually not fall into
33:45 a lot of such problems. So we're going to first walk through with the very basic syntax in this
33:50 video. We'll be getting through a read through a couple of errors that we already are having and
33:54 then we're going to slowly pick up the pace about reading the documentation and learning more
33:58 about TypeScript. So the syntax is pretty simple. We use let const, whatever the keyword you want to
34:04 use for declaring your variable, then you simply go ahead and use a variable name. After the
34:09 variable name, you put a colon and define its type. Now all the types, almost all the types in
34:14 TypeScript are lowercase. There is no uppercase, there is no camel casing, all lowercase, numbers,
34:19 strings, whatever you want to name or put a data type on it, then all it's a lowercase.
34:24 Then optionally, you can pass on a value or can just declare a variable. Let's go ahead and give
34:28 it a try by writing some of the code because I still believe that writing the code makes much,
34:33 much more easier things. And also we can see there is some squiggly line already in my code which
34:38 is not looking good. So we need to learn how we can actually get rid of this error temporarily.
34:42 And then later on, once we're going to learn about the TypeScript config, it will help us to
34:47 understand it more. So again, have patience. Okay. So let's go ahead and close this out because I'm
34:52 not interested in this one. So intro.ts, nope, not interested. Let's go ahead and create another
34:57 file and let's just call this as variables me.ts. And again, this me is just a fancy word. So don't
35:05 you worry on that. So let's go ahead and declare a simple variable name that just says hello world.
35:11 So let's just go ahead and say, hey, I want to have a let and let's call this one as greetings.
35:16 And in the greetings, we're going to put up a colon and then we're going to write a simple string.
35:21 And then once I go ahead and do this, I'll optionally pass on a value. Now this alone is a good
35:26 statement. There is nothing wrong in it. You have created a variable and you have defined that
35:30 only string type of value can come into it. But optionally, we can also go ahead and put up
35:34 some value in it. So go ahead and write your name. So I'm going to write mine here. Go ahead and
35:39 write yours. Once I go ahead and do this, I want to do a simple console log. I can go ahead and
35:44 simply say, hey, I want to have a greeting just like that greetings. Save this and this works
35:50 absolutely fine in this case. Now, let me walk you through that this is all good. And we can just
35:55 go ahead and use a TSC syntax for this. So TSC and this one is variables.tsme. It is obviously
36:03 going to generate a TSC code. This is all good. And notice here, it doesn't change anything.
36:09 Also, it gives us a squiggly line which says cannot really clear blocks of variable greetings.
36:13 What this all is about? We will have a dedicated video on it. Right now to just get rid of this error,
36:18 we're going to go ahead and say exports, then a colon and that's it. This is going to remove the
36:23 error temporarily and will give us a piece of mine that, hey, don't worry about these squiggly
36:27 lines. But I promise you, we'll come back onto this one later on. Right now, this is all good.
36:32 Now, this alone statement of putting a colon is really, really fundamental to this one.
36:37 You click on greeting and notice it says that the greetings is a string. This is a piece of mind
36:42 that yes, I'm declaring a variable which always, no matter what happens, is always going to accept
36:47 the string. Later on, some other programmer who is working on the same project gets this variable
36:52 and tried to assign it a number as six. This automatically stops me and saves me an error that, hey,
36:57 the type number is not assignable to type string because it's a number. You cannot do this.
37:02 If anybody tries to declare, let's just say a true value into it, it says, hey, that's also not
37:07 allowed. You should not be doing it. That is what the safety that type script actually gives you.
37:12 Not only that, if I go ahead and remove this and if I try to put up a dot, you can see all the
37:17 methods that are being suggested to me like pad ends and all of that. These are string methods.
37:22 These are not methods which are meant for number. For example, let's just go ahead and declare another
37:28 variable up here which actually gets a number. So let's just call this one as my num and that number
37:34 is four or six, whatever that is. And I go back up here and I say, hey, I want to use my num dot
37:41 and I'm going to use two upper case. You cannot do it. Accidentally, this might happen not from you
37:48 maybe, but from person who is using your code base and is collaborating with you on the code.
37:53 It says that, hey, property two upper case does not exist on type number. Not only that, it also
37:59 allows you to have more safety. For example, there is a greeting and I know that two upper case
38:04 or two lower case exist in this one and I can go ahead and run this one, but accidentally maybe
38:08 I'm not using suggestion. Maybe I'm using way more other co-rater and I might have done this
38:13 lower case and I can tell you I have done this. I have done this. A lot of typos in the past,
38:18 but typescript actually allows me to give a suggestion that, hey, property two lower case does
38:22 not exist. Did you mean two lower case? It also helps me to get my indefin method and as you train
38:29 it more, it actually gets suggestions from your own code base as well. So that is really,
38:34 really impressive and amazing. So far, we have gone through with the very basic. We'll take it slow
38:39 and steadily. So right now, all you have to learn is colon and a string. That's how you should
38:43 be declaring the variable. Now, eventually in the later on videos, you will realize that sometimes
38:47 we don't even need to just use this colon. It automatically infers the value and stops you doing
38:52 mischievous, like adding a later on number to the greetings. We will work through in that.
38:57 But right now, this is all. You have gone through with your very first idea of how
39:01 a TypeScript works, a little bit intro to the documentation, some assignment that you have to do
39:05 in the comments section. And I'll catch you up in the next video where we'll explore a little bit
39:09 more in depth of TypeScript. Let's catch up in the next one. And one more important thing,
39:14 very, very important thing. You guys forgot to hit that subscribe button. Go ahead and do that.
39:18 I would be really thankful for that. Let's catch up in the next one.
39:21 Hey there, everyone. I'm face share back again with another video and welcome to the TypeScript
39:25 series. Now, through this series, I'd not only want to talk you through that how to write TypeScript,
39:29 but I also want to get all the best practices that you should be using while using the TypeScript.
39:35 So we'll be jumping through the documentation. We'll guide you briefly about what is there in it.
39:40 And this video is not going to be too much intense. We'll just talk about numbers and
39:44 bullions. We have already talked briefly about the string. And then I'll talk about the type
39:48 inference, which is mostly should be used, but it is less being used. So let me walk you through
39:53 with that. So here we are on to the documentation page. And as we scroll up here a little bit,
39:58 we see that the primitive types that we're discussing, the string which we have already covered,
40:02 and the rest two are numbers and bullions. So we need to cover them up. Now, these are mostly
40:07 used as primitive types and string represent the values like this and then the numbers.
40:11 Now, interesting thing here, which you should get from the documentation directly, not from any
40:15 YouTuber or from any blog article, but rather from the documentation directly. The JavaScript does
40:21 not have special runtime value for integers. So there is no equivalent of int and float. And this
40:26 is usually a lot of time and interview question as well. Do how do we define especially the
40:30 integers or float in typescript? We don't. We just call them numbers and that's how it is being
40:35 defined. And that's how the value is inferred. I'll come back onto the inferred part a little bit.
40:40 So let's write some code and take some example out of it so that we can understand more part of it.
40:45 Now, we don't need to create a simple new file for this one because this is already very simple
40:49 and there is nothing much we are doing. Let me just remove this part that we don't need and we'll
40:54 just go up here. So the two things that we are going to talk about, the first one being simply
40:58 number. And remember, there is again, there is a little bit more to it. Let me walk you through with
41:03 the simple example of the typescript. Remember, this is being called as that we have this number,
41:09 not numbers. There is a special question around it in most of the interviews. Remember,
41:14 this is a number. Now, how do we define number? It's pretty simple. Let's just say we are defining
41:19 a user ID. So this is going to be a simple user ID. And that ID simply can be let's just say
41:26 3, 3, 4, 4, 6, 6. So this is what we have. In the case of numbers, we're going to go ahead and
41:31 put an annotation here, colon and then space and then number. This depicts or this annotates that
41:38 this user ID is number and should always be number. Now, advantage that we get with that is simply
41:43 when I say user ID and I put up a dot, all the values or all the methods that are available in
41:49 JavaScript related to numbers, only those values or those methods are being fetched to me.
41:55 So for example, to exponential, to fix, locale string, all these things, there's nothing much
42:00 on the numbers in JavaScript. And that's why only these values and numbers are being used.
42:04 That's the basic. That's the number. And again, it doesn't really matter if you just add a 0.2
42:08 or 0.3 after it. It is still going to be the number. That's all. That's all it is. There is not too
42:14 much of in depth about the numbers. Yes, we'll go through in that later on. Now, apart from this,
42:19 there is also a Boolean that we have to use. Now, let's just say, for example, you're using some
42:25 values. Let's just say is logged in. So that is something you want to track. And let's just say
42:30 user is not logged in. So that is how it goes on false. And then there is something known as Boolean
42:35 that we have to infer. Now, obviously, you get all the values and methods that are there for the
42:40 Boolean. So later on, if I go ahead and say is logged in, I put up a dot, then we don't have
42:46 much on the Boolean. It's just the value of what is the value of this particular variable,
42:51 true or false. That's all the methods that we have. Now, here I want to bring your attention to
42:56 something known as type inference. Now, a lot of people, when they get started with TypeScript,
43:01 they are very much excited about putting up annotation with every single thing numbers and strings
43:06 and Boolean. But here, what is we are doing as not so good practice? What we are doing here is
43:11 we're making it too obvious. This is a numbers and just after that, we are putting up an equal
43:16 sign and putting it as a number. Now, this is too obvious to do. Now, obviously, there is another
43:21 way of doing and dealing with that thing is, for example, maybe you are not dealing it like that
43:26 and maybe in the very next line, you put up and say that, hey, now user ID is going to get a value.
43:31 Let's just say it's some value and a decimal value. This is still not a good practice because you
43:36 are doing too obvious thing and you are trying to overuse your TypeScript. Don't do that. This is not
43:41 a good practice at all. There are some places where these values or these annotation can be avoided.
43:47 You can just simply avoid to have a type. For example, in this case, just a previous case,
43:52 where we were having this equal sign. Now, in this case, whenever I use number, let's just say I go
43:57 ahead and say number and I use a dot, not number actually, my bad, the user ID and then I use a dot,
44:06 let's just say to fix and this is the method that I'm using. Now, if I hover on to the two user ID,
44:11 it's obviously telling me that it's a number and whenever you are actually defining any number
44:16 and you are just immediately assigning a value it, TypeScript is smart. TypeScript can actually
44:21 infer that you are actually trying to put a number in it and you don't need to do this. But hey,
44:26 what's the point? We were obviously doing the same thing in the JavaScript as well. But no,
44:30 my friend, there is a difference with it. Here, TypeScript is smart enough to automatically detect
44:35 that you want to place a number in it. So, that's why the value automatically is going to be assigned.
44:40 So, it is too redundant to just write a type infer on it and don't you worry, there will be future
44:46 videos where I'll walk you through where this is compulsory that you should be using it as a good
44:50 practice and where things where you can actually avoid it. So, in this case, this I prefer as a
44:55 better code compared to anything else like put up a colon because it is too obvious. Maybe you want
45:00 to have too much safety, have it, no problem at all. But in this case, TypeScript is already smart
45:06 enough. It will still detect that it's a number and if you try to do something which is not really
45:10 great, something like you try to assign a value, it will still give you some errors that hey,
45:15 you're doing something that you shouldn't be doing. It is a type of string. It is a type of number
45:19 which I already deduced and you're trying to assign a string onto it. So, yes, all these values
45:24 still come up it. So, remember, in order to write better code, it's not just always you follow these
45:29 columns. And I see a lot of people just follow these columns and these types just in the start of
45:35 the file that hey, everything should be named in file. No, this is not how TypeScript work and this
45:39 is not the good practice of the TypeScript that should be worked. TypeScript is a little bit more
45:44 of a complex subject and that's exactly why we are exploring this one up here. Now again, you now
45:49 you understand about the type inference that just that TypeScript is smart enough to get all the
45:53 values and if you're just assigning immediately, yes, this is still a TypeScript, you don't need to
45:58 put column every here and there in the entire TypeScript file. And in order to get output of that,
46:03 we can simply go ahead up here and simply say TSC variables dot TSC variables me dot TS and this
46:11 still will guess get us all the values. Remember again, the syntax of colon Boolean is a TypeScript
46:18 syntax. So, whenever a JavaScript compile file is going to come in, it's never going to be a colon
46:24 or the value. I hope you get the idea. I hope you got the best practice as well that you shouldn't
46:28 be doing too much obvious thing. Yes, there is a special place where you put columns and the type
46:33 of it. I'll walk you through with that. So, now that we have gone through a little bit with the
46:37 dark invitation along with me, let's go ahead and explore TypeScript a little bit more. In the next
46:41 video, I hope you have already subscribed. Doesn't feel like really good to again and again asking,
46:46 but hey, 70% of you is not subscribed. So, go ahead, hit that subscribe and let's catch up
46:51 in the next video. Hey there, everyone. I'm Ataish here back again with another video and welcome
46:56 to the TypeScript series. Now, before we move ahead in this video, hit that subscribe because 70%
47:01 of audience is not subscribed. Anyways, let's move into the any keyword. Now, this is mostly the
47:08 usual keyword which people use to get away from the syntax of TypeScript. I've seen many people
47:12 using TypeScript, but still exhaustively using any. This is not a good practice and I'll walk you
47:18 through from the documentation that it has written there. It is not a good practice. First,
47:23 let me give you a brief scenario overview that where people actually use it and where you shouldn't
47:28 be using it. So, let's just say you're trying to declare a variable and you don't know what to
47:32 place inside this variable. So, you just call it as hero right now. You have no idea right now that
47:37 this variable is eventually going to turn into a string or a boolean or anything as a matter of
47:42 fact. What you do after some time, you declare a simple function which calls it as simply get hero
47:48 and this get hero just returns you a hero. So, let's just say a hero is being returned as a
47:52 thaw. Now, later on, you decide that hey, I want to have this hero and this hero will get the values
47:58 from by calling this method as get hero and we run this method. Now, if we go ahead and simply
48:04 hover over this value, we can see that this is being inferred as any which is really a bad case.
48:10 You really want to avoid these cases. Now, right now, this TypeScript file has no idea what to
48:16 infer the value and I'll walk you through the documentation that the official documentation says
48:21 that when in such situation where TypeScript cannot find out that what value is going to come up
48:26 later on in the future, it puts that as any which is a kind of a getaway from doing the things and
48:32 that is exactly happening up here that it is just saying that hey, this is any it could be this could
48:38 be a simple string right now. Still, it is any but there is nothing which is stopping me to return
48:43 a true and this is still accepting the value which is not really good case. Maybe just imagine
48:48 you have declared these values and you are getting these values but there is another developer who is
48:52 working on the API call and instead of just giving you a string based on which your entirety of
48:57 a program is dependent, yes, it's returned you a true or maybe just a status code. This is not good.
49:04 This actually breaks the consistency of the code. So, in this case, we have this a string.
49:08 So, the ideal case would be remember in the earlier time I told you that in the earlier case,
49:13 in such scenario, the automatic inference of the values like string and Boolean is not good.
49:19 In these special scenario, I would love to have the simple string that hey, now please infer
49:23 the value as a string. So, whenever the values are going to come, whether through an API call or
49:28 whatever you are doing, it should always be inferred as string. Now, if I go ahead and another
49:33 programmer who is writing this, now if it goes as and says true, automatically you get an error that
49:38 hey, it was supposed to be a string but now it is being returned as a Boolean which is not good.
49:43 So, you shouldn't be doing that. Now, let me walk you through with the documentation
49:47 because that is the most important part of this video. So, here's the documentation and you can
49:52 see the documentation. There is any and there is also no implicit any. Yes, the any actually
49:58 is a gateway and it tells you that any can have actually anything at all that you want to have.
50:03 So, that whenever you don't want a particular value to cause the type checking. So,
50:07 that's when you use any. Now, notice this very carefully. Any is not a special type that you are
50:13 assigning. It's not a string, it's not a Boolean. Any is simply a marker in the TypeScript
50:18 which just simply says that hey, I don't want to do the type checking for it. Basically, turn off the
50:23 type checking for that particular value. You don't want that otherwise while you're using TypeScript.
50:28 The most important line is just here. You usually want to avoid this because any isn't type checked.
50:35 Use the compiler flag. No implicit any to flag any implicit any as an error. So, one more thing we
50:42 have learned that there is a setting in the tsh config file that we can go for no implicit any
50:47 that will allow us to not fall into such thing which is any. So, I hope this video gives you a
50:52 clarity about when to use any, when not to use any. Yes, there might be one or two cases but really
50:57 you don't want to use any in any of your code. It is not a good practice. You are avoiding all the
51:02 strictness that TypeScript brings to your code. So, I hope this video has given you a clarity about
51:07 any but the most important another thing here is the function shouldn't be defined like this.
51:12 The function should have more value. So, the stricter check or definition that hey, you cannot
51:16 return a Boolean value. You should always be returning a string value. So, from the next video
51:22 onwards, we're going to study about how functions are defined using TypeScript. Let's go ahead and
51:26 catch up in the next video. Till then, hit that subscribe and I'll catch you up in the next one.
51:30 Hey there, everyone. I'll be back again with another video and welcome to the TypeScript series.
51:35 I'm pretty sure that you have already heard about the functions either in JavaScript or TypeScript
51:41 but I'm pretty sure that a lot of you don't know what should be the mindset behind using the
51:45 functions in the TypeScript. There are a couple of ways that should always be running in your mind
51:49 and don't worry, we will not be dragging this topic around for thousand videos. There will be
51:54 just two videos. This one and the next one and we'll be covering end-to-end functions in that.
51:58 So, after watching these two videos, you'll be all comfortable with handling any types of functions
52:03 in TypeScript. So, let's get started. I've created a new file up here which is saying simple console
52:07 log and let's go ahead and try to create a function. We'll be creating basically three or four
52:12 functions which will give you eventually the whole idea and the picture and scenario which you
52:16 should be worried about. First of all, it's really clear that first function that I want, the
52:20 goal behind it is I want to add a two value to it. So, obviously, I should be taking input as a
52:26 simple number and let's go ahead and try this out. So, let's just say if I go ahead and say,
52:29 hey, I want to add two. So, I'll be taking input as number and that's pretty much it.
52:34 And at the time of returning it, I'm going to go ahead and say, hey, whatever the number you are
52:38 taking, just go ahead and add two to it. Pretty simple. Nothing wrong in that. Now, if I go ahead and
52:45 work on with that, if I go ahead and try to add two this, I can go ahead and say, hey, I want to
52:49 add two to the value five. Nothing wrong in it? Absolutely, they say. But here comes the problem.
52:55 The problem in the TypeScript. The problem which comes up in the TypeScript and by the way,
52:59 please excuse my system. It has been heavily loaded for the life classes and a whole lot of
53:04 other things. So, it might run a little bit slow. So, we have to wait a little bit to see the
53:08 errors. The notice here, the first important thing is in this add to function, if I hover this,
53:13 we see any and any is a problem in TypeScript. Whenever there is an inference of what should be the
53:19 data type, it is usually good in the case of variables, but in the case of functions, not so good.
53:25 So, in this case, notice here the function add to accept a number which is any, which is problematic.
53:32 The reason why it is problematic is because I can simply go ahead and come to here number and
53:36 can I simply go ahead and assign values like two upper case, which I shouldn't be allowed to do,
53:43 and right now I'm allowed to do so. And even if I run this file because my system is a little
53:47 bit slow today. So, if I go ahead and run this one, I'm allowed to do so. Although this is creating
53:52 a problem that hey, this is a duplicate function. So, obviously, this is the error we will talk about
53:57 later on. Right now, let's go ahead and export this, save this and there we go. So, I can run this
54:02 code again and this produces a fine JavaScript, no problem at all, but I shouldn't be allowed to
54:08 do this because if I just go ahead and convert this to into an upper case that becomes a string,
54:13 not a good idea. So, that is one problem that I'm facing. Another problem that I'm facing is if I
54:18 go ahead and convert this file like this, it still works. Shouldn't be working there. The whole idea
54:23 of the TypeScript is to have a stricter type so that we make less mistake and the fellow
54:27 coder who are working with us makes less mistake. So, in this case, let's go ahead and work on and
54:32 try to fix that. Now, the fix is really easy. I can go ahead up here and can say that hey,
54:36 whatever the value you are going for, make sure that the value that comes to you is always going
54:41 to be the number. Now, automatically TypeScript is giving me a problem that hey, hey, whatever you're
54:45 trying to do, this is not good, this is not allowed. So, please don't do this, always pass on a
54:51 number to us and now this kind of a five in the strings is not allowed and go ahead and stop that.
54:56 Now, since you have written the function definition with the number being accepted like that,
55:00 I cannot do mischief things like I can go, I cannot go ahead and say hey, you cannot go ahead and
55:06 say hey to uppercase and go like this. Now, no, you are not allowed to do. Whoever is the creator of
55:12 this function or designer of the function in your entire group has said that this function needs to
55:17 take input as a number. So, that is why we are 100% sure that when we add two to it, it is possible
55:23 in operation. We don't need to do extra check. We don't need to run the conditional that hey,
55:27 if the number is number then go ahead and do it. Otherwise, return an error message that hey,
55:32 please pass on the number. No, you are not not supposed to do all of that. So, this is all good.
55:37 Okay. This is the basics of it. Let's try to wrap this up with one more type of a thing. So,
55:42 another thing, another function that I want to have is a really a simple method in which I want to
55:48 just have some strings. So, let's go ahead and have this one. So, let's just say you are you were not
55:52 aware about the two uppercase methods. So, you want to just go ahead and say I want to have a
55:57 function which says get upper. So, what it does is convert any string into uppercase values.
56:02 Similar to that, you go ahead and say, hey, give me a value. I go up here and say, hey, I want to
56:07 return whatever the value you get. I'm going to go ahead and put a two uppercase onto this one,
56:12 two uppercase. Now, again, I got no suggestion. First of all, that is bad. Probably my compiler is
56:18 slow. That could be an acceptable case. But here in this case, since this value, if I go ahead and
56:23 look onto this one, this is any, any is again wrong. And if I go ahead and say, hey, let's just say
56:29 get upper. I go up here and say, hey, this upper is going to get a value, something like this.
56:34 Obviously, this is problematic here. Right now, squiggly lines are there. It is telling me, hey,
56:38 dude, you're doing wrong. You need to pass on one compulsory argument. So, I can go ahead and pass
56:42 on four. It's happy. And you know why it is happy. It shouldn't be happy. It should be mad at us.
56:48 Because the value should always be string. So in this case, the type annotation is really,
56:53 really strong. I told you in earlier videos, in the case of variables, it's optional. It infers
56:58 the type pretty nicely. So there is no problem. In the case of function, it is really compulsory.
57:02 Let's go ahead and move on. And now it gives me a problem that, hey, dude, whatever you are doing
57:06 with four, no, you shouldn't be doing that. In case you want to convert this in upper case,
57:10 either pass me on four like this. That is acceptable. That is doable or just pass on like this.
57:15 That is also doable. That is how you're using. I'll convert that. Okay. Moving on quickly and
57:20 fastly. Don't want to drag down the tutorial. Okay. Let's just say I create another function,
57:25 which is going to be simply a sign up. So I'm going to go ahead and say sign up user. So let's just
57:31 sign up the user. Now, for this one particular one, I'll just define the definition like this.
57:36 And I want to have a couple of more parameters in this case. At the time of sign up of the user,
57:41 let's just say I'm going to ask him for the name and I'm going to go ahead and ask him for
57:46 email and I'm going to ask him for password. Pretty common thing. You have seen this thousand time.
57:51 Now, what this is particularly bad in this case because I can simply go ahead and say, hey,
57:55 I'm going to go ahead and have a user sign up. If I go ahead and go like this,
58:00 obviously it complains that, hey, there are squiggly lines. So that means you have to pass on.
58:04 But all of these, these are marked again as any. Although there are three parameters this time,
58:08 but they are being marked as any. So I can go ahead and say, hey, one, two, three. You should be
58:13 all happy because it's any and that defeats the purpose of having a TypeScript. So in these cases,
58:19 also individually and this is the syntax. How you do it? This one is a string and this one is also
58:25 going to be a string. And since everybody is a string, let's change this one. So this is going
58:31 to be is paid. So just to have a flavor of it, this is going to be a Boolean. So in this case,
58:36 we are going to go ahead and have a Boolean value. Pretty simple, pretty easy. So this is. Now,
58:40 right now in our function body, there is nothing in it, but you get the idea. You have watched the
58:44 JavaScript, the code part and everything. You can write that. This is a series more about focusing
58:48 on the TypeScript. So now we see the squiggly line complaint, but other guys are not complaining.
58:53 And this is the one thing I absolutely like about the TypeScript. So fix one that are at the time.
58:57 This is updated in the recent version of it. So I go ahead and say, hey, you need name. I'm
59:01 going to go ahead and give you a name, probably my name and say, hey, this is also incorrect. It
59:07 argument is number, but it shouldn't be a string. So let me go ahead and change this one. So
59:11 let me go ahead and say, hey, they're at LCO.dev. And this one also needs to be a Boolean. So is it a
59:18 paid user? Nope, it is freebie. So there we go. Now it is all good and okay. Now one more thing
59:24 that I want to cover in this video quickly is another method. And then I'll tell you about the
59:29 problem. So let's go ahead and actually use different kind of function this time and error
59:34 function. So let's just say we're going to have a simply let and this time log in user. And we
59:40 can just go ahead and use the error function. The definition remains same. So I won't be writing
59:44 anything inside the curly braces, but the value which we are worried about is how to take the
59:48 input. Let's just try to have simply email and is paid. Let's just say these are the things. So
59:54 I'm going to go ahead and worry about email. Probably in name also. Let's just say name, email.
1:00:01 And again is paid. We are using same parameters. Now this is good. This is good. There is no problem
1:00:07 here. But let's just say I only want to pass on two values. Obviously these kinds of cases will
1:00:12 come up here. So in the name I can go ahead and say, hey, this is going to be a string. The email
1:00:16 is going to be a simple string. And the paid is going to be a simple Boolean. But once in
1:00:23 text that might confuse you, how can I pass on default values? Let's just say in the case of
1:00:27 log in user, I want to use this and I want to simply pass on just two things. Maybe name and email.
1:00:33 So name is going to be H. And the email is going to be H at the rate H dot com. I wish I got that
1:00:41 domain. But I don't want to pass on other values. Now when I save this one, notice here log in
1:00:47 user, it is not giving me any complaints as of now. Let me go ahead and try to run this one.
1:00:54 And there we go. I told you, my system is little slow today. But just giving the idea that yes,
1:00:59 this is paid is a compulsory thing. It needs to be there. And one way you can have an avoidance
1:01:05 of this one is simply by providing a default value. The syntax goes. First you annotate it,
1:01:10 colon and then the data type. And then you simply go ahead and say, hey, this is going to be a false
1:01:14 by default. And now the system is happy. Not because it is slow. It is truly happy. I can go ahead
1:01:19 and run the code. And I can see that, hey, this was all okay. And this is the brief overview of
1:01:25 it. And yes, it generates the equivalent of the same exact, almost same code. But notice here,
1:01:30 some code was generated a little bit more in the log in user. This is the most important part
1:01:34 where we should be focusing a little bit. Now, obviously, this is generating us bar as a keyword.
1:01:39 We can update the TS config and learn about that later on. Please ignore that as a moment.
1:01:44 And right now, we can see that there is a name, email and is paid. And we are looking for a
1:01:48 conditional check. If is paid is void, then it is zero. Otherwise, false, you get the idea.
1:01:54 TypeScript helps us to write a little bit of a cleaner code as a stricter code in that case. So
1:01:59 this is all about it. But one thing still is remaining, which is, hey, if you look at this example,
1:02:05 closely, add two is a number that is great and fine. And maybe we are holding that value and
1:02:10 further doing an operation. So for example, let my value that is going to be holding by add two.
1:02:17 And I'm expecting that the value is going to be added to two. So seven value. But what instead of
1:02:24 this, I go ahead and return not just like that. So let me just comment this out. And I go
1:02:29 ahead and return a simple something like, hello, nobody's stopping me doing that. So we need to learn
1:02:35 that, okay, this is completely stored and completely fine. And yes, my system is not
1:02:39 slow. This actually is allowed right now. So we need to worry about one more thing about the
1:02:44 functions, which is, how can I return more accurate value? And that's going to be coming up
1:02:49 into the part two of the TypeScript function. Go ahead and hit that subscribe button. I'll catch
1:02:54 you up in the next video. Hey there, everyone. It's here. Back again, the other video. And welcome
1:02:59 to the TypeScript series. So in this series, we have already discussed a tiny bit about the functions
1:03:03 in the last video. And as I promised, this is going to be the final video on the promises. And
1:03:08 you will have enough of the knowledge of how to handle functions. Now the TypeScript revolves
1:03:12 all around the types and you will be learning a lot about the types as we go further. It's not like
1:03:16 just these are the primitive types. These are the types. That's all you go ahead and do with that.
1:03:21 It's more about the philosophy of how you use the types where it is necessary, where you can avoid
1:03:25 them and all of that. That is what we are going through with this series. Remember, TypeScript
1:03:30 is just a superset or a wrapper around the JavaScript that allows you to write better JavaScript.
1:03:35 So I hope you have watched the entire series or playlist. And in case you haven't yet,
1:03:39 go ahead and hit that subscribe button. And let's go ahead and get started with that.
1:03:42 So taking you again on to my computer screen. So this is what we have done in the last video.
1:03:47 Now while discussing all of this in the last video, we noticed that we were returning instead of
1:03:52 a number just by adding to it, we were returning hello. And this was not giving me any problem at all.
1:03:57 And this is a point of concern for me. Especially try to always imagine whenever you're learning
1:04:02 TypeScript, always imagine that this is not just you who is writing the code. This is a team of 20 or
1:04:07 maybe 30 developers who is writing the entirety of the code. You have defined some function. Maybe
1:04:11 somebody wants to add his own functionality of the function. And now if he's going to do such things
1:04:16 like return hello, obviously this will break your entire application because there are probably
1:04:20 1000 use cases of this simple method, which are dependent of returning a number to it. But since
1:04:26 you changed that and you're returning a string, that can crash your entire application. That is
1:04:31 a little bit debug to handle the things in 20 or 30 or maybe 40 developers of a team.
1:04:36 So that is why TypeScript is being used in the function. So obviously this is making a problem,
1:04:40 but TypeScript is not giving me any error or at all. So that is why we have learned about that
1:04:45 at the time of taking the input, we can annotate it with by whatever the type you want to accept. And
1:04:49 similarly, you can just put a column and can say that, Hey, this is add to this is supposed to
1:04:54 return me a number. Now, as soon as I do this, this will allow me to not do such things, which is
1:04:59 just a mischief activity that, Hey, instead of returning a number, why are you returning as simple
1:05:04 hello, which is a string? You shouldn't be doing that. So I can comment this out and I can remove
1:05:08 this comment and can say that this is happier now, much more happier. This saves me time of time
1:05:14 and my team's time to make right and right productive code and make better softwares. Okay. Moving on,
1:05:20 let me talk and discuss a little bit more about the functions and then we'll redirect you onto
1:05:25 the documentation to understand that yes, there can be more with the functions, but this much of
1:05:29 the knowledge is enough. Good enough. Okay. Moving on. So let's just say first and foremost,
1:05:34 let's talk about some of the functions which are going to be like this and again, we'll talk about
1:05:39 them a little bit later on right now. Just want to give you a brief overview of this. So for example,
1:05:43 let's just say there is a simple function which says get value. There is nothing wrong in it.
1:05:48 And in this one, you simply say, Hey, give me my valve just like this and this could be anything.
1:05:53 Number string doesn't really matter. Let's take our example with the number itself.
1:05:58 Now, you're doing some conditional check maybe just with the if condition, something like this.
1:06:03 If my valve is greater than five, then I would like to simply go ahead and say, Hey, I would love
1:06:09 to return something like true. Maybe there's a use case scenario for you in this one. Otherwise,
1:06:15 if that's not the case, you're going to go ahead and say, Hey, return a status code. Maybe you're
1:06:19 building a web application which says 200. Okay. Now, in this case, obviously, our first theory is
1:06:24 not really applicable because if we go ahead, right now, you can see if you get over on the
1:06:28 this one, this says, Hey, this is giving some hint that it can be either a true or can be a string,
1:06:33 but we are not implicitly mention explicitly mentioning that it can be as simple. Let's just say if I
1:06:40 do head and string, then this gives me a problem. If I go ahead and say, Hey, this is a Boolean,
1:06:44 then this gives me a problem. So we haven't yet learned about the type where we can return more than
1:06:49 one type. Just want to give you a brief overview that these kinds of scenarios will happen. These
1:06:54 are part of functions, but we have to learn a little bit more about TypeScript in order to handle
1:06:58 these situations. Not really complex. It's just a union type and we'll discuss on that in a separate
1:07:03 video. So just giving you that yes, this could happen. This is one of the case. Okay. Moving on,
1:07:09 there are a couple of more things that you can do. For example, let me take another example so that
1:07:13 you can take these code files in note one. So let's just say there is simply a hello and this is a
1:07:18 simple method or let's just use a arrow function method because I think you would also love to know
1:07:24 that if here we can put up a colon and number, what is the syntax of doing the same thing in the
1:07:30 arrow functions as well? So this is how our basic arrow function works. We have written that
1:07:34 many time. So inside here, we take all the parameters, like for example, you want to take a string
1:07:38 as parameter, you can do that. Just after these parentheses, you can put up these colon and can say,
1:07:43 Hey, I'll return a best string as well. Now, as soon as I do this, this actually gives me a problem
1:07:48 that hey, functions whose declare type is neither void, not any must return a value. So this is
1:07:54 giving me a problem that hey, you're not returning me a value. So your code is actually wrong. So in this
1:07:58 case, if I go ahead and return even an empty string, this is just working out. So this is the basics
1:08:04 of how you do it in an arrow function. I hope you are getting this. I hope you are enjoying this.
1:08:08 If you have hit that subscribe and a like would be really awesome. Otherwise, let's continue. There
1:08:13 is no problem at all. Okay, one more thing I would like to discuss about this is some values,
1:08:19 something like this. So let's just say we have some heroes and you know, what heroes I'm about to
1:08:24 use, you know, me, I'm a big Marvel fan and a DC fan also. So let's just say we have a Thor,
1:08:29 we are going to go fit Spider-Man and we are also going to go with Iron Man. So we have a list
1:08:36 or an array in which there could be numbers, there could be string or something like that.
1:08:40 Now, all the great advantage of using the TypeScript is it knows really so much out of the box.
1:08:45 For example, this is a common scenario. We do this in like 1000 times in JavaScript. If there is an
1:08:50 array, we go ahead and loop through it by using a map. If I go ahead and use a map, I'm actually
1:08:55 looping through each of the hero and then I go ahead and use a callback and I can probably say
1:09:00 simply, hey, I'm going to return a simple string, something that's going to say hero is hero is
1:09:10 and then let's use a variable which is going to be something like this and let's just go ahead and
1:09:15 have a hero. So this is a really simple code, nothing magical out of the box. But if I hover over
1:09:21 to this hero's and this map function even here, you can notice that this is giving us so much
1:09:27 of the definition and advantage. I don't have to call anything. It automatically predicts
1:09:31 that hero is going to be type of string because this array is of type of string.
1:09:36 But if I go ahead and duplicate this and let's call this one as let's comment out this one
1:09:42 and instead of having a thought, let's just go ahead and say that this is one, this is two
1:09:50 and this one is three. So TypeScript, all I wanted to show you is TypeScript is smart enough
1:09:55 if I hover over this. It automatically changes this hero to a number. So it is aware of the context
1:10:01 that is coming up in here. Right now, if I go ahead and comment this one, comment this one,
1:10:06 it automatically switches its thing into strings. So the hero is a string in this case.
1:10:11 So I can avoid an additional step that, hey, whatever the values that are coming up from this one,
1:10:15 I don't have to explicitly annotate that this needs to be always string. Perfect syntax,
1:10:20 I can go ahead and work on with that. But as you know, the context switching of the TypeScript
1:10:25 is really smart and we can rely on this one. So there is no problem in that. So in this case,
1:10:30 it's good. I'm happy with this one. But the one thing which you should be really careful is
1:10:35 what is the return type of this method. So in the map, it is expecting that, hey, you're returning up
1:10:41 this string here. But instead of this, there might be a case where you want to return in every case
1:10:46 too. That is also allowed and that is also valid. That's why the map has such a detailed
1:10:52 information that is given to the TypeScript that, hey, what is the value you want to return?
1:10:55 In this case, it could be two or it could be a previous value. In this case, especially,
1:11:00 I would love to return that what is the type of the value that we are returning in this one.
1:11:04 Again, we could do it like this and then we can say, hey, the values that I'm returning is going
1:11:10 to be simply a string. There we go. This is much more of a readable and reliable code. So when I go
1:11:17 ahead and say, in every case, I'm going to go ahead and do one, it stops me from doing this.
1:11:22 So a good practice that we should all follow that, hey, don't do such thing. Yes, you can avoid
1:11:26 that input. It will automatically deduce what is coming up from the array. But this is a better
1:11:31 syntax, especially for when you're writing the code in the team. So this is a better syntax.
1:11:37 This is the basics. Now coming up on to the final part of the function where we actually will move
1:11:43 into the documentation. This will actually force us to move into the documentation.
1:11:47 So let's just say there is a function we are defining and there are two types of function.
1:11:50 The first one is simply saying console error. So the idea behind this method is whatever is
1:11:57 being passed to it, you just go ahead and log it to console. So let's go ahead and log it to the
1:12:02 console. Obviously, we have to take error message. So let's go ahead and call this one
1:12:06 as error message. That is a type of string that is being given to us. And we are just going ahead
1:12:12 and saying, hey, just go ahead and print this error message into the console log.
1:12:16 A very common scenario, which you do while building the bab application in the initial phase.
1:12:21 Now, if I hover this one, it says, hey, the console error, the message it's taking is in the
1:12:26 string format. But the call and after this is void. That means it's not returning anything.
1:12:30 So yes, this could be the thing. But another, this is not a good practice.
1:12:34 Especially if you're using TypeScript, the good practice is to explicitly mention
1:12:38 that, hey, whoever is using this function, he knows more about the definition of function
1:12:42 that this is returning a void. That means it's not going to return anything ever.
1:12:46 So accidentally, it just says that, hey, if I go ahead and say, I'm going to return one as
1:12:53 error message now, you shouldn't be doing that. And again, this might look like, hey,
1:12:57 that's very easy. It's easy because you're just alone coding right now watching a YouTube video.
1:13:02 But imagine when you'll be writing code with along 15 developers or maybe 50 developers alongside
1:13:07 with you. Okay, the same thing could be replicated one more type. Another method that you will be
1:13:14 handling a lot or writing a lot is handle error. So this handle error, obviously, this is handling
1:13:20 the error. This is not going to be returning a void because it handles the error. So let me go
1:13:26 ahead and copy some line from the documentation directly because this is something which is coming
1:13:30 up from documentation. I'm not making this up. So just like we have all these things in the
1:13:34 documentation under the more functions, this is written as never. Some functions never returns a
1:13:40 value. Neither it's void because void is means return nothing, but there is never as well,
1:13:46 which never returns a value that simply means the function never returns a value. I know this is
1:13:51 very close to the void, but this is specially made so that you can handle some kind of error because
1:13:56 this is kind of a intentional crash that we are doing to the function for having this. So in these
1:14:01 kinds of cases, I can just copy this line and I can go back onto the code and instead of the console
1:14:06 logging the things, I can just go ahead and say throw a new error and whatever the error message.
1:14:10 I am just passing on. I'm handling this gracefully. So if I go ahead and put this as a void, which is
1:14:15 not a good thing. If you want to make your errors more robust and handling part of it, just use
1:14:20 never, which is again recommended in the guidelines of the types. If I hover this again, it says the
1:14:27 return type is never and error handle is declared, but its value is never read. That's fine.
1:14:32 But you get the idea from where this is coming up. Again, I'm not pulling this out from the thin
1:14:36 air or out of a hat like a magic. This is mentioned in the documentation. The never type
1:14:41 represent value, which are never observed. In the return type, it means that the function throws
1:14:47 an exception or terminates execution of the program. So forceful termination of the program never
1:14:53 also appears. When TypeScript Remind, there is nothing left in a union. Union will talk about that
1:14:58 later on. That's a subject later on. But you get the idea how to read the documentation and how to
1:15:03 find out the actual source from where this is coming up. I hope you are enjoying this. The valuable
1:15:08 series up here, and again, I'll wrap this all the source code from now onwards. I'll put them into
1:15:13 the dashboard as a community session, which is a free segment here at Inuron. You can go ahead and
1:15:18 download them. So you can have that. And again, the most important part is not just the source code
1:15:23 that I'm giving you. The most important part is the mindset that I'm trying to give you with these
1:15:28 videos. So you can write better piece of software. That's it for this one. Let's catch up in the
1:15:32 next video. If you really think that just by adding TypeScript, you have removed all the bad
1:15:37 behavior of JavaScript. That is not the case, my friend. There are some still odd behaviors,
1:15:43 even in TypeScript. Maybe in the future version, they will go away, but still we have a lot of
1:15:47 misbehaves of JavaScript still existing in TypeScript. I'll show you one here. Hey there,
1:15:51 everyone. Hit the share back again with another video. And let's go ahead and get started with
1:15:56 the TypeScript series. Before that, hit that subscribe button and the bell icon as well. I would
1:16:00 be really, really happy with that. Now that assuming that you have hit that subscribe icon, come on,
1:16:06 guys. 70% of you haven't hit that. Okay, I assume that you have hit that. Now let's go ahead and
1:16:11 walk through with the objects. Now again, I won't be consuming too much of the videos like I won't
1:16:15 be releasing 14 or 15 videos on just objects on TypeScript. We'll walk through with the most
1:16:20 important part of it, enough that you can get started with that. So there will be a couple of
1:16:25 videos on object. Let's go ahead and get started with this one and I'll walk you through how objects
1:16:29 are there and what are the places where it can misbehaves a little bit and your code might actually
1:16:34 get compromised with that. So let's go ahead and walk you through with that. So how does the object
1:16:38 works? The objects are really simple. We use them all the time in JavaScript as well. So maybe you
1:16:43 want to make an entry in the database. You collect all the values in the object format and you pass
1:16:48 on this object to maybe a backend controller. It modifies all the things and adds an entry in the
1:16:53 database. That is the most common use case scenario. For example, let's just say I want to create a
1:16:57 simple user. So this is how go ahead and create an object of a user and I'll just add more values to
1:17:03 it. So for example, if I go ahead and say, hey, this is the name. So whenever I'm adding a value
1:17:08 or a user to my database, I'll say, hey, this is a name. Then we got an email. So let's just say
1:17:13 hithesh, else you're on dev, another email. And I'll also say that if this is active or not.
1:17:20 So I'll say if this is an active account or not, means people are regularly using it. So this is
1:17:26 a basic object. And yes, typescript syntax is exactly same and that is where you'll be using it
1:17:31 most. But this is not the use case of the object. Designing an object like this doesn't really
1:17:36 make sense and you won't be using it too much. The use case of the object is through the functions.
1:17:40 You have to actually pass on these objects into a function or you have to return some objects
1:17:46 through the function. That is the most common use case that we use while developing any application.
1:17:50 So let me walk you through with how these are done. So for example, let's just say we are creating
1:17:55 a method which is create user and this is a simple method. Now since this is a forgot the keyword.
1:18:02 So function. So this is a very basic method that we have. Now this method expects that you will
1:18:07 be passing me some of the user. So the very first syntax is you pass me an object and I'll define
1:18:13 that at least give me a name and that name is going to be a type of string and give me another one
1:18:20 which is let's just say is active or is Google Auth or what should I do is paid. Okay let's
1:18:30 let's go with that and that will be a Boolean. So this is the very basics of it that we have got.
1:18:35 Let me just go ahead and move this up. There we go. So this is the most basics of that we have. Now
1:18:41 well whatever we return the value we'll discuss on that you can return an object obviously that is
1:18:45 the most basic part and the obvious part of it. Now what it allows us when you have a definition
1:18:50 like this then the method becomes a tiny bit more secure. So for example when I say hey I want to
1:18:55 create a user I want to use that. TypeScript actually stops me for doing that and looks like it is not
1:19:02 stopping me probably my system is a little slow. So let's just go ahead and say TSC and I'll say my
1:19:10 objects. Let's go ahead and run that and there we go we saw an error that create user cannot be
1:19:16 used like this. So let me just go ahead and try that. Hey why are not let's try go back up here
1:19:22 and come here. No error threads but you get the idea that this is actually stopping me from doing
1:19:26 all these things and how can I actually get rid of this by passing on an object. By the way why
1:19:33 this is stopping me to doing so because probably I forgot to export. So actually we can we always have
1:19:38 to do we'll come back on to this part that why we are actually doing this because this exporting
1:19:43 of the objects is really helpful in this case as well. I will definitely have those values so please
1:19:50 cancel that and we'll be exporting that probably this will start giving me the errors. There we go
1:19:56 we got the errors. I'll definitely discuss this part as well as we move into the react part or maybe
1:20:00 angular part of it that how this actually works will surely take care of that. Now right now the
1:20:05 important part is that when we say create user it stops me from doing this so there we go we can
1:20:10 go ahead and use an object. Now it's complaining me that hey the object that you have defined that
1:20:15 is exactly the same which is I'm expecting from this method to give me but the syntax or the
1:20:21 following must have variables are missing or properties. So in this case I have to say name and
1:20:26 the name is going to be let's just say I'm creating a user with the name hithesh that is fine but
1:20:31 still I'm missing one which is is paid so I'm gonna go ahead and say is paid and we'll be saying
1:20:35 this is a free user on the platform. So this is a pretty obvious behavior that we have and this
1:20:41 is now probably trying to have my code in a much better way. So this is the most basic of it and
1:20:48 you can actually add a lot more things on top of this. Maybe you also want to define another
1:20:53 syntax which actually makes people a lot confusing is what happens when a function actually returns
1:20:59 an object so that is the most confusing of all. So let's just say you're not creating a user you
1:21:04 are creating a course in this time. So let's just call this as create course. Now this is obviously
1:21:10 a function so let's go ahead and say function and this is an object. Now this is a return type
1:21:16 and there we go and this is actually a definition. There we go. Now this is a bit of a weird syntax
1:21:25 we forgot a colon there. Now what this is saying is that hey this is a function name. This is a
1:21:33 function parameter where you pass on. This is a return type and this is a definition. So yes
1:21:38 there is a lot there is a lot confusing up here. The reason why it's complaining is simply because
1:21:43 you have promised that you will return an object and you are not returning anything. So obviously
1:21:48 you have to go ahead and return this one. This one is happy now but in case you have a special
1:21:52 syntax that I should be returning some things like this. So you can actually go ahead and
1:21:57 make it like this. So any course that you are having is going to have a name and the course should
1:22:02 have a price again fictitious scenario and this should be a number. Now obviously this will complain
1:22:08 this is a better definition of function in case you are having that hey this should return me
1:22:12 obviously always and always an object we should have these two properties. So whenever I'm going
1:22:17 ahead and returning anything from the function it promotes a good practice and less error that hey
1:22:22 you should be returning the name. For example this course name is reactious and the price is going
1:22:27 to be let's just say 399 something like that whatever the price is. So this is the basics of it
1:22:33 and now you know the syntax and the weirdness. This is the only thing which I have seen a lot of
1:22:38 people get confused about that where what happens when an object returns an object. Yes I do agree
1:22:42 this is a little bit of a weird syntax because we are parenthesis then colon and then this is an
1:22:47 object and the definition and it gets a little bit more confusing when you have the object in this
1:22:52 format because it's returning these things and then so these kinds of definition makes people a
1:22:57 little bit confusing. Now what is the odd behavior regarding the objects which comes up in the type
1:23:03 script okay that is that is something really bad okay let me show you where the bad syntax actually
1:23:08 comes up. So notice this that this is a name and this is a it is paid so my function is saying
1:23:16 that hey whenever you create a user you give me a name and is paid that is obvious but let's just
1:23:21 say while creating a user I also want that email should also be there so I can just go ahead and say
1:23:26 hey let's give it an email and the email is going to be h at the rate h.com something like that.
1:23:33 Now this is not acceptable and there's a long big thread on the stack overflow by the way on
1:23:37 this behavior. So obviously this is not allowed because in the definition we have strictly mentioned
1:23:41 that this should be there yes there are ways I'll walk you through in the upcoming videos
1:23:45 that are ways how we can actually make this email as optional if you pass then that's good if you
1:23:49 don't pass it that's also fine. But what is the odd behavior is that this is an object so I can
1:23:55 just cut this out obviously this is complaining. So let's just say I go ahead and say hey let
1:24:01 new user we create a variable and we simply assign that as an object. Obviously we do this a lot of
1:24:06 time in the JavaScript as well that whatever and from wherever we collect the information like payment
1:24:11 information comes from a different model or controller or maybe a Google authentication also
1:24:16 gives us some information so all these information are combined an object is being created and whenever
1:24:20 we call these kinds of methods we just pass on this value here. So for example a new user is being
1:24:25 passed on and you might have noticed this time I was able to pass on much more information than
1:24:30 what is expected in the function definition previously it was giving me error but now this is all
1:24:35 okay so yes not all weirdness of JavaScript is gone but there is a better way of defining the
1:24:40 functions and the methods. We'll learn about that when we'll walk through with the interface and
1:24:44 all of that there are the beautiful most beautiful part of how the typeScript will walk through with
1:24:48 that. So I hope that now you know some of the weird behavior of this one. This is a common method in
1:24:54 case you have watched my morn course or any other backend development we have done this many many
1:24:58 time this is still not stopping me to do any bad behavior so that is wrong of typeScript it should
1:25:03 stop me but I'll walk you through with the optionals that there are better ways of handling
1:25:07 situations like this but I think that's going to come up in the next video so in the meantime
1:25:11 hit that subscribe and I'll catch you up in the next video. Hey there everyone a very sure and
1:25:16 this is a short video all I want to do in this video is introduce you to the type aliases and give
1:25:21 you a moment so that you can read some documentation on your own so that whenever you find out some
1:25:26 tutorial who is talking about exactly same thing you can say yeah this is coming up exactly from
1:25:30 the documentation as well and again the whole idea behind making the short chunk size bite size
1:25:36 videos is so that if you feel you can consume more than one head to time instead of pushing out at
1:25:40 12 hours or 15 hours of content at a one given point of time again let's get started with the type
1:25:45 aliases the type aliases is a topic which is really really simple and you don't have to worry about
1:25:50 anything at all I'll walk you through with the documentation as well we've already gone through
1:25:54 with some of the scenarios which where we can use it and this is all what you'll see if you have
1:25:59 watched the previous video this one will just come like a breeze so moving up here you have
1:26:03 saw that we can actually create a simple variable which is a user and we can kind of use that as well
1:26:08 but in the JavaScript we don't actually create a variables just like this if you want to support
1:26:13 anything like that we actually go with a different method let me let me walk you through because
1:26:16 coding is actually much easier when I show you by writing the code itself so let's just say our
1:26:21 goal is still same we are creating a application in which we onboard a user and user has some of the
1:26:27 properties that we want to go through with that and maybe this is not just a one function which
1:26:32 uses all the set of properties but there are like probably eight different functions which uses
1:26:36 the same of properties now what they do with that properties that's not our concern our idea is
1:26:41 that whenever somebody takes up this entirety of eight function whenever they take any parameter
1:26:46 they need to get all the information of the user itself that's the whole idea okay so let's go
1:26:51 ahead and create that the way how we do it we create a type of it and yes it's a keyword in the
1:26:56 TypeScript and we simply go ahead and define a user like that really simple it looks like almost like a
1:27:01 constant but this is a type aliased that we go for now once we have this user we can define all
1:27:06 the properties that we want to have but we don't define the exact value of it we'd rather define
1:27:12 what kind of value is going to come up into that so for example this one is going to be a simple
1:27:16 string and not a comma and let's just say email is also coming up that is also a type of string
1:27:24 and is active is also there which is going to be a Boolean value so now just assume there are
1:27:32 more properties of it and we have actually created a type for it now the advantage of creating a
1:27:37 type like this is it could be really a long and lengthy one is whenever there are methods like
1:27:42 create user get user details modify the user we want all the information to be passed on so let's
1:27:50 go ahead and create a simple function like this and once we have this one this is the definition of it
1:27:55 now what I want is if anybody passed me a user it should adhere to the type of user so I can go
1:28:01 ahead and say hey there should be a type of user so what we are doing internally is kind of
1:28:05 creating the data types here or the types in the TypeScript so just like we write something like a
1:28:12 number maybe a number or maybe we can go ahead and write a simple string similarly now we are
1:28:19 actually allowed to pass on user now just a site tip yes you can do something weird things like
1:28:24 this and you'll see this in some example in tutorial stuff like that hey you can call the string
1:28:29 and that string could be you can type alias a string as not string actually my string has a
1:28:38 string so wherever you are using now the string type you can go ahead and actually say my string
1:28:42 again I don't know why there are so many examples about that on internet I find it weird but
1:28:49 yeah it is actually technically allowed so but I won't see a really use case of that that why would
1:28:54 you rename this definite default string or boolean or something like that maybe there is a case
1:28:59 where entirety if a team don't use boolean word and just use the boole maybe you want to do that
1:29:04 again there are use cases for that so now we can see that there is a user and there is a user we
1:29:09 are not returning anything so anytime somebody uses a create user he just goes there and say I want
1:29:15 to use user he will be complained that hey there is something that you need to pass on one argument
1:29:21 that should be of type user so in this case I cannot just go ahead and say hey this is my object
1:29:25 it will complain it doesn't match the type of user so you have to give me all the name email
1:29:31 and is active so let's just say I give it a name the name is going to be an empty string then it
1:29:36 says hey it is an email which is also going to be an empty string and then it says hey give me
1:29:41 is active as well which could be true or false if I pass on all the values it is absolutely happy
1:29:47 now similar to this we can also say that hey whenever you create this function you obviously
1:29:51 should return something and that return type of value should also be user so you get the idea
1:29:57 how this is going ahead further that anybody who uses this function this function needs to return
1:30:02 that so you have to go ahead and say hey return and then you have to not only return the object
1:30:07 you have to actually return all these values so whatever that values are and whatever your logic
1:30:12 says you have to return that otherwise it will complain so it's a really good use case of how the
1:30:16 type can be used now in the real world scenario whenever let's just say we we are creating a user
1:30:21 for our LMS then obviously this is not it there are a lot of things that you have to pass on now
1:30:26 what you do with those things totally up to you your logic but this is a common thing which is
1:30:31 being used now let me walk you through with the documentation as well because documentation
1:30:36 obviously always helps to understand this so into the everyday types if you look for it here on
1:30:41 the left hand side there are type aliases in interface yes they are quite confusing almost like
1:30:46 same to each other but this is the example that are given in the documentation about type aliases
1:30:52 so it's common that we want to use same types more than once just I told you maybe there are eight
1:30:56 functions eight functions which are using the same type of user maybe there are 15 values
1:31:02 or in the object or the user so in that case it can be really really useful all the internet is
1:31:07 filled up with these kinds of example where somebody is trying to create coordinates great example
1:31:11 nothing wrong in that so he's creating a type of point and whenever somebody a point is defining
1:31:16 you have to pass on x and y coordinate same example let's just say we are sending print coordinate
1:31:22 you have to provide PT which is of type point so it is compulsory whenever somebody is using print
1:31:27 coordinate he has to pass on all these values and we don't have to again and again make our function
1:31:33 definition too lengthy that hey you have to pass on this eight different lines so imagine if this
1:31:39 would be point instead of the coordinate into two values it could be let's just say 16 values
1:31:44 and in your function what could definition would be look like here really crazy so it's better
1:31:49 that in one file we define all these types when then we import them and whenever the function
1:31:54 definition comes up we just call them hey you need to pass on a value which should be a point type
1:31:58 or maybe a user type or maybe something else so there are a lot of values and yes we haven't
1:32:04 yet studied about these all types or a union type and all of that we will do that very soon
1:32:09 I highly recommend you at least go ahead and go through with reading this this won't be taking
1:32:13 more than two to three minutes to you but you will develop a habit of reading the documentation
1:32:17 so I think the type Alice is all done now let's go ahead and move on to next video some
1:32:21 quirky behaviors and some real small topics are there I would like to cover them up in the next
1:32:26 video let's catch up there all right so in this video we want to study about just three simple
1:32:31 thing the first one is a keyword which says read only the second one is just a question mark
1:32:35 yes literal question mark and the third one is a use case scenario that you'll be using a lot
1:32:40 with the case of type not with just ordinary object this is the most use case scenario so whenever
1:32:46 you'll be looking in the project being designed by other person or GitHub repository you're trying
1:32:50 to understand the code you'll find these kinds of situations a lot so scenario based let's go
1:32:55 ahead and get started it's pretty easy hit that subscribe and then we can move forward
1:33:00 yeah this video is powered by AI and till unless you hit the subscribe it doesn't move forward
1:33:04 so yeah you have to just kidding let's get started with that so the same example we are into
1:33:09 the my objects and let's just go ahead and define a simple user so we have seen that I've commented
1:33:14 out all the code that we can actually go ahead and use in a type and this is a type that can be
1:33:19 multi-used into a function so maybe anything else that you're defining so let's just say there is a
1:33:23 name that is going to come up as a simple string type so name string and you also have email that
1:33:33 is also a string type and you also have probably is active so to track that whether user is logging
1:33:40 in into three days or maybe whatever the parameter is so in this case now a couple of things that
1:33:45 you'll be using is in case you are oops my bad sorry okay so that you'll be using let's just say
1:33:51 you are using MongoDB to save this user into database so you want that nobody should actually be
1:33:57 able to touch this underscore id which is a common thing in MongoDB so this is a string now at
1:34:02 the time of creation obviously you'll be your MongoDB will be creating that but you want that nobody
1:34:06 should be able to manipulate that further down the road so you can go ahead and mark this as
1:34:11 read only yep that's a keyword you can just put it on to anyone and now you won't be able to
1:34:17 change that so that's a pretty simple one really easy one now one thing I would like to mention
1:34:22 here which is crucial that notice here this id is a simple string so for string you won't be able
1:34:28 to change that for or let me just give you a walkthrough of that let's try to create a simple user
1:34:33 for that let's just say there is a function which says create a user and then it says hey just
1:34:41 give me a user so when at the time of creating this user let's just say we call this as you which
1:34:48 is type of a user and that's basically it so nothing big deal this is a really simple function
1:34:55 now whenever there's a you which is obviously a type of user you can access all these values up
1:35:00 here or you know what let's not create a function actually let's create a variable because it's
1:35:05 easier to show you this example with the variable so let's try with variable so let's just say we
1:35:10 call it as my user which is going to be of type user totally fine and now in order to make sure
1:35:17 that this is a user type we have to actually assign all these values this is going to complain
1:35:21 because it's not able to fulfill all these values so I'm going to go ahead and say hey let's give
1:35:26 it an underscore id which should be a type of string so let's just say this is 123 for whatever
1:35:31 that is also we have to provide a name let's just go ahead and say this is h mr h and then we have
1:35:39 email which can also be h at the rate h.com I wish I would have that email and still complaining because
1:35:46 one more parameter or one more property needs to be there which is is active let's just say this
1:35:51 is not an active user okay false and what is still your issue so we have id name email and a
1:36:00 string why is it complaining it says false is not assignable to type my bad should be saying that
1:36:06 this is a Boolean okay honest mistake there all right so we have gone through with this now what
1:36:12 we can do is I can just go ahead and say hey my user is about to change its email so we can
1:36:16 access the email and I can say hey now your new email is something like h at the rate gmail.com
1:36:22 you're totally allowed to do so but in case you want to access something like my user dot underscore
1:36:29 id you should not be allowed to change that so you if you just try to sign anything to it then
1:36:34 obviously it will complain that this was marked as read only you should not be doing this so this
1:36:39 is one of the use case of whenever there is a read only keyword that is coming up but maybe you
1:36:45 also want to have some of the things like user has registered by UPI or maybe some credit card
1:36:50 details so obviously we know not every person has credit card so we are going to say credit card
1:36:57 details this is going to be a simple number now obviously not all the user bad number there we go
1:37:05 so we obviously know that not all users are going to have credit card details we also allow some
1:37:10 users to come on our website and have free access to the platform so this could be marked as optional
1:37:16 so all you have to do is come up and put up a question mark here now this will not complain if
1:37:20 you pass on that detail that's great it will be utilized otherwise you can just put a question mark
1:37:25 yes I do agree when you first time are learning about the typescript this question mark before the
1:37:30 colon is a little bit weird syntax but over the time it will get over so this is the really easy
1:37:35 use case that we have in the card details and all of that so you get the idea this will not allow
1:37:39 you to complain and by the way a little bit more to surprise you not surprise you actually give you
1:37:44 more in depth of the detail let me comment this out so that we can successfully actually compile
1:37:50 this into typescript so that will give you a lot idea so TSC this one is my objects and if I go
1:37:57 ahead and run this this creates an object file but I hope you can see that now we are exporting so
1:38:02 much so we are exporting ES module IDs there and all of these details are there notice here there
1:38:08 is nothing which is depicting in the JavaScript that hey you are allowed to modify this idea or not
1:38:13 but the moment I uncomment this code now this is giving me an error now notice typescript will stop me
1:38:20 from doing a lot of things in my object notice here there is nothing still and we have we are
1:38:25 working just on the properties or the config file of the typescript that will allow me even in the
1:38:31 future it will allow me to stop producing that code but there is nothing in the JavaScript which
1:38:35 actually stops you that so this is a pure function or a feature of the typescript itself so just
1:38:41 make sure you remember that part okay now one more thing I would like to mention since we are
1:38:45 talking about the credit cards so this is a scenario will build just based on the credit card
1:38:51 so there are something known as or there is something known as mix and match of
1:38:57 these types so let's just say we have a type and first thing that you want to have is a card
1:39:02 number so let's just say you define that hey card should have a number and this is how I'm
1:39:08 going to store the number so you just say give me a number or I'll say yeah number is number is
1:39:14 actually keyword so let's call this one as a card number all the work is here and this is going
1:39:23 to be a string it couldn't be anything and then also you know that if you are storing the card
1:39:28 details the card number alone is not enough there is card date as well let's assume that somebody
1:39:35 storing that date or I'll call this as card date just to be sure that is also being stored in
1:39:43 a string format so there are many cases where you want to simply store this card number card
1:39:49 detail or card date but you also realize there is a CVV number so yes this is a fictitious scenario
1:39:55 making up because there's just one detail it's easier to explain but in real world use cases there
1:40:00 is this is too much a big of a type that you have created so you save a lot of time so in that case
1:40:05 you can go ahead and say that hey I'm creating a new type and all you have to do in this type is you
1:40:10 can mix and match of the two above so let's just say we are saying this as card details so obviously
1:40:15 now we have to compile this card details with all the things so card numbers expiry date CVV all
1:40:20 is coming up I know these two are above defined so I don't have to redefine the things I can go
1:40:25 ahead and say that hey this will be off type being created from the card number and then I can
1:40:33 use an M person sign to combine them together M person is to use all of them together not just or
1:40:39 like get this one or get that one and is for combining all the things so combine card number
1:40:45 and also combine card date and also I want to give one more because we didn't caught up with
1:40:51 the CVV so I'll just put up an end and create an object here we'll say that give me a CVV which
1:40:56 will be of type number so now if I go ahead and create any variable or maybe any object using
1:41:04 card details I have to adhere with all the values up here so this is really really easy and again
1:41:10 right now you're looking it from the perspective hey there's just one value here there's not big deal
1:41:14 I could have defined it but imagine the scenario where project is coming up from a long list of
1:41:19 coders they've already created couple of types which are doing absolutely great you just want to
1:41:24 utilize them yes I do agree this object is a little bit overkill not a good practice at all
1:41:29 nobody would advise you to do such things on the go it looks very hacky but just wanted to make a
1:41:35 use case this up till here is definitely a use case where you define a new type based on the
1:41:41 combination of previous two type so remember both examples are here the first one is a good example
1:41:46 the first two where you use existing types which defines another third type by using the existing
1:41:53 functionality there is also a hacky way of doing the things which is not a good practice but still
1:41:58 we can do it if we want to so that's it a really simple way of handling the situations up here
1:42:04 and nothing much of a big deal so now you know a little bit more about the type script than you
1:42:08 know before starting the video so for that hit that subscribe button and let's catch up in the
1:42:12 next video arrays in typescript don't have much but yes behind the scene there is a little bit more
1:42:18 to the arrays and if you look and come up here into the arrays you can see that's it that's all
1:42:24 the arrays are about in the type script really short really simple paragraph that we have on the
1:42:29 array but there is a little bit more of syntax that we can discuss and we just need one video to
1:42:35 understand arrays in type script and this is that video so hit that subscribe button and let's
1:42:39 go ahead and move forward to understand arrays in type script really simple just two types of syntax
1:42:46 and pretty much basic let's go ahead and get started with that I'm pretty sure you have
1:42:49 hit that subscribe I'm very sure you have promised that at least I hope so anyways let's go ahead
1:42:55 and get started with that let me minimize this and I have created a new file of course call it as
1:43:01 my array.ts and let's go ahead and try to create an array so one of my favorite thing to do with the
1:43:06 arrays is have a lot of superheroes so let's just say if we have a lot of superheroes this is the
1:43:11 syntax how we go ahead and do that now I've seen a lot of people who go ahead and go like this that
1:43:16 this is an array and okay maybe I've gone through this if I hover this this says hey this is
1:43:22 superheroes which is an array of type never that's interesting what happens when I try to go ahead
1:43:28 and push some values into this one so if I go ahead and say hey let's just push a superhero into
1:43:32 this one and let's just call this one as a let's push in spider man spider it gives me an
1:43:39 error that says hey you are not supposed to do that you're not allowed to that the string is not
1:43:43 an assignable to parameter type never that's interesting so remember I we discussed a little bit
1:43:49 about the never in the past so never is something which is supposed to never execute or end the
1:43:54 things it's it's really one another use case of never so this is not how you should be defining it
1:43:59 so always just like we were able to put up a colon and number we should be actually defining it
1:44:04 like this but this will still give you an error because now you have mentioned that hey no matter
1:44:08 what happens this superhero is a type of array but an empty array it should always be empty because
1:44:14 this is what the definition is saying of your Superman of your superheroes it says again a string
1:44:20 is not a type it should be never again so the way how we define it is simply saying the super
1:44:25 heroes is going to be of type of a string array yes that's the basics in text and yes that's
1:44:30 that's all to the array you can go ahead and say hey this could be a number this could be a string
1:44:35 yes there is also a type where you can define that it can have both numbers and string will
1:44:40 discuss that later on there's a separate video for that but you get the idea you get the point
1:44:44 this is how you need to define it and now you can push any values to it really simple really
1:44:48 basic we can have more of this let's just say instead of superheroes we want to have something
1:44:55 like superheroes or maybe something like a hero power where we define all the numbers
1:45:02 this can be a simple number and I can just go ahead and say I would like to add hero power
1:45:09 and in that I would like to push on some numbers so two is absolutely fine so this is the very
1:45:14 basic syntax of how you do it but there is also one more way which you'll find in a lot of code
1:45:19 basis that that is also being written let's duplicate that let's comment this out so another way
1:45:25 of defining this exact same thing and again there is no good there is no bad in this case they define
1:45:30 and represent exactly the same syntax behind the scene the working is exactly same there is no
1:45:35 like efficient way or bad way this syntax of declaration is really simple you can go ahead and
1:45:40 say array then in the diamond brackets you can just go ahead and define number or any other data
1:45:45 type that you have for example it could be string it could be number whatever you like to have
1:45:50 this is all the simple basics of it now it's not like you can have the numbers this is where the
1:45:55 type actually comes up really handy for example if we have a type of user you can go ahead in my
1:46:00 say that my user has a name which is a type of string and also say that this is is active so
1:46:08 our user in the database is defined of just two values which is a number a string and a boolean
1:46:15 and not just numbers and the string you can actually define it as simple boolean as well
1:46:20 and you can say that hey I want to have all users so let's just go ahead and define a simple
1:46:25 const call this as all users because a lot of user about to come now just like we define something
1:46:32 like an array of numbers or a numbers array and initialize it with the empty value you can also go
1:46:38 ahead and use something like user now it is very obvious that whoever the value is going to come up
1:46:44 or whatever the value want to push into this array at line number 10 all you got to do is add the
1:46:50 data type which follows this which is a type so let's try to push that so we'll be saying that all
1:46:56 users let's push a value to this one if I go ahead and push it like the empty one empty string if
1:47:02 I try to push that save this this obviously will give me error at the runtime right now sometimes
1:47:08 system is slow so it doesn't give me that values so let's go ahead and say hey we want to push an
1:47:13 array into this one this is going to give us a value which is not really good so let's try to
1:47:19 have this one and again we need to pass on an object I'm pretty sure this will give me an error
1:47:25 as soon as possible so there we go now we got there so empty objects are not allowed because this
1:47:30 needs to kind of follow the protocol not that's a correct word protocol but this is actually
1:47:37 this should be a type user that's all I'm saying so user has two property the name which is
1:47:42 which can be an empty and is active that can be simply a true true if I can write that so there
1:47:50 we go now we are able to push the values into it so really simple there's nothing much too complex
1:47:55 about it just two types how you can define them really go ahead and do that now also there is
1:48:00 one more way that you should know about it because maybe you're using some ml models to it and
1:48:07 there is some complex error type so in that you are defining numbers or numbers because when you
1:48:12 take a picture the picture is actually an array of all the rows and values from Python or some
1:48:18 stuff that you actually work on with so in that case say let's just say you have a number of
1:48:22 array and then further down you also want to have an array then you can go ahead and just define an
1:48:28 array just like this and further down I can go ahead and come up some values something like this so
1:48:33 this is a coordinate or maybe a simple pixel values how much RGB values are there so let's just say
1:48:41 255 comma 255 comma 255 so yes that is string the way value how you can add it if I try to add a
1:48:48 string it will complain that hey that's not the data type string is not a string should not be
1:48:53 there it is supposed to be an array of array so this is the syntax just remember that it's really
1:48:58 easy numbers and then we can have array inside the array so really basic and simple as we will
1:49:04 deal up more with the array just like you are now feeling more comfortable with the with the simple
1:49:10 variables and a little bit push values you will feel more comfortable with the arrays as we go
1:49:14 further but this is it this is really the basic as you can see into the documentation as well
1:49:20 there is nothing too much to define about it and if I go ahead at the top if I go ahead and
1:49:25 search for array there's array there is a generic object type the array type and there is a read
1:49:30 only array type as well so if I go ahead and look for this one the array type we can see that this is
1:49:36 all the arrays of type string and we can have the arrays something like that pop and push the values
1:49:42 and numbers and there is also a read only array that you can define so values read only array type
1:49:48 of string will definitely go through with these kinds of things later on just wanted to make sure
1:49:52 that there is nothing too much in the array just the basics is here and I think this video is good
1:49:57 enough to get you up and running and started with type script and arrays in type script let's catch
1:50:02 up in the next video hey there everyone they share back again the other video and welcome to
1:50:06 another video of the typescript series we are trying to aggressively move into the typescript world
1:50:12 and I'm trying my best to push as many videos as I possibly can so another video in the typescript
1:50:18 series in this video will be talking a bit about the union type and I really am not looking forward
1:50:23 in the series that I just go ahead give you what is union type and that's it I really want you to
1:50:28 write better code in the JavaScript and that's the whole idea of the typescript series so I also
1:50:33 try to do some of the examples that we use in the production and that can help you to write better
1:50:38 JavaScript code with more contextual understanding some people don't like it some people just say hey
1:50:42 give us the syntax and that's it for that you could have read any article or documentation but
1:50:47 this is the real knowledge a lot of people don't like it probably they haven't written any production
1:50:51 level code but again this is the way how you should learn with a contextual understanding and by the
1:50:56 way I've also got a new mic after thinking a lot I ordered it I am pretty sure those who are
1:51:01 hearing it in headphones or probably in a good speakers can easily notify and understand the
1:51:06 difference that we have moved from last video to this one great one so here we go we have got a new
1:51:12 file which is my union.ts union is a really one of a fantastic thing in the typescript which allows
1:51:18 you to be into a situation where you are not pretty sure what type of data is going to come in
1:51:23 it might be a number it might be a string but you are not sure it can be either of the two now
1:51:29 instead of using any I it is highly highly recommend that you try to use union type union is like
1:51:34 a combination of two or three or more types of data that you can include into a variable or an array
1:51:40 and whatever that is and this is the only video you need to watch about the union I haven't broken
1:51:44 down this video into five different videos it just one single video it will help you to understand
1:51:49 a lot of context and yes it will help you to avoid any into your type script code so let's go
1:51:54 ahead and work on with that that how it actually works and yes some of the examples are just
1:51:59 code based assuming that you're building any game or maybe a banking application in JavaScript
1:52:04 so let's just say if we have a simple score this is how it goes and you're saying that my score is
1:52:08 going to be 33 that's fine nothing bad nothing bad no big deal but you are not sure that whether
1:52:14 this is always going to be a number or it might be some of the cases that it might be a string as
1:52:18 well I don't know why but it can be possible so in that case so far we have been going through and
1:52:23 put up an annotation that hey we want it to be a simple number all the time when you do this this
1:52:28 is all fine but you can use a pipe sign which is just above your enter key on the right side
1:52:34 and you can use a string as well now it is recommended that you try to keep it very strict as much
1:52:41 as strict as possible because there is nothing that is stopping you to put up more data type or in
1:52:45 fact list down all the possible boot data type that is available in the type script but use it
1:52:51 wisely use it carefully it can allow you to do such things which can be really useful for example
1:52:56 here if I go ahead and say hey this score is going to be now 44 that is totally allowed no problem
1:53:03 at all it can also allow you to do some things like score is going to be 55 but this time is a
1:53:08 string 55 if I go ahead and do that no problem at all if I go ahead and remove this and I save
1:53:14 this yep there is a problem there is a squiggly line here that says hey whatever you are trying
1:53:19 to do this is not good so you shouldn't be doing that but again this is how the basics of it work
1:53:24 hi I noticed that 70% of you haven't subscribed to my channel it would be really a great motivation
1:53:30 for me if you hit that subscribe button so go ahead hit that and now let's carry on with the video
1:53:35 now this is not just the basics of it you can actually use this boolean type or this union type
1:53:41 not boolean union type with your own custom derived data types as well for example you are building
1:53:46 an application which has a multiple hierarchy of user and admin and you want to define a strict
1:53:51 type for that so for example let's just say we have a type of user that we are defining and user
1:53:56 always comes with a name that is going to be a string and apart from this we will be having
1:54:02 of let's just say an ID which is going to be a number no problem at all let's go ahead and duplicate
1:54:08 this code as well oops commandy come on didn't install the shortcut for that probably not okay
1:54:17 so this is going to be an admin so let's go ahead and say this is an admin but instead of having
1:54:22 a name this admin has a user name now it could be string it could be another data type but whatever
1:54:28 that is it's totally allowed to have this this is a type that you have defined it's not a literal
1:54:32 type that we see like numbers and boolean this is a type that you have defined so we have two
1:54:37 types now let's go ahead and create a variable for or maybe an object whatever you like to call
1:54:42 this one let's just say I am defining my name as a simple user but it could also be on some days
1:54:50 an admin or maybe on eventual future it could be admin we can go ahead and simply say that
1:54:57 we can go ahead and say that hey you since you are a user you'll be having a name so let's just say
1:55:03 name is going to be my name and you should also have an ID which is number so let's just say this
1:55:08 is your ID so there is no problem no problem at all but eventually in the future I can go ahead
1:55:13 and say that hey now with ish is going to act as an admin so you should have a user name instead
1:55:18 of this so I'm totally allowed to just redefine the things for example I can go ahead and say now
1:55:24 I have a user name maybe an hc and I also have an ID maybe I'm using a same ID for some purpose
1:55:30 so 334 this is totally out and typescript is not giving you any problem for that but on the other
1:55:36 hand if you go ahead and try to remove that it is cannot or can never be an admin then obviously we
1:55:41 see that there could be an error here but if I go ahead and hit the command Z that it can be admin
1:55:47 or can have multiple types of data then it is really really useful now this kind of a thing
1:55:52 could be really really useful for writing the functions because sometimes there are situation
1:55:57 that function either accepts multiple values or sometimes returns multiple values so the syntax
1:56:03 remains same we have discussed quite a lot about function but let's just go ahead and have a simple
1:56:07 more discussion about it let's just say this is get dbid so you want to get some database values
1:56:15 or some database id from here and don't know somebody is passing you an id there is more like
1:56:22 calculated id in the database that you are storing so this could be a simple number
1:56:26 that somebody is passing you but it could also be a string so there could be multiple ways
1:56:33 of how the things can go up here now in this case if somebody gives me and I do a simple console log
1:56:39 and I say that dbid is and then I simply go ahead and use this and I say hey just print id
1:56:48 and here we are making some API calls and you're doing a complex application and something this
1:56:59 is totally allowed this is all good there is nothing wrong in this one and when we use this one
1:57:03 this method now get dbid I can go ahead and pass on a three here or I can go ahead and pass
1:57:09 on a three just like this it is accepting all the values but the problem the problem here comes up
1:57:15 with something when you try to do some manipulation with this one so let me go ahead and
1:57:21 comment this out first copy this and comment this out and we'll actually go up here and paste
1:57:27 this up now notice here what I am I will try to do is I'll remove this one and the above one I've
1:57:34 kept for your purposes so that you can see what is happening but let's just say I take this id
1:57:40 and I just apply a two upper or two lower case lower case like this why the squiggly line that
1:57:49 is the point why a squiggly line because I have told you this is a string if I go ahead and
1:57:54 remove the number squiggly line goes away but if I go ahead and put up a number and the fun part
1:58:00 about the typescript is it knows so much so it if you hover this up it says property two lower
1:58:05 case doesn't exist on type string and number so it is treating it is treating it not just as a
1:58:12 number or as just a string it is treating it as a new data type that could eventually end up
1:58:17 into a number or a string so both of them are a possible use case if you remove a number then
1:58:23 it's fine that hey these kinds of methods do exist but you need to do a really strong check
1:58:28 because right now notice here the parameter id could be string could be number could be really a
1:58:33 problematic so if I go ahead and say that hey I'll just cut this out I'll first verify that what
1:58:39 is happening so I'm going to go ahead and say use an if clause that if id or the type of id is
1:58:49 equals to let's just say a string then I go ahead and do this then no squiggly line
1:58:56 and if I go ahead and say id dot maybe what what the values of or I can just go ahead and say
1:59:03 id plus two so it is totally allowed because it's a number so it says cannot be applied to type
1:59:09 string so I've already checked it for string but it could be a number here so I need to verify
1:59:13 that whether this is actually a number so we can perform the operations so here the squiggly line
1:59:18 goes away and we can check it out similarly that it could be a number and then in case of the number
1:59:24 then go ahead and perform the numbers operation but in case of this is how the lower cases then
1:59:28 go ahead and just use that so really the same line of code but if you go up here the id here is
1:59:34 or if I hover on this one notice here it just says now it is 100% string it's not maybe because
1:59:40 you have put up an if condition and based on the if condition I'm 100% sure that if you are
1:59:45 reaching this line number 30 that means you're already verified an id is 100% a string here but
1:59:51 if I go ahead and try to put it up as number then it knows that this kind of a block is going to
1:59:56 get enter only in the case when the id is actually a number so you get the idea that how this is
2:00:02 being done needs to be a narrowing down of what the number type is that is basically your union
2:00:08 narrowing and again there's there could be a lot of discussion around it but you get the point
2:00:13 that you need to check it and verify the type if you're writing a better code in the functions of
2:00:18 this one so really a vague example of how to get the id's but you get the point of how the union
2:00:23 type is there it's not just simply a word that hey just add a pipe and do it it's more about how
2:00:29 you implement those pipe in your code now with these unions we also can actually have a small
2:00:35 discussion about the arrays because this is where actually it becomes a lot more fun so for
2:00:39 example let's just say or let me just go ahead be a const is fine so let's just say we have a data
2:00:44 and in that data we have seen that already if you want to have all the numbers so we can just
2:00:49 simply say hey we do have number and this is going to be number of array or array of numbers
2:00:55 and then we simply go ahead and say that hey I'll add up a values like I'll be adding one two three
2:01:01 and let's just say I add a value of a four then it's a problematic because you cannot have
2:01:07 strings because it's a array defined only for numbers so this is definitely not allowed you cannot
2:01:13 do this and if I go ahead and say that hey this is going to be a string the numbers are not allowed
2:01:20 you have to wrap each number with the string so then it is allowed but and let's just call this
2:01:26 one as data to but if you want to have both of them then it's an interesting one so data three
2:01:32 I don't want string I want numbers as well so I'm going to go ahead and say hey pipe and number
2:01:37 and you see no error here like there is a smaller but I'll walk you through what this is
2:01:44 this is a classic mistake that a lot of new typescript developer does because this is now saying that
2:01:49 hey this can be either a string or a number so notice here a lot of people come up here and say
2:01:54 that hey this and this removes the error this is a classic mistake this is a classic mistake
2:01:59 the interpretation in terms of arrays in typescript this is is that it can be either all the numbers
2:02:06 or can either all the strings so it cannot be a mixed match of let's just say three this is still
2:02:12 not allowed this is not allowed so it can either be all numbers or all string the syntax or the way
2:02:18 how you do it is actually you remove this and you wrap this up inside a parenthesis just like that
2:02:25 and there we go now you can have both types in your array you can have strings and you can have
2:02:31 number as well or probably you can add more as well maybe for some crazy reason you want to have
2:02:36 all the values as Boolean as well let me just go ahead and award wrap this there we go now you can
2:02:43 go ahead and add even a true whatever you like again this is a very very not thing to do but yeah
2:02:50 a lot of people does that and also I've noticed a lot of people just when these kinds of situation
2:02:54 happen they just go ahead and do any which is not going to give you any error but the whole idea
2:02:59 of using the typescript is not just that here you remove all this quickly lines it's about
2:03:04 how you're actually making your types more strict that is the goal behind that so I hope you
2:03:09 remember that and there's also one more classic situation let me walk you through that you can
2:03:15 actually allow some of the numbers to be very strict something like there's a pie and you want
2:03:20 that it should always be 3.14 and then you try to allocate it a value of you can only allow to
2:03:25 have a 3.14 so later on if you just try to have a value of a 3.14 5 or maybe something it's not
2:03:32 allowed so this is a literal type of assignment that yes this should only have this value or something
2:03:37 like this this is not a useful case let me give you a useful case scenario where this could be
2:03:42 really really useful maybe you're designing an application for an aeroplane so let's just say
2:03:47 there's a seat a lot a lot mint and you want to have only three types of value to be coming into
2:03:54 this one so you can go ahead and say there's going to be an aisle or it can be a middle or it can be
2:04:02 a window so this is really helpful and useful case scenario so later on if somebody goes at head
2:04:08 and says seat allotment is going to be aisle that is fine but if somebody try to overwrite that
2:04:15 with a seat allotment of let's just say somebody's giving you a crew seat which is specifically
2:04:21 meant only for crew then it's not going to allow so yes there are use cases that it can be only
2:04:26 three types really fast really quick can make your application really secure and less prone of the
2:04:32 error so you get the idea how this is being used yes we can have a little bit more discussion
2:04:37 about the union we can go further but I think all these use cases will help you to write
2:04:41 bear code into the JavaScript or TypeScript let's go ahead and catch up in the next video
2:04:46 hey there everyone if they share back again another video and welcome to the typescript series so
2:04:51 now let's move into the typescript segment which is available only in typescript and not in in the
2:04:56 JavaScript world and this is known as tuples and tuples there are a lot of names which people call
2:05:02 it I usually call it as tuples and yes this is almost similar that is available in other languages
2:05:08 that you might have heard and seen such as python but here this is not that much well implemented and
2:05:15 that is the reason why I wanted to talk a bit about tuples in this video they are great they're
2:05:20 fantastic I'll tell you a special use case where it can be used and I'll also tell you where you
2:05:24 should not be using it and where you should be cautiously using it because there's a good thread
2:05:29 in the stack overflow which you should really keep an eye on which points out some of the not
2:05:35 so good things about the tuples and you should be worried about that so first let's see what tuples
2:05:39 is and in broad category it's just an array a kind of a specialized array that is given to us by
2:05:45 typescript with some restrictions on to it so let's go ahead and catch up with that one so let's
2:05:50 just say there is a simple user that you want to create so how we do that we go ahead and say hey
2:05:55 this is going to be a user and maybe this user is going to be a type of string an array our array
2:06:02 of string and let's just call this one and let's initialize this one as simply saying this one
2:06:08 is going to be actually simple like that or just a string both are same so this is okay this is
2:06:16 no problem at all but let's just say you want that it should be a string and a number and a
2:06:22 Boolean but in a very precise order that is the most important thing in a precise order you don't
2:06:27 want that right now if I go ahead and do this this is obviously problematic because it's just a
2:06:32 string and if I go ahead and say that hey it can be either string or a number but an array so I go
2:06:37 ahead wrap this up and I say and say that hey this can be a string or it can be a number
2:06:45 number there we go now I can go ahead and say hc and comma one that is fine but I also can go
2:06:52 ahead and say one comma at see that is also fine but there are cases there are special situation
2:06:58 where you want a specific thing into your array to be pushed on maybe that's an usually that's
2:07:03 a usually an API call because the API structure data is always in a very specific format if something
2:07:09 comes up first in the narrate that always needs to come up at the zeroth position and something
2:07:14 that needs to come up at second position that always comes like this so there is no restriction
2:07:18 right now in front of us and as you know this type script is all about putting more restriction
2:07:23 in front of us or on top of that so let's go ahead and duplicate that so I'm going to go ahead
2:07:28 and come on let's go ahead and duplicate that not like that looks like I'm forgetting the
2:07:35 shortcuts okay alright there we go so the one way of doing that is actually converting that into
2:07:40 us into a tuple so let me go ahead and do that and how we do that you can go ahead and simply
2:07:45 previously we're writing everything outside of the array now if I go ahead and say that hey this
2:07:49 is going to be a string and then it's going to be a number and then probably it's a Boolean
2:07:54 so this is all what we have as a user as of now why are you yelling it's a redeclaration
2:08:02 yeah probably because in my other files also I'm writing a lot of users so let's call this one as
2:08:07 t user or small t user for tuple user and we're exporting why are you yelling at me
2:08:15 no worries we'll be saying hey you are t user so it's never being read so that's fine now let's go
2:08:21 ahead and try to declare that so we're going to go ahead and say hey t user and how can I add value
2:08:26 to it I can go ahead and say the first element should be strings okay let's just say let's
2:08:30 a first user or first value in the array string then we can go ahead and put up a number let's
2:08:35 try one three one any random number and then I'm going to go ahead and say true so these are the
2:08:40 three values that I've added up here it still is having an issue and again my pad come on
2:08:47 let's okay now all good so now notice here there is a strong pattern here that says string
2:08:54 then a number and then a Boolean so I cannot reverse this order I cannot just go ahead and say hey
2:08:58 true is the first element then we are going to put up some number and then I'm going to put up a
2:09:02 string here this is this is not why the tuple is there tuple is to make sure that even not just
2:09:08 what is inside the array even the order of the array really matters in the case of tuples and
2:09:13 especially very helpful in the case of API calls or maybe there is some database array which in
2:09:18 which the specific order is there maybe some likes are there into your array and each of these
2:09:24 likes are being inserted based on when somebody like so in that case you can go ahead and use that
2:09:28 I know very vague example but yes tuple is all about restricting you so that you have an order
2:09:33 of the data okay let me go ahead and walk you through so let me first fix this so there we go this
2:09:38 is all happy and another case where you can use it a classic example which you'll find everywhere
2:09:43 is RGB because that actually makes a lot of sense in case you want to have an RGB then this needs to
2:09:49 be a number obviously we have something like 255 255 255 so all the three values should be number we
2:09:56 don't expect that there should be fourth number probably for an alpha or the opacity you are not
2:10:01 bothered about you want strictly like that so if you define a type like this then obviously you have
2:10:05 to go ahead and have 255 and let's just say 123 and then 112 so this is a guarantee that always these
2:10:12 numbers are going to be there for example somebody puts an opacity and say that hey we want an
2:10:17 opacity of 0.5 then this is not allowed because this will say hey this is not how it is declared
2:10:24 this shouldn't be like that and if you remove this you can see all happy now so one of the
2:10:30 example up here but it's not like it's all easy and all useful and as I told you you can you don't
2:10:36 have to just put up a reference just like this you can define a type like this as well for example
2:10:40 we have already studied type quite a lot so let's just say you're going for a user and that user you
2:10:46 say that always comes up with certain thing like there is an ID and there's an email that comes up
2:10:51 so now you have defined anything who is following or is a type of user needs to be exactly like a
2:10:57 tuple or tuple and there it's going to be a simple number and a string always and always it is
2:11:03 compulsory so for example let's just say we go ahead and say this is a new user which is a type of
2:11:08 user and if we are going to follow this if the type is being defined then we cannot just go ahead
2:11:14 and add anything into this there should be an ID and there should be an email so let's call this
2:11:19 one as example at google.com so this is really important you cannot just go ahead and say that hey
2:11:26 this is going to be a true no you are following a type here which is tuple and this is not a lot
2:11:32 but there is something really wrong about the tuples so for example if I go ahead and use this one
2:11:37 this is absolutely fine I can even go ahead and change this one so new user and I can just go
2:11:44 ahead and say hey at first position of course I cannot go ahead and do something like this that at
2:11:51 first position there can be a number not allowed to but make sure you are cautious about that that
2:11:56 you can actually override that so yes this is totally happening depends on what version of
2:12:01 typescript you are using so you can actually manually put some restriction via your code
2:12:06 but right now there is nothing which is stopping me to override these values so it's not a guarantee
2:12:10 that the values will never change it will change you can change it and that's it the other thing
2:12:16 which is really controversial about the this entire thing is let me go ahead and comment this out
2:12:23 or we can actually leave it no problem I can actually go ahead and say new user and if you notice
2:12:28 it carefully just in array it just in array with the restriction that first value should be number
2:12:33 second value should be string or you can say zero value first value you get the idea
2:12:37 since this is an array I'm actually allowed to use all the methods of an array and now I can go
2:12:42 ahead and say true and you might have obviously noticed it that new new user is now not following
2:12:48 the protocol that we assigned it and by the term protocol I mean to say that what restriction
2:12:54 we put up we what kind of a guarantee we put up with the tuples here that hey it should be number
2:12:59 then a string and nothing else but with these methods I'm actually allowed to do so not great not
2:13:05 great but I can actually show you something really interesting up here so there's a nice article
2:13:10 here on the JavaScript section of the stack overflow so TypeScript array push method can't catch
2:13:19 a tuple type of array and it's really long ago one year 11 month not long in terms of a programming
2:13:25 language career but in terms of what what is this and this is a good question somebody try to
2:13:30 rephrase it nicely that tuples are known for their length and where the elements may have a
2:13:36 value so when you say number and string it is guarantee that you'll have only two length with
2:13:41 first number at zero position will be number and a string but you can use push and push was just
2:13:46 an example I used here you can use unshaved shift and that messes up everything and even there's
2:13:52 a link to an article that hey how this is going on this was closed by Microsoft that hey this is
2:13:57 how it is that's a great read if you try and give your five minutes of your valuable time then
2:14:03 it's a really great thing to read about why this happens and all of that so really there's a lock
2:14:09 and there's a great answer about the read only's and stuff as well but as a matter of fact yes this
2:14:15 is all there but the fact is that still this is possible so make sure if you're using TypeScript
2:14:20 and you are using tuples and are too much reliant on that this is not just this is something that
2:14:25 can happen to your code base so I think this is all a good overview of the tuples and I think you
2:14:30 will be cautious about that and let's catch up in the next video hey did everyone face your back
2:14:35 again the other video and welcome to the TypeScript series and in this video we are going to talk
2:14:39 about enams some people like to call it with its full name I'm not going to do it I always love to
2:14:44 call it as just enams the full name is just math full I just love to call it as enams let me know
2:14:49 in the comment section what is the full version name of the enams and how do we call it I would
2:14:55 be really happy to see that how many people actually can put down a comment in this one
2:14:58 okay moving ahead enams really crazy really awesome and I'll tell you the reason why I called them
2:15:04 a little bit crazy at the end of the video so let's go ahead and create a new file and talk
2:15:08 about them really simple there is nothing too much and this video is more than enough for you to
2:15:12 understand why there should be enams and why is it helpful so let's just go ahead and say enams my
2:15:19 enams.ts a new file is there and let's go ahead and do that now why enams exist now enams exist that
2:15:25 there are certain times when you want to restrict somebody's choice or with the values that are
2:15:30 offered here for example in an e-commerce application somebody is putting up an order so you want
2:15:35 to really restrict the order status here so order can be in the wish list or it can be delivered
2:15:42 it can be shipped it can be returned there are a lot of things similarly in case of plane ticket
2:15:47 booking especially the aeroplane there are only three types of seats which are regularly
2:15:51 available so aisle middle and window you don't want to assign them crew tickets or something else
2:15:55 like that there can be thousands of cases like that the whole idea is how to restrict the user's
2:16:00 choice in one easy ways to simply declare some constant so some something like I would love to
2:16:05 do is I'll just say aisle I'll call this one as zero I'm going to go ahead and simply have
2:16:10 an constant with the middle and that's going to be one and then I can go ahead and say this one
2:16:16 is window and that is going to be two so there is nothing wrong with this and in later on case
2:16:23 if you have a simple if-else statement you can just say if the let's just say there is a variable
2:16:27 there is a seat and that seat is going to be simply you can go ahead and check up that if that
2:16:32 is equals to aisle or something like that you can go ahead and do that yes of course this variable
2:16:37 doesn't exist but you get the idea that how this is being done you can evaluate to either zero
2:16:42 or something like that you can go ahead and say that hey I'm going to evaluate for zero something
2:16:46 like this but what if somebody changes this variable not a good idea to be honest this is not a good
2:16:51 code I guess there could be constant but in the case where you want to have three restrictive
2:16:56 options in that case enums actually serves you really well and declaring the enum is really
2:17:01 simple you go ahead and put up an enum and then we're going to go ahead and put up a simple seat
2:17:06 choice really simple and then we're going to just put up the seat choice for example there is
2:17:11 going to be an aisle there is going to be a middle and there is going to be a window now anybody
2:17:19 who wants to use it can actually use it let's just say we go ahead and create a variable
2:17:23 that hey this variable is a seat choice so let's just say that HC seat you're trying to refine or
2:17:30 give me a seat from this one so I don't have to actually go ahead and do this I can just go
2:17:34 ahead and say hey seat choice and I say dot and only three options are available this makes my
2:17:39 code a bit more reliable so like that and maybe later on there is an international flight so there
2:17:45 could be four seats in the one so I don't know what to call the fourth one but let's just say we
2:17:51 call this one as fourth so I have to do nothing I and immediately I have moved my flight into the
2:17:56 international one and I can put up a dot and all these options are given to me so there could be a
2:18:01 lot of database cases where you want to provide more options maybe you're designing a navigation
2:18:05 bar or a menu bar in that you want to have more options whatever you want to do you can actually go
2:18:10 ahead and do that now the most important part with this one is how you can have this one now is
2:18:15 you notice when I hover this one it says it's an enum member and the seat choice dot aisle is having
2:18:20 a value of zero and this is by default and there are a lot of ways and notice this carefully there are
2:18:25 a lot of ways how you can define this one default is always the first value gets zero then the
2:18:30 subsequent value gets an increment number so this means if I don't like that hey I don't want to
2:18:35 start with zero maybe there is some special code in my aeroplane that I don't want to call it zero
2:18:41 I want to call it as 10 you can go ahead and do that now automatically for whatever reason you are
2:18:46 evaluating it this is 10 and obviously the next value is 11 then 12 and then the 13 so this is
2:18:52 totally allowed and you can go ahead and do that maybe you want to get started with any number like
2:18:57 that so for some reason the middle is now 22 yes that is totally allowed it's not like you always
2:19:04 have to go into the increasing order but notice here window always get 23 and this get 24 so you
2:19:09 get the idea that you can actually put up a strict number and rest of the values will follow up or
2:19:15 maybe you don't want to call this one as like this so you want to call this one as 44 maybe whatever
2:19:19 the reason is so you get the idea how this is being done let me go ahead and remove this and another
2:19:25 way of how you can do it is you can actually put up some values so for example you don't want to
2:19:30 call it as I'll you literally want to call this one as I'll so you can go ahead and do that now
2:19:35 as soon as I do this and notice here it says that hey enum must have an initializer why is it having
2:19:42 an issue shouldn't be having an issue no worries it just is asking for a value so now we are moving
2:19:50 ahead since we have actually mentioned that it's not numbered numbers are automatically being calculated
2:19:56 now I need to go ahead and put up values for all of this one because I've I've broken the pattern
2:20:00 that it's not there again I should be consistent and this one also needs to be window and window
2:20:10 and this one and again it's not really compulsory that you put up all the values as you can put up
2:20:15 hey this is zero so again the once you start putting up the numbers not the numbers the strings as a
2:20:20 value then you can you always have to go ahead and provide values for all of them but surprisingly I'll
2:20:26 let me show you one more interesting stuff I'm pretty sure that might be bothering you a little
2:20:30 bit let's just say I just want to say that that is I'll but this one is three notice here this one
2:20:36 says hey that is four and again a comma and this one automatically goes five so these are a couple of
2:20:41 ways of how you can define that there is a lot of ways how you can read the documentation and find
2:20:46 out that hey you can assign numbers and strings and all of that now the good thing about this is
2:20:51 how the values are interpreted previously we saw that aisle is always interpreted as in a number
2:20:56 value zero but what would be the inside the value of hc seat that is the most important in this case
2:21:01 it would be a little string so if I hover this one notice here or in this one this one is obviously
2:21:08 a type of seat but if I go up here this is a literal value of aisle and I can match that up with
2:21:13 anything that I like so this is the most important thing about the enum really simple you can define
2:21:18 functions around it you can define constants around it variables whatever you want to do it the
2:21:23 most important part is of this one how to define them now there's a little bit more to it this is
2:21:29 a little bit crazy thing to have it so let's go ahead and this is a great example so we're going to
2:21:33 just copy this one and we'll save it so that you can have a reference around it and let me open
2:21:38 up my chrome so let's just go ahead and paste it because it is also equally important that we see
2:21:44 that what kind of code is being produced when we write this kind of typescript into the javascript
2:21:49 just we can actually compile that at any given part of time but this is rather easier so you can
2:21:53 see as soon as I declare this enum and if he is being designed or being created for me and if you
2:21:59 don't know about if he go ahead and watch my playlist of javascript it's still one of the most
2:22:03 valuable series on the internet and notice here this is an if he immediately invoked function
2:22:10 is executed here and it gives me a seat choice notice here a lot of code is being generated for me
2:22:16 and then I'm able to allow to get this one a lot of people don't like it and that's why you're
2:22:20 going to see a lot of discussion around it on the GitHub of typescript as well as on the stack
2:22:24 overflow and one solution that is being given is just use const and once you actually do this
2:22:30 this doesn't generate too much of the code because see a lot of people don't like the typescript
2:22:35 generates too much insane amount of crazy code for the javascript because sometimes maybe you
2:22:40 want to directly jump into javascript fix some stuff that script is great but sometimes it's not
2:22:44 that perfect it's not matured at some cases in that cases having too much of crazy javascript
2:22:51 code is not good for you so in that case you can just put a const before the enum and this will not
2:22:57 generate a leak crazy code this will just generate whatever is necessary for example in the case of
2:23:01 aisle if I go ahead and just say call it as to the values being assigned as to here and if I go
2:23:07 ahead and put it aisle that aisle is a constant being created so yes although you are using this one
2:23:14 and you will be given options of choosing from restricted options but the final javascript code
2:23:18 that is being generated for you is still a really clear and simple so again the moto behind having
2:23:25 a typescript is having a restriction while writing the code but the code that is being produced by
2:23:30 the javascript should be clean and beautiful and that is why there's a lot of discussion and a
2:23:34 healthy discussion around the community which is good and which is not and I think now you're
2:23:39 capable enough to take a participation in that that whether you like this iffy style of code and
2:23:44 what is this the previous style of code we're declaring the constant so and again don't forget to
2:23:50 put down the comment section the question that I asked you in the earlier of the start of the video
2:23:54 and that's it now you know a lot about the enums and let's go ahead and catch up in the next video
2:24:00 hope you have already hit that subscribe let's catch up in next one hey there everyone face
2:24:04 here back again with another video and in this video we'll talk about interfaces in type
2:24:09 script now interfaces are pretty cool in type script and yes I would 100 percent agree they sound
2:24:14 exactly similar to type that we have already studied in the type script so they almost are
2:24:19 identical and that is why it is required at least two or maybe three videos to finally understand
2:24:24 where the interfaces are and why these are being so much used into the world of type script now
2:24:29 before we move forward make sure you hit that subscribe button as well as forward these playlist
2:24:34 entirely into your whatsapp group into your college group so that everybody can take advantage that
2:24:38 would be really really beneficial for me and you pull of us let's move ahead and talk about
2:24:44 interfaces let me take you on to my screen we have created a new file my interface dot ts and yes
2:24:51 you'll find a lot of similarities between that so yes I do understand that part and we'll take
2:24:55 care of what is the differences between them the worst part and all of that but right now let's go
2:25:00 ahead and just talk about the interface so yes it starts with the keyword interface and let's
2:25:05 just say let's try to assume a scenario you're creating a new user and this user has some of the
2:25:10 properties like maybe email maybe a user ID maybe there is a Google login maybe maybe there is a
2:25:17 database ID as well and you're trying to start a trial for this user for whatever the services you
2:25:22 are you are actually selling and also you want to give him some discount code as well so this much
2:25:27 of the scenario will help us to get an entire overview of how things are going to be there so
2:25:33 I think that's a good scenario to understand the interfaces bit by bit and pieces by pieces
2:25:38 so moving further let's just say we call this one as simply user feel free to call it whatever you
2:25:42 like and we have a user so let's just say user starts with an email that is going to be a simple
2:25:48 string and we'll be saying that you should also have a user ID and that will be a number
2:25:54 all right and yes I do agree you might be saying hey let's go ahead and create a type of this
2:25:59 and then call this like that and yep that also exists and that also works but we're not here for
2:26:04 type we'll go through the differences between them in the next video but right now let's just
2:26:09 jump back into interface that yes now interface is more like a scenario or kind of a like interface
2:26:15 doesn't have those nitty gritty and details of how it will work but these are basic overview of
2:26:21 that whenever you're creating a user these are the fill which are compulsory these are the methods
2:26:25 which are compulsory now how you implement them that is so totally up to you but interface yes
2:26:30 loosely you can say it's more like a class but yeah lose form of class very broad overview
2:26:36 a very superficial view it will ask you it will force you that there should be a method the name
2:26:41 should be the same but it doesn't say what should you do inside it it just has a basic protocol
2:26:46 things that hey this is I expect this is of what is supposed to do but it helps a lot in the code
2:26:51 and especially in the long and a really bulky code that this helps a lot so let's try to create a
2:26:56 user so let's just say we create a user hiddesh and let's just define that that this is going to be a
2:27:00 type of user as soon as I do this this creates a problem that hey hiddesh should be a type of user
2:27:06 empty parenthesis nope that's not going to work because you are missing up email and the user id so
2:27:11 if I go ahead and say email id is going to be let's just say h at the rate h dot com and of course
2:27:19 we need a user id that will be to to one one whatever that is okay this is great this is really
2:27:26 valid maybe let's just say user is also trying to log in from the Google and he does have a Google
2:27:32 ID so we'll be saying Google ID Google token whatever that is but I'm not sure it might be not as
2:27:38 compulsory there is a email and password login as well so you can obviously use these fields which
2:27:43 we have used in the past as well so this is now optional you pass it great you don't pass it nobody
2:27:48 is going to stop you and there are also read only fields which we have already seen in the past so
2:27:53 read only can be something like db id so there is a database id you don't want to change it it
2:27:59 should be number it's not optional so obviously you have to fill it so we're we're going to say that
2:28:04 db id and that one will be a number so I'll be saying to do yeah that that's a database id now
2:28:11 the advantage of the read only is same as what we have studied in the past hope you have watched
2:28:16 that video so for example if I go ahead and say email that email is going to be let's just say I
2:28:23 changed my mind and I say it's going to be h at the rate hc.com I wish I would have that domain
2:28:28 but if I go ahead and try to manipulate any of the read only values for example db id and
2:28:34 change it from two to two three three it's not allowed you get the idea this is really basics we
2:28:39 have seen this and done this in the past as well now what makes interfaces really interesting is
2:28:44 the definition of the functions and there are a couple of ways how you actually define it let's
2:28:48 start with the trial user so we're going to say there is a start trial and you want to provide a
2:28:53 method for that so start trial and there are a couple of ways how you define the method the first
2:28:57 one is the boring one I don't like it much second one I like more so the first method is you define a
2:29:03 name and then you say hey this is going to be a method there can be return type of void or string
2:29:08 whatever that is let's start with a string so now as soon as you create a user type of hitesh you
2:29:13 need to provide a method here as well that needs to be there so let's just go ahead and say start
2:29:19 trial something like this and this needs to be a method that is compulsory you can now just go
2:29:24 ahead and say hey for because it's it's not allowed it will pop you that hey when we are creating
2:29:28 this this needs to be a function which returns a string as well so it's really easy to define that
2:29:36 so what we can do is we can just go ahead put up a colon and say hey this is going to be a method
2:29:42 and there we go now only compulsory part on to us is to return a string so we'll be saying something
2:29:48 like trial started that's it and that's pretty much it that's all it is right now and yes of
2:29:55 course there could be more logic inside it but this series is not about logic building this is
2:29:59 more about getting friendly with the type script now there is another way of doing this which is
2:30:04 something that I like more because it's much more clear to understand I'll be saying let's just
2:30:09 say trial and what you can do in this one is you can just put up parentheses just here and this
2:30:15 makes more clarity actually to me that this is not going to be anything this is going to be always
2:30:20 in method and then after that you define what type of data it is going to return it might return
2:30:25 nothing it might return any badly any but you can just go ahead and say string now if I go ahead
2:30:32 and try to return something like to it will say hey what are you doing you shouldn't be doing
2:30:36 that you should be returning a string so yeah that is one of the way this is my favorite way but
2:30:41 again let me know in the comment section which is your favorite way maybe you like it more this is
2:30:45 more something that is making sense to you now last but not the least is remaining is the discount
2:30:50 code so let's just say user wants to get a coupon so we're going to say get coupon these days it's
2:30:55 a very sales tech to keep world so get coupon and coupon should have a name so let's just say we
2:31:01 are saying coupon name and that name is going to be in the string and the return type is going to
2:31:07 be a number number there we go now obviously we have to put up this method now get coupon and there
2:31:14 is something really interesting in this one which type strip allows you to do is first let's get
2:31:19 coupon and then again this should be a method which is going to return a number so let's just
2:31:25 say we are going to go ahead and say return 10 because you get a 10% off but notice here right now
2:31:33 you're saying hey you should take a parameter of string right now it's saying hey user dot get
2:31:38 coupon so it should be a method so right now it's not popping us anything but in in technicality you
2:31:43 should be providing a name which is a compulsory one you should always get that and I'm pretty sure
2:31:48 by doing a little bit of the tweak settings and stuff it will yell at us now interestingly you
2:31:53 should always provide a coupon name and let me show you something interesting I can just go ahead
2:31:56 and say name and then I can provide something like this there we go with a stand something like this
2:32:02 and this is allowed this is totally loud you don't need to match this name with whatever the name
2:32:06 you are providing it is just a reference that hey you are providing a coupon name which should be a
2:32:12 string and you should always provide that that is the whole idea you can go ahead and provide a
2:32:16 value as well which should be a number and now it is expecting that there should be two values that
2:32:22 you should pass on here now right now it is not giving you anything but you can just go ahead and
2:32:29 see off and if I go ahead and try to put up something like string like this notice here it says hey
2:32:35 you're not allowed to do so you can totally avoid it or if you're passing it up let's just say you
2:32:39 have to give a number so that is 10 because it's a 10% off so you get the idea that how this is being
2:32:45 done and again these are all compulsory parameters that we're passing on right now and this gives a
2:32:50 brief idea of how to define interface again use cases always helps us to get things more readable
2:32:56 but again interface is not done yet we need to have a little bit more discussion about interface
2:33:01 you can easily get it confused with the types but yes these things makes it a little bit more powerful
2:33:06 and one thing to note here one thing very important to note here strut tile is a method which
2:33:12 returns a string it doesn't force me that how you are starting the trial and it is also making
2:33:17 me compulsory that whenever you're using this hitage creating that there should be a method strut
2:33:21 trial and it should return a string no matter what logic you put up I really don't care so this
2:33:26 interface is always like an like an interface like for example your operating system is an
2:33:31 interface for hardware it doesn't allow you that when you click a button how does it happen you
2:33:35 don't know and you don't care about it you just know if I click on this something happens if I
2:33:40 double click on a folder it opens up how it does behind the scene what methods are being called you
2:33:45 don't care so that is an interface and that is exactly the same interface in the typescript as
2:33:49 well let's go ahead and catch up in next video hey there everyone face here back again with
2:33:54 another video and let's continue our discussion for the interface in the last video we saw the
2:33:58 interfaces and yes we found a lot of similarity between interfaces and the type as well but the
2:34:03 method that we are having here is a lot more difference we haven't discussed them earlier but
2:34:08 this makes interface a little bit unique as well and in terms of more uniqueness interface also
2:34:14 comes with an extension and some people like to call with fancy words like you can reopen the
2:34:18 interface and all that that's nothing it's just adding more properties into this let me walk you
2:34:23 through it will make all of the sense of what is reopening of the interfaces really not a big
2:34:29 fan of the word reopening the interfaces it's just adding more values to the interface itself so let
2:34:34 me walk you through so for example in the last video we worked on really having giving this user
2:34:39 an email user ID Google ID read only IDs and couple of methods as well but later on maybe this is not
2:34:46 something that you have defined maybe this is a library that you are bringing in from a GitHub
2:34:50 or maybe somebody else has written a package and you like this package a lot but there was only
2:34:54 one thing missing that this interface doesn't have and a simple this has a Google ID but this
2:35:00 doesn't have a GitHub login ID maybe so you want to give that so in that case you can just go
2:35:04 have and again this usually doesn't happen like this like once you are writing interface after
2:35:09 that this is something that is stored in some files and these are file being brought by other
2:35:14 developers or maybe other libraries so you can go ahead and just find out where that interface is
2:35:19 and you can actually go ahead and write this user again it is totally allowed and now here we can
2:35:24 say that I want a GitHub ID or GitHub token as well so I'm going to go ahead and say give me a
2:35:28 GitHub token and that will be a string now with this you have you can also make this optional in case
2:35:33 you want to but let's just say this is compulsory for us we are taking an input from the GitHub
2:35:38 now all I have to do is make sure I add one more property so I can go ahead and say I want to have
2:35:43 a GitHub token and that token is going to be a string so I'm going to say let's just say GitHub
2:35:48 and of course with a comma so this is all good and you realize that yeah you don't have to touch
2:35:53 this entire thing but you also get the entire functionality in your variable or a constant that
2:35:58 you have declared up here so this is why a lot of people love it and during the interviews if
2:36:03 there is a TypeScript specific interview people like to call it as reopening of the interface
2:36:08 yeah I found it a bit mouthful as well but I think that's great now when advantage also that you
2:36:13 get with the interface is inheritance that is something really great so for example you want to
2:36:18 create an interface and you know that you want to call it as admin now obviously can go ahead
2:36:22 and define the admin whatever you like maybe you like a role or something but one great thing about
2:36:27 the admin is you can just go ahead and say extends and extends extends is a keyword and then
2:36:34 you can use and you can say that hey I'm going to go ahead and extend it with the user so immediate
2:36:39 you get all the properties that are there for admin but you also have that so you can now go ahead
2:36:44 and call this one as admin and yes that will also work but since it's an admin there should be
2:36:50 some role as well and it can be simply a string then you have to add it but maybe you are defining
2:36:55 a role and there are some literal values you have a literal value of admin maybe you have a TA
2:37:01 maybe you have something what else maybe a learner learner come on if I can type that that would
2:37:11 be great okay learners so now you have to obviously give a role as well too if you are extending
2:37:17 this so let's just say we have a role and in this case since this is a literal value I can just
2:37:22 just go ahead and say admin this will not be correct this needs to be exact value then it will be
2:37:27 correct so you get the idea how you can have it and by the way you can just put up a comma and you
2:37:31 can just have another interface if you like that you can go ahead and call that we don't have
2:37:36 another but you get the idea how this is being done really super simple super easy and that makes
2:37:40 the whole of the interface so you can extend it you can inheritance it you can reopen and inject
2:37:46 the values into it but also word of caution if your interface is you are naming it make sure
2:37:51 any package or library that you have installed don't have that interface that you'll be messing it
2:37:56 up entirely so make sure you don't do that and again I would like to bring in the documentation of
2:38:00 the typescript as well so this is the small documentation and yes they also bring down this
2:38:05 question that what's the difference between type LSS interface there's nothing too much I highly
2:38:09 recommend you to read this paragraph up here so here they make interface and here they make type
2:38:15 it says extending the interface goes like this you can simply say extends and then provide the name
2:38:20 here that's fine in the case of type we have already studied it that there's an M person and then
2:38:25 you go with this veered way which I'm not a big fan that's how you do it and if you want to add a
2:38:30 new field you can open this up anytime and do it and the type cannot be changed after being created
2:38:36 this will obviously give an error so these are coming up directly from official documentation
2:38:41 and this is where you should be trusting the most official documentation so I hope you get the
2:38:46 brief idea of how these things are being done and I think now you have an entire knowledge about
2:38:51 interface and again read a little bit more of the documentation they will give you more idea but
2:38:55 throughout the documentation you'll find this point x and y yep there are great examples but I
2:39:00 think more realistic example could help you to understand a little bit more so that's all about
2:39:05 interfaces and let's catch up in the next video hey there everyone they share back again with
2:39:10 another video and welcome to another video in the typescript series in this video we have so far we
2:39:16 have already gone through with the basics of typescript how it works the basics idea how to generate
2:39:21 a JavaScript file with it but now it's time that we move a little bit one step closer towards how
2:39:26 it is being written in the production and there's not too much of drastic difference it just a setup
2:39:31 and setup depends on are you using react angular view whatever there you are using anywhere you're
2:39:37 using a writing typescript a JavaScript that's the same place where you can use typescript as well
2:39:42 now again if you are if you have been into so far of the video series and you're still asking me
2:39:47 that hey there is it going to be a series about typescript for react or typescript for view my friend
2:39:53 you need to watch this series again typescript is not for react or view or angular is just a whole
2:39:58 ecosystem similarly like if you ask me that hey JavaScript is it meant for react only or is it meant
2:40:04 for jQuery only I would say you don't understand JavaScript if you're asking that the JavaScript is
2:40:09 only used in react similarly if you ask typescript is only being used in angular or react that means
2:40:14 you don't understand typescript still so go ahead watch the video again and I have already cleared the
2:40:19 mindset of it in this video we'll be creating a similar typescript scenario where we'll see that
2:40:24 how probably in the production you can write typescript and maybe you're creating a basic application
2:40:29 with just includes JavaScript itself but you don't want to write core JavaScript you want to write
2:40:33 more of a polished and protected JavaScript that's where the typescript comes in so we'll watch
2:40:38 through with that scenario and maybe later on we'll see that how this can be introduced with react
2:40:43 and other types that you can introduce so let's go ahead and try to string this up and we'll be
2:40:48 going with typescript YouTube let's go into zero three and we'll be calling it as pure TS
2:40:57 that not a great name but pure pure TS that would be great okay let's go ahead and open this up
2:41:03 now the way how you do it is actually we have already installed typescript so TSC is already
2:41:08 there so we need to actually initialize it and this is the first time that you are using a
2:41:13 typescript like this so make sure you actually are following along with me this is a setup really
2:41:18 super easy but make sure you go ahead and follow this up we have already got TSC which is a typescript
2:41:23 compiler for us which is globally installed in this case so dash dash in it and you can see there
2:41:29 are a lot of options available the one that we are going for is dash dash in it what this does is
2:41:34 it creates a simple typescript config file in case you're using typescript with react or
2:41:39 something and you're using pre boiler template for that it gives you a lot of options like that
2:41:44 if I open up this TS config you can see that there's a lot of options for compiler projects
2:41:49 what to disable what is the target right now it says ES 2016 and there are a lot of ES versions
2:41:56 that you can target a library there's a whole lot of options we are going to talk about some of them
2:42:01 what is your root directory what is your output directory and JavaScript what to allow what to
2:42:06 emit what does the output file or output directory looks like there is a lot and as you can see there
2:42:12 is a strict there's a lot of options and there could be a dedicated video just for these options
2:42:18 and by the way these are the same options that you find on the typescript website so if I open up
2:42:22 this typescript website and I go at the very top of it and I say the playground so these options
2:42:31 actually are just here so when we say TS config yep these are exactly all the options
2:42:36 that are available to us so yep these are the options we will probably talk about them in
2:42:40 some other video right now just generating a TS config is good enough really we have not done
2:42:45 anything it's just a TSC dash dash in it so really simple and really basic now obviously I want
2:42:51 to start a node project here so I'm going to go ahead and say npm in it and I'm going to put up a
2:42:57 dash y so that it doesn't ask me too many of the questions so it generates a node package.json
2:43:03 file again remember TS config.json is for TS config typescript configuration and package.json is
2:43:09 for basically install any node package manager or npm or something like that we're going to create a
2:43:15 couple of files so that we can actually work with that so we're going to go ahead and say index.html
2:43:21 it's really simple to fill this up so we're going to go ahead put up an exclamation hit the tab
2:43:26 it just fulfills everything that we need and here we're going to go ahead and load a script file
2:43:31 and we'll be saying now what happens is you can directly go ahead and mention your type script
2:43:36 file but what happens in the case of production is actually you have two folders so let me go ahead
2:43:41 and say mkdir the first one is source and the second one is dist so dist is a short form for
2:43:47 distribution these are the two folders that you usually find now source is where you write your
2:43:52 code this is a kind of a common standard throughout all the projects whether that's angular or
2:43:57 react or anything and distribution is something which gets on to the production and that is being
2:44:02 served to the end user so here into the source we can just right click and create a new file and we
2:44:08 can just go ahead and say hey I want to create a new file into the source this is going to be index.ts
2:44:13 because that's where you write typescript and the distribution is where automatically the index.js
2:44:19 is being created you can go ahead and manually create that or we can just go ahead and create a new
2:44:24 file something like index.js usually you don't create it it is automatically being generated
2:44:30 so we'll be working on that so this is the file index.js which you have to link up so all you have
2:44:35 to do is create a script inside the body and we say that hey go into the distribution and index.js
2:44:41 this is where all of your code is going to come in now technically you never ever write anything
2:44:47 inside this test index.js this is supposed to be generated but this is the index.html where
2:44:52 you actually point towards this file and rest everything that happens into your into your web page
2:44:58 happens through the typescript itself but who is telling typescript that hey compile this file
2:45:04 and produce it inside the distribution folder inside the index.js right now nobody nobody is
2:45:09 telling that typescript that hey go ahead and do that so we have to go into the ts config
2:45:14 and tell it that hey this is how it needs to be done and if you just go ahead at the very top
2:45:20 and you keep on scrolling you you see there's a lot of things up here but there is something known
2:45:26 as output directory if you scroll a little bit around line number 52 or just search for it
2:45:31 this is where the output directory is being mentioned that hey where is your output directory
2:45:35 hit control slash or command slash if you're on the Mac and this will uncomment this one so this
2:45:40 will say that hey where should the output of this file and this should go up and we're going to
2:45:46 mention that hey my output is going to go into the dist file here and I can just go ahead and say
2:45:52 slash dist and I can actually go ahead and say dot slash it should be there suggestions are not
2:45:59 there but anyways you get the idea how this is the dist is going to come up here now so far
2:46:05 how we have configured is it's going to scan the entire directory here wherever the ts config is
2:46:12 from there all of the directories the distribution the source everything will be scanned up
2:46:17 and we'll search for any ts file it will be combined and wherever the compilation happens
2:46:21 after that the final output directory is going to be dot slash dist where the index.js or whatever
2:46:27 the name of our file is the same name file will be created yes there could be a lot of more options
2:46:32 but we'll just go for this one as of now okay all right let's go ahead and now try to use some
2:46:38 of the options so for example in this one we're going to go ahead and say hey I want to write some
2:46:44 console dot log because that's how we start and we're going to say type script is here now as
2:46:51 soon as I save this notice here there's nothing so we need to compile this type script file so let's
2:46:56 go ahead and do that I can go ahead and say TSC and then I can go into the source and then I can
2:47:03 say index and I can run this and this obviously creates everything inside the index.js itself
2:47:11 this is not what we want we wanted to compile it a little bit better so we're going to go ahead
2:47:15 and remove this this is definitely not something that I want I want index directory to be created
2:47:20 inside the index.js so I'm going to right click and delete this one because this is not what I want
2:47:26 now apart from this there is something known as with the TSC there are a lot of options here there's
2:47:31 one option dash w which says I want you to run into the watch mode so this is going to keep on
2:47:37 running the things and there is any change in the type script this is going to just keep on watching
2:47:43 it and notice here now the console dot log comes here so there are a couple of ways when you compile
2:47:49 it with that it doesn't look for the TSC on fig but when you actually put it into the watch mode
2:47:54 then it keeps on watching and also watch it based on the TSC on fig Jason and try to run all
2:47:59 these things there so this is right now our best friend yes there are a lot more configuration
2:48:03 options we'll talk about them but right now this does my job now just to prove a little bit more
2:48:08 to the point I'll stop this one I'm going to go ahead and right click and delete this file even
2:48:13 which is in my distribution folder I'll move it to the trash we don't have that file now I have
2:48:18 still a type script file which says console dot log type script is here still something like that
2:48:24 and I go ahead and run it into a watch mode and it starts compiling it gives me index.js file which
2:48:30 uses a strict and gives me a console dot log so that is great now all I have to do is start this
2:48:36 index.html so I have to use some server for that so that it loads it up because right now if I open
2:48:43 this up there is nothing wrong I can go ahead and open this up no problem at all but there's a
2:48:47 difference between just double clicking opening up file and calling it as like a server running so
2:48:52 that everything that's there runs on the local host so there are a lot of packages for that there
2:48:56 is no shortage of packages I'll close this one and that is why we have installed this package.json
2:49:03 so let's go ahead you can use node mon that is little heavy but still we'll do the job
2:49:08 and there's also npm install there is something known as light dash server and yeah that is my
2:49:16 extension actually helps me to find out if there is a package available for that or not and that
2:49:21 actually automatically loads up your index.html you can go ahead and I click on this index.html by
2:49:27 the way this is another way you can just do that or you can just right click and open it with the
2:49:31 live server so both of the options are there live server or light server whatever you want to use let's
2:49:37 just open this in the live server first and there we go this is live server if I open up this into
2:49:42 inspect and into the console there we go I see that TypeScript is still here that is going to load
2:49:52 up but another way which a lot of people love to do that I think this live server is still good
2:49:57 enough that is again an extension you have to install but in case you don't want to for some reason
2:50:04 then you can go ahead and say that hey into this package.json I can have a simple start script
2:50:10 and here you can just go ahead and say hey I want to start light server now they will do the exact
2:50:18 same stuff so you don't have to worry there we go all right so now all we have to do is in this
2:50:25 case we are not going to be running it through the index.html so I'm going to right click and say
2:50:30 stop live server and now the live server is stopped so that I can run the live light server
2:50:37 ah mouthful confusing as well I can go ahead and say npm start and that also does the same thing
2:50:44 it just opens up local or set 3000 previous one opened at up 55 000 but again the same thing
2:50:51 whatever suits you whatever you think is the best one just go ahead and use that they both
2:50:57 does the same job they both does the same job and in case you don't want to install any packages
2:51:02 light server or something like that go ahead and just install an extension by the way this is how
2:51:07 I installed it I just go ahead come up here and I say live server by rhythmic day live server
2:51:14 seems like I am offline seems like my network is should be working on that shouldn't be like that
2:51:20 okay when offline please check probably there is something wrong in my network connection
2:51:26 but yeah this is the one so live server this is the one by rhythmic day that I used again repeating
2:51:31 this again if you are using the live server just come up on to index.page link up your
2:51:37 JS file right click and open with live server in case you don't like for some reason a live server
2:51:43 you can use light server in that case you have to move into package.json and I have to say npm
2:51:49 install light server create a start script and there we go and apart from this we will be opening up
2:51:56 a new terminal and we will be saying hey TSC just go ahead and keep on running into the watch mode
2:52:02 so that whenever I make any changes in TypeScript you first and come and consult to tsconfig.json
2:52:10 and then whatever I write here you just go ahead and just follow that so if I go ahead and put
2:52:16 up a duplicate I'm going to duplicate that come on looks like I forgot copy that paste that
2:52:23 so TypeScript is here and we're going to say TypeScript is amazing save that I prefer not to use
2:52:31 light server I don't think that's necessary I think I'll just go ahead and say right click and
2:52:37 open with live server I think that is much more awesome and I don't need to install any packages so
2:52:43 I'll just right click and say inspect and I'll say console and yeah everything is coming up one more
2:52:49 thing I would like to do here is inside this head I would like to open up a style because I know
2:52:56 this is painful and we'll be saying the entire body should have a styling which is going to be
2:53:03 background color is going to be let's try a little bit of the grayish I think let's
2:53:10 let's go ahead and use 313131 so save that and yep I know you're much more happier now
2:53:16 so dark mode is is the way how to go forward so you get the idea how to do this this is a basic
2:53:21 set of of how we can do it surely in the upcoming files we'll talk more about how the TS config
2:53:26 works but right now we'll still talk more about the TypeScript and then we'll talk about the
2:53:31 TypeScript configuration so I think now you're equipped perfectly to actually put up a TypeScript
2:53:37 into production how this is being done surely there are more settings but this is a good start
2:53:41 so hit that subscribe for that and let's catch up in the next one hey there everyone hit a share
2:53:46 and welcome back to another video in the series of TypeScript hope you're enjoying this series
2:53:51 it's late well over one o'clock in the night still all pumped up to make more videos
2:53:57 so in the last video we saw that how we can simply put up a server of TypeScript and we can
2:54:04 actually keep on generating the files in the JavaScript and we have set up almost like a production
2:54:08 grade not exactly but very near to the production grade server where we can write TypeScript now
2:54:13 through that server now previously we've been writing just the alone TypeScript file but from this
2:54:18 moment onwards we'll be start writing things as TypeScript and we'll be learning classes with them
2:54:25 surely we can go ahead and run these classes via the previous method as well you can just create
2:54:30 an ordinary file and go ahead we do that there is no problem at all but I just wanted to show you
2:54:35 that yes this is also another way so we'll be just closing all the files so index.html don't
2:54:40 need package.json.tsconfig don't need index.js definitely we'll be needing that because we'll
2:54:45 be creating some of the files so we're going to go ahead and let me also close this one because
2:54:50 we don't need it right now so how do we create classes in TypeScript now the syntax is almost
2:54:56 similar but there are some subtleties which helps you to avoid some of the like fallthroughs where
2:55:02 you can fall eventually so let me walk you through it's really simple easy the keyword is same
2:55:06 class and let's just say we are creating the same user that we have been trying to create so far
2:55:11 with this course so there we go that's it and let's just say you want to create a constructor just
2:55:16 like we do in the JavaScript classes so we do have this constructor and you can take any parameter
2:55:22 into this one so for example you might want to take email and you also want to take name into
2:55:28 this constructor then we simply go ahead and say hey this dot email is going to be email
2:55:36 and apart from this this dot name is going to be name so this is classic JavaScript so far at
2:55:43 least but this is not TypeScript and that's why you see a lot of squiggly lines up here on the
2:55:48 email and all of that but this is yes a valid JavaScript there is nothing wrong with that so far
2:55:54 but what helps you in the TypeScript part is obviously the types of the data and that's why
2:55:59 TypeScript exists types for that so you have to clearly mention that hey email is going to be
2:56:04 off type string and the name also maybe it's a number but in this case that's a string but again
2:56:10 we have discussed a whole lot about the types and this is now the syntax familiarization but this
2:56:15 is still complaining and you might want to just go up here and say hey this is going to be a string
2:56:19 but this doesn't actually solve the problem it says hey this is not the property email does not
2:56:24 exist on type so in order to avoid this kind of thing this is not the syntax which is given in
2:56:30 the documentation of TypeScript the way how they recommend is to actually make sure that TypeScript
2:56:36 is aware of the email in advance so this is really simple you just go ahead and say hey there could
2:56:40 be an email which is going to be a simple type of string and there can also be a name which can
2:56:47 be of any type but in this case we are going for the string so these two values will come up
2:56:52 and when we take these values from a constructor it just says hey just take these values and fill
2:56:58 them up into this line number two email so this dot email means I'm referring to the email which
2:57:04 is mentioned at line number two so this is really simple that's how you do it now creating a syntax
2:57:09 or creating an object from this class is really simple so for example you go ahead and create a
2:57:13 hitage and that's going to be simply a new let's go ahead and user obviously this is not correct
2:57:19 because we have to compulsory type that needs to come in the first one being email not email email
2:57:26 and that email is going to be type of string if I can write that email yeah that's correct
2:57:33 and let us say h at the rate h dot com and then there is a name as well which will come up as a
2:57:40 page so let me go ahead and world wrap this first so world wrap there we go so we've got this really
2:57:47 basic one which is coming up and the most important part is since this is a constructor you don't
2:57:52 have to say actually this name and email so this is something that you don't have to do you just
2:57:57 have to provide the string the two strings that you can have and really we can just go ahead
2:58:02 remove this one and this part as well and this will be all happy now there we go so really simple
2:58:08 absolute basics that's how you do it now I will come back on to couple of stuff but first I want
2:58:13 to show you the index.js so this is how the index.js this produces almost the same code and we can
2:58:18 see in the typescript right now it's not reloading the browser but yeah a typescript is watching
2:58:25 the file save and if I save this one again not here if I save this one it watches that and
2:58:31 just produce the code so we can see that almost same kind of code is being produced here there is
2:58:36 nothing magical and it's working exactly same but in the typescript world this is something which
2:58:42 is preventing some of the off usage of the thing it always says that hey there should always be a
2:58:47 string and we guarantee that this is all going to come up as a string this is already a string and
2:58:52 that's why you are able to pass this up here so that's really really nice okay couple of more
2:58:57 things that can come up maybe there is more parameter like for example there is a city
2:59:01 and that city is going to be a string but you are not taking string come on string there we go
2:59:10 and now notice here this city is giving you a problem that hey I user dot city string has no
2:59:17 initializer so obviously if you are making a city and you're marking this up as a string then it
2:59:23 needs an initializer because it's not a field we are taking in constructor I can mark this as
2:59:27 totally empty now if you pass it on that's great if you don't pass it on it will not be worrying
2:59:33 about that you can definitely go ahead and access that so I can go ahead and say user not user
2:59:39 actually hithesh dot city and I can just access that it will have a value here but again I don't
2:59:46 have to worry and also it also prevents me to add something like to into this one that hey you
2:59:51 cannot actually add to into the city because it's a string so that's a little bit of the avoidance
2:59:57 which actually doesn't happen at the case of java script so if I go ahead and add that as my city
3:00:03 so I just say I add japor as my city then obviously you can go ahead and work on with that but
3:00:10 there is nothing which is stopping me to come on here and if I go ahead and reload that there is
3:00:16 nothing right now but I can go ahead and say not user actually hithesh dot city and I can go
3:00:23 ahead and point it as three so yes that's really bad shouldn't be doing that but in the test
3:00:29 script there's in the java script there is no control I can even come up here and can change it
3:00:35 to something like hithesh dot city and I can make it for there is nothing which is stopping me but
3:00:42 as soon as I save this this will be overwritten as soon as I save my type script so that's a
3:00:46 safety concern I come up here save this and probably I need to write some lines so maybe I'll just
3:00:51 change it to Delhi because the entire file is being produced if I save this yep as you can see
3:00:57 this is gone now so whatever overwritten things that I've done in the type script they actually
3:01:03 produce and render a new java script and new this type script helps me to avoid any things like
3:01:08 that okay apart from this maybe you want to get a city as probably read only then obviously it
3:01:16 will not allow you to change the city always and always going to be blank or maybe you want it
3:01:20 to be always as japor great city but obviously some people might want to change it so in this case
3:01:26 it says up nope you're not allowed to do so because it's a read only and that is the property we
3:01:31 have already studied it in the past so again if I save this notice here nothing stopping me
3:01:37 because the configuration is there that's why I'm allowed to serve but type scripts stopping me
3:01:42 and you can configure it using ts config that if there is something wrong or there's something error
3:01:46 don't even produce the java script code so that is what the powerful thing is but again you get the
3:01:51 idea I'll comment this out you get the idea how it is really easy to write typescript classes
3:01:56 pretty easy nothing too much of a heavy centric load here and let's discuss a little bit more about
3:02:02 the classes but in the next video let's catch up there hit that subscribe hey there everyone
3:02:07 face here back again the other video and welcome to the classic studio again and we're going to
3:02:12 continue our typescript series in this video so the traveling is going to be less so expect more
3:02:18 videos and we're going to continue the typescript series already we have covered a great
3:02:22 in depth of the typescript now only a few topics are left which are mostly used
3:02:27 and that is something which is likely a little bit common in the java script world as well as we
3:02:31 have some shortcuts and some tricks with the typescript with some type safety as well so we have
3:02:36 already gone through till the classes we have gone through with the basic overview of it in this
3:02:41 video I'll show you some of the modifier keywords especially we're going to be focusing two out of
3:02:46 the three which is public and private yes there is a one more we're going to discuss about that
3:02:50 later on and we're going to discuss some of the shortcuts that you're going to find in other
3:02:55 people's code one of the best way to learn programming is to look at the source code what other
3:02:59 people has written in the same language and to understand how is it happening it's not about
3:03:04 understanding the logic behind it it's more about understanding the syntax and the shortcuts
3:03:08 and the file structure that they have followed so that is a good practice so anyways let's get
3:03:13 started and let's talk something about the classes and the type modifiers in the typescript
3:03:18 so let me walk you through so this is the example in case you have followed along with the series
3:03:23 this is the example that we have been taking around and we have the typescript in our watch mode so
3:03:29 that is also we have discussed quite in depth so this is a user class we have email and the name
3:03:34 and we also learned about some of the modifiers like read only which can only be read and you can
3:03:39 not actually set them up this actually gave us a bit of an error so if I go ahead and uncomment
3:03:44 this this gives us as quickly line it says you cannot assign that we've already gone through with
3:03:48 these modifiers really easy now one of the strangest syntax that we have studied is the constructor
3:03:55 in the constructor we have these emails and name and we have to say this dot emails so that we can
3:04:00 have already some of the emails being marked and these values can go up there now there are a
3:04:05 couple of more things that we can actually go ahead now for example some reason you want the city
3:04:10 to be not accessible here at all like right now if I want to access I can go ahead and remove this
3:04:16 and I'm totally allowed to access it I'm not allowed to set it because it's read only but I'm
3:04:20 allowed to access it for some reason you don't want it to be accessible to anyone so there we can
3:04:26 go ahead and say we can have it as private and once you have this private it is marked as hey you
3:04:31 cannot use because it's a private marked and it's only accessible within the class so for
3:04:36 example if I want to access it somewhat like here I can go ahead and do it so I can go ahead and
3:04:41 say this dot city I'm totally allowed to use that here because it's in the class and this class
3:04:47 could be into a separate file is itself that is totally allowed for you now this also makes a
3:04:53 conclusion that we also have another keyword lying around which is public so all these things which
3:04:59 you haven't marked including name are automatically marked in the typescript world as public there is
3:05:05 one more modifier we're going to talk about them in later on video right now we want to focus on
3:05:09 this only now this is the basic you should always remember everything that you don't mark is public
3:05:14 and if you really want to mark this this is a private now one strange thing that comes around with
3:05:20 the private is let me just go ahead and remove this private from here and mark it up here you can
3:05:26 mark it on anyone that's no problem at all but the problem is that this public and private thing
3:05:32 is actually available in JavaScript as well so let me go ahead and say name it's not accessible
3:05:38 but you could have also done that by simply saying something like this and this is a classic
3:05:43 JavaScript and say this this is declared but never being read so this is something we already
3:05:48 have as a private and there's a great debate in the typescript world that should we use this syntax
3:05:53 or we should use a private something like that I found that the keyword private makes much more
3:05:58 sense because it's much more clear much more easier to understand I prefer this way and in fact
3:06:03 all the code that I've written is personally also has this modified keyword instead of that hash
3:06:09 the only difference is the hash is actually a JavaScript world and the private is a typescript
3:06:14 world there is no such thing as private in the JavaScript world so that is one thing you should
3:06:18 always remember and should be aware of it now one more shortcut I would like to mention here
3:06:24 because you should know about it now this whole thing is really clumsy and really big
3:06:29 and the production grade code you will find less of these classes being declared like that
3:06:34 I'll show you a shortcut way I'll duplicate this one and I'm going to go ahead and comment this
3:06:38 out so what you're going to see that most of the professional people who write these code don't go
3:06:42 like that maybe let's just go ahead and remove this they actually go ahead and use these modifiers
3:06:48 and actually use them up here so what you can do is you can mark them as public you can make them
3:06:54 public private whatever you like I want to make all of them public so I'm going to go ahead and say
3:06:58 public and this actually produces the same code so that is why you'll see a lot of professional
3:07:03 people actually write it this way and sometimes they actually write it like this and this so it's
3:07:09 it means it's same just a syntactic highlighting syntactic sugar is there so yes a lot of people
3:07:14 does that and you can see that this actually produces the same code this dot email and this dot
3:07:20 a lot of people who write JavaScript hate actually to write these things this dot that this dot that
3:07:25 so they love typescript because of the simple reason like this and you can actually if you have
3:07:30 to make something read only then this is the syntax but maybe there's something more in the private
3:07:34 you can go ahead and do that as a private as well so we're going to say private and what else is
3:07:40 maybe user ID that is going to be of type strings so you can go ahead and do that as soon as I save
3:07:46 this you'll notice that this user ID is there but since there is nothing which we are marking it
3:07:52 as private or something we are totally allowed to use that so that's the basics and again there is
3:07:57 a syntax it says constructor you need to pass on user ID as well if I go ahead and comment this
3:08:02 out this is all happy now so you get the idea there's one more keyword there are a couple of more
3:08:07 things we have to learn about this private method so that we are going to talk about in the next
3:08:11 video let's catch up hey there everyone face here back again another video and in this video
3:08:16 we're going to talk about getters and setters and they're almost exactly same as we see them
3:08:21 in the JavaScript world in the typescript world they are also same but with some of the interesting
3:08:26 thing and these interesting things are usually being asked in interviews when you mention that yes
3:08:31 I do have an expertise in typescript as well so let's take an example let's move on to the system
3:08:36 take an example of that and nothing too much to be worried about it's really easy so we already
3:08:42 got this city so something like that and there could be a lot of use cases of these getters and
3:08:47 setters one common let's just try out and again these are some of the basic examples that I'm going
3:08:52 through let's just even design a method which says get apple email so maybe you're designing a software
3:08:59 for apple and it doesn't throw away the email directly it gives you the random email or some
3:09:04 email based on that so you can go ahead and provide a getters like that so get apple email in case
3:09:10 you want to make a getter of that you just annotate it with a get keyword and that's it you make
3:09:15 it as a getter and that's all now this get apple email is going to return a string and we're going
3:09:22 to go ahead and annotate that so it doesn't do automatically things for us and notice you're
3:09:26 right now it says a getter accessor must return a value so let's go ahead and return a value
3:09:31 we're going to go ahead and say hey I want to return a simple string and that string is going to
3:09:36 say something like apple and then we're going to use a dollar sign like that and we're going to
3:09:42 say this dot email so you just append the existing email with the apple keyword in front of it
3:09:49 maybe you don't want to do this maybe you want to generate a completely random email for that
3:09:53 totally up to you totally your decision just want to make sure that this is now a getter
3:09:58 and let's also do some setter example and show you something really interesting which is a kind of
3:10:04 a gotcha moment for all the people who are getting started with the typescript so for example
3:10:09 let's just say I come here and I design a private property here so this private property is going
3:10:17 to be something like let's just say a course count so we're going to go ahead and say underscore
3:10:21 course count and we're going to get started with a course count of one so whenever a user registered
3:10:26 on your website he always gets at least one course maybe an introductory course on javascript or
3:10:32 whatever that courses we always get started with that now this is already private that means I
3:10:36 cannot access this outside of this class we have seen that already in the last video so that is all
3:10:42 but you also want to design some getters and setters for this property so that if anybody wants
3:10:48 to access this they are allowed to access it but not directly via that method which is a getter
3:10:53 and also if somebody wants to manipulate that method it doesn't allow it to directly set that
3:10:58 value we want to have some setters for it so let's go ahead and try and see that how we can
3:11:02 actually do this really simple first and foremost we're going to design a simple getter for that
3:11:07 so if somebody wants to access a course count we're going to provide a method just like that
3:11:12 and we're going to say that this is going to return you a number okay all right really simple
3:11:17 and all we're going to do in this one is we're going to say this dot underscore course count
3:11:22 now this is a really basic getter that we have designed but there could be a more complex logic
3:11:27 involved that for example you might want to check whether there's a unique ID or token is there
3:11:32 in the user session and don't only we are going to return him back the course count there could be
3:11:36 a lot more complex logic we are not worried about that we're focusing on the syntax in the series
3:11:41 and all the hidden details similarly just like we have a getter we could have a setter as well
3:11:46 and something interesting about the setter or voice obviously it starts with the set keyword
3:11:50 and then we're going to go ahead and say that this is going to a course count but this time
3:11:54 obviously you want to update it with some value so somebody is going to give you a course number
3:11:59 and here comes the interesting part now this is not going to return anything so I'll say that
3:12:03 hey this is a wide and just like that and or is here this says pop up that a setter
3:12:08 accessor cannot have a return type of annotation so this is something which is an interview question
3:12:13 that whenever you're making a setter so you cannot actually make it a wide you cannot make it
3:12:18 other data type as well like number or anything no this is not allowed typescript simply wants you
3:12:22 to have nothing here so this is a perfect setter okay because setter is accessing this property or
3:12:28 whatever the property are mentioning it and setting some values on that so for example somebody
3:12:33 is giving you so you want to have a simple if and else check statement so that if the course
3:12:38 num is less than or equal to one we don't want to do anything because that's a default value so in
3:12:43 that case maybe you want to throw a new error something like that and you want to say something
3:12:50 like this give him an error that course count should be more than one so that's a basic error
3:13:00 otherwise if that's not the case you might want to do more check or something but we all we're
3:13:04 going to do is in this case is simply this dot underscore course count is going to get updated with
3:13:11 whatever the course number you're designing so this could be any logic as complex as you want maybe
3:13:16 also want to check whether the user who is updating the course count has purchased or not whatever
3:13:20 that use case is what we are worried about is simply to have a getters and setter important
3:13:25 part is in the setters there should be nothing that is the return type that is the basic now also
3:13:31 one more thing which we didn't discuss in the last video we saw that there could be private
3:13:35 properties similar to that there could be private methods as well it is very obvious but still
3:13:40 wanted to cover this topic so let's just say you want to have a private method let's just call
3:13:44 this as delete token so let's just see we have a delete token right now it does nothing but maybe
3:13:51 for some reason we'll have a console log and it says token deleted so for some reason you want to
3:13:58 only access this method why the class only so now if you go at here and try to access this
3:14:04 method which is very obvious that if I want to say delete delete token this is not allowed
3:14:12 because this is a private property and only accessible within the class very obvious we already
3:14:17 know this one so this was just basic now this is a really basic let me summarize this getters and
3:14:22 setters are pretty common just like you use them in JavaScript get is used to get any property it
3:14:28 doesn't mean that you always have to get a private property maybe you want to get a public property
3:14:32 why some method by adding some additional logic that is also totally valid and you can actually
3:14:36 use that but in most use cases these properties are being accessed or these getters and setters
3:14:42 are designed so that any private method can be exposed outside but with some additional logic or
3:14:47 additional you can say some restrictions that you want to put up so that is why it is being used
3:14:52 and it doesn't really mean that always there should be a getter that needs to be a setter as well
3:14:56 sometimes maybe you want to just have an exposed property don't want anybody to set it up
3:15:00 that is also the case so there could be one there could be both and in the setters the most
3:15:05 important part is that there is no return type even if you try to put up something like void
3:15:09 a JavaScript a TypeScript will yell at you and you should not be doing that in case somebody
3:15:14 asks you in the interview yep that is the case that is how TypeScript is designed so that is all
3:15:19 your getters and setters in the TypeScript really easy very accessible and let's go ahead and catch
3:15:24 up in the next video hey there everyone face your back again another video and in the last video
3:15:28 we saw about the public and private which are access modifiers yes there could be a lot of fancy
3:15:34 names about keywords and stuff but the real reason why we call them as public private and there is
3:15:39 another one which we are going to discuss in this video these are access modifier they limits your
3:15:44 ability that can you access those properties or how you can access them maybe yes maybe no or maybe
3:15:50 why a restricted ways and that's why we call them as access modifier so we have already seen
3:15:56 that there is an access modifier so we have gone through with this one so there is a private one
3:16:01 had a lot of discussion around it and when there is nothing written it that means by default it will
3:16:05 be public you can explicitly mention that to get more clarity on the code but there is one more
3:16:10 use case so what we're going to do is we're going to shrink down all these methods we are not
3:16:14 worried about them so let's just say we again actually shrink the constructor as well
3:16:19 okay now we can see that this is all good now there is a lot of time use cases about inheritance
3:16:26 we have declared a class but you also want to use these classes as a parent for another class
3:16:32 because a lot of functionality is already written and you want to just add a tiny bit of functionality
3:16:36 into those classes in such cases inheritance is used so how do we do that in the typescript
3:16:42 it's really simple let's just say we have a class of user and we want to create a subuser from that
3:16:47 or maybe there is a family member in the user who also use your course access so something like
3:16:53 that so we can go ahead and say this is going to be a subuser and since you've already defined all
3:16:59 the functionality all you can do is use the keyword which is extends and this is going to inherit
3:17:06 the parent class so you just mentioned the parent class so in this case that's a user so by default
3:17:11 whenever you're going to create an object or instantiate the object with the subuser it actually
3:17:18 acquires all the properties here but there's a problem it cannot acquire the property which is
3:17:24 mentioned as private because remember in the last video we discussed that private when you mention
3:17:29 the keyword private it can only be accessed within the class not outside the class so public is
3:17:35 accessible in this class as well as outside or creating an object there is it is also accessible
3:17:40 so what we can do here is we can go ahead and create something like is family so let's just say
3:17:46 a family is also using this so this is going to be a simple Boolean and we're going to mark this
3:17:51 as true so now we have a new property which is is family and that can also be accessed let's just
3:17:57 you define a method which is going to manipulate this underscore course count so we're going to go
3:18:04 ahead and work on with that so let's go ahead and try this out we're going to go ahead and say
3:18:08 what should we name this one as change course course count there we go and this is going to be
3:18:17 really simple method all it does is anybody calls that it just changes the course count so we can
3:18:22 go ahead and say this dot underscore course count and we change it to four for some reason I don't
3:18:31 know what the reason we are able to change that the notice here it says a property underscore
3:18:35 course count is private and only accessible within the class I am a big fan of how these errors
3:18:41 actually comes on the VS code especially with the TypeScript no match for that and the moment we
3:18:47 change it up from private to another keyword we can actually go ahead and we have the public we
3:18:53 have a private and we have a protected so we're going to go ahead and say protected the moment I say
3:18:59 protected this simply means that this wherever you place it in this property or wherever this will
3:19:05 be accessible in this class as well as in any class which inherits this class it will not still be
3:19:10 available outside of this you cannot access it directly like hithesh dot something like that you
3:19:15 cannot do that but here now it is accessible and yes that is your protected another type of access
3:19:21 modifier there is no need to go and dig deep it further just remember wherever there is marked as
3:19:26 protected it can be used in the same class as well as any class which inherits task that's all
3:19:31 that's all you need to know let's go ahead and catch up in next video hey there everyone very
3:19:35 sheer back again the other video and in this video I want to bring your attention towards interface
3:19:40 again now that we have classes we can actually talk about interfaces now especially for the web
3:19:46 developers it is little bit tricky to understand interfaces and they seem like why they do even exist
3:19:52 there is no implementation of that there is no advantage of that but let me tell you something
3:19:57 from my experience into working of ios development now this is exactly the same concept they kind of
3:20:03 borrow it from the Swift or probably objectives objective C as well this is similar concept now in the
3:20:09 world of ios app development there are a lot of protocols we the interface we call them in the
3:20:14 TypeScript but in the world of ios development we call them as protocols now these protocols don't
3:20:19 have the definitions they have just some protocols that if you want to do certain things you have
3:20:24 to do this way and that is the only way you want to do it now these kinds of things are similar
3:20:29 in interfaces so let me tell you the same example we are building a mobile app which uses the camera
3:20:36 just theory again they which uses a camera and we want to implement that kind of a scenario in our
3:20:41 application so let me walk you through with the same example of ios development into the world
3:20:45 of TypeScript and it is so much easier to understand this way so let me walk you through so moving on
3:20:51 to our i have created a new file which is second dot ts i'm going to go ahead and remove this one
3:20:56 up here still in the watch mode so that's fine so let's just go ahead and say we want to define
3:21:00 an interface now this interface says that just go ahead and take photo okay that's same now in
3:21:06 this while taking the photo i think that there should be a couple of things that should be defined
3:21:10 for example there should be a camera mode and this camera mode could be a string maybe there's a
3:21:17 front camera maybe there's a back camera but whoever is designing a class that you can take a photo
3:21:22 from your web application should always implement that these are the bare minimum basics we'll add
3:21:27 couple of more properties similar to this for example we'll have a filter this filter is also going
3:21:32 to be a string and maybe there is a burst mode burst mode or just burst photo burst and we're going
3:21:39 to say this should be number and this is not it there could be more methods or functions and
3:21:44 there could be a lot more right now we're going to get started with this much only so this is an
3:21:48 interface now in your entire application no matter how or who is building it if anybody wants to
3:21:55 create a feature of taking photos should always and always follow this interface how about that so
3:22:01 let's just say an application comes up and it's an open source project that you're building up
3:22:05 you have designed and everything is being worked out and let's just say somebody is building a
3:22:09 fictitious Instagram so we're going to go ahead and say Instagram now as soon as Instagram says
3:22:14 that I want to implement a protocol or an interface of take photo the notice here what happens
3:22:20 this is the reason why interface exists it gives me an error and the errors are also precise
3:22:26 that it is incorrectly implementing the interface that means hey if you want to take photo there are
3:22:31 certain number of things that should always be there so if you are inheriting me not inheriting me
3:22:36 it's basically implementing my protocol or my interfaces that means hey this is missing all
3:22:43 these properties this should be there to take photos so let's go ahead and do that so how we can
3:22:48 do that we can simply design a constructor and we can take all these properties just like that so
3:22:53 there we go constructor is there now here I'm going to go ahead and say I'll take all of them in
3:22:57 public you can take them in private as well know such a big deal but I'll say that hey I want to
3:23:02 have a camera mode and that camera mode is going to be a string and we'll also take one more which
3:23:09 is again going to be public the next one is filter filter that is also going to be a string and I'll
3:23:17 also take one more so we're going to go ahead and say public and this one is a bus so we are taking
3:23:22 five photos 10 photos in just a click how how much that is now if I go ahead and say this one is
3:23:27 also a string notice it implements that hey you shouldn't be doing that burst is always a number
3:23:32 it needs to be a number so as soon as I do this there we go now you're perfectly following a protocol
3:23:37 to take the photo now what you do with those photos or how you take the photos that is not defined
3:23:42 in my interface interface is something which never involves the definition it always in
3:23:47 clients that these are must have things in order to have it let me go ahead and show you one more
3:23:52 thing another class comes up and that class is YouTube it also wants to take photos it's going to come
3:23:57 up with implements and we're going to say that hey we also want to take photo there we go now again
3:24:01 same error same problem I'm going to go ahead and copy this constructor here as well but in the world
3:24:07 of YouTube I'm not happy with this I want to have more information for example I want to take a
3:24:12 simple public and I'm going to go ahead and say you know what we also upload short which is a
3:24:17 type of string so you can go ahead and use this it's not going to complain that if you are doing
3:24:22 more than what is necessary that is allowed but you cannot do less than what is necessary up
3:24:28 there so this is basic now let's just say another interface comes up and it says interface
3:24:33 and stories are getting popular everywhere so we are implementing an interface that says story
3:24:40 whoever wants to utilize a story in their application should have a method that says create
3:24:45 a story just like that and it should return something maybe a string maybe a number maybe
3:24:53 wide whatever makes sense to you you can go ahead and return that now the thing is that if YouTube
3:24:59 wants to implement take photo as well as wants to implement a story it cannot do it directly it has
3:25:05 to adhere with the rules that are being provided so here it says hey you need to create this method so
3:25:11 this actually needs to have a method with the exact same name create story so we're going to go
3:25:16 ahead and say create story now what this create story does we really don't care it can simply go
3:25:21 ahead and log the values that a story story was created or whatever that is now you can define it
3:25:29 much more better that it can return some like photos or something if the for if the story is being
3:25:34 created or maybe a video needs to be returned yes we can go ahead and implement that but this is the
3:25:38 main how you provide an interface a guideline is provided in the TypeScript but if you want to do
3:25:43 certain things this needs to and if you go ahead and change this like for example if this is a
3:25:47 create story this gives a problem no no you cannot do this this bring consistency entire
3:25:52 teenager code and that's what TypeScript is all about getting less error having more consistency
3:25:57 in the JavaScript and that's why we use it I hope this class was interesting and if this was
3:26:02 interesting hit that subscribe button and I'm going to catch you up in the next video hey there
3:26:06 everyone if they share back again with another video and in this video we're going to talk about
3:26:10 abstract classes in TypeScript I hope you're enjoying the TypeScript series if you're enjoying that
3:26:15 go ahead share this out hit that like button subscribe if case this is something you want to
3:26:20 consider and please do so your support because these content videos gets already very less attention
3:26:28 it's your help that can help me to get more attention to these content videos which actually
3:26:32 deliver some knowledge rather than just meta videos videos about videos anyways let's go ahead
3:26:38 and talk about abstract classes in these in this particular video in order to understand abstract
3:26:44 classes it is important that you understand interface first so by any chance the last video got
3:26:48 skipped out from you about the interfaces go ahead watch that first then come back again now we
3:26:53 will have a small comparison because in the TypeScript world and in the interviews as well
3:26:58 interviews love to ask you about hey what's the use of these abstract classes if the interfaces
3:27:03 are available and they are very very similar we're going to not only understand the difference but
3:27:07 we'll have a very basic easier use case and just like you always know it's going to be super
3:27:12 easy to understand there's just one classic difference you point that out you absolutely nail it down
3:27:16 also we're going to understand the use case so let's go ahead and move on to the computer
3:27:20 I'm going to go ahead and comment out the second dot TS because we actually worked on this already
3:27:25 I've created a new file abstract class dot TS it's absolutely empty just created so that we can
3:27:30 save some time about it and let's go ahead and try this out so what we're going to do is in the
3:27:35 last one we actually worked on the interface and then the interface was implemented by any class
3:27:41 remember the word implements this is only used for interface and the easier way to remember is
3:27:47 interface implement so both start with size so yeah that's the easy way to remember now let's
3:27:52 go ahead and try to create an abstract class and see how does it work so we're going to go ahead
3:27:55 and create a class and we're going to call this one as take photo just like the same class
3:28:00 that we created earlier so this is really simple I cannot go ahead and create something like this
3:28:06 I cannot go ahead and copy this piece of code and just place it up here this is not a valid code
3:28:12 so you notice it already in the very first this is not really an interface so this is not allowed
3:28:17 I cannot have just the mention of these properties in order to mention them obviously know that I
3:28:22 need to have a constructor we're going to go ahead and have a constructor just like this this time
3:28:26 we'll use only the two of the properties that's easier one and we'll be using the shortcut for that
3:28:32 so we'll be saying hey public give me a camera mode that is going to be a string and apart from
3:28:38 this also hey public give me what should I have filter yeah filter is fine that is also a string
3:28:44 string so this is okay completely okay as a class now let's just say if I want to use this class
3:28:52 into my some another class so what I'll I'll be doing I'll be saying something like this class
3:28:58 and let's just say Instagram is now it does it cannot implement it but it can extend it so this is
3:29:04 the first difference between the keywords this is like having an inheritance here all right
3:29:09 let's go ahead and use this take photo and we can go ahead and do this no problem at all now for
3:29:15 a moment I would like to comment this out and first since we have created a class let's create an
3:29:19 object from it so I can go ahead and say const I can go ahead and name it as hitesh that is going
3:29:26 to be having a new and we can go ahead and say take photo this is completely valid and let's go
3:29:34 ahead why is it having an issue cannot really clear blocks hitesh okay all right I need to change
3:29:39 my name I'll call myself as hc that would be great and it says take photo let me go ahead and save
3:29:47 this why is it having an issue with the take photo okay all right camera mode was not provided I
3:29:52 get that so I'll be saying providing two strings into this one so the first one is going to be
3:29:57 let's just say test second one is also going to be test and now it is all happy so this is
3:30:02 completely allowed completely valid the problem actually starts the moment you declare this class
3:30:07 as abstract the moment you declare it abstract now no new object can be created from this class and
3:30:13 obviously it makes sense it makes no sense that hey we are creating a class we are not able to
3:30:18 create any object from it's what's the point of having a class and that's exactly what the
3:30:22 abstract classes is known for in the world of abstract classes these are almost like blueprint
3:30:28 yes we have a blueprint like interface but in the abstract classes they are exactly the blueprint
3:30:34 you cannot create an object from it it's the responsibility of the class who is extending it
3:30:39 it's the responsibility that hey create object from this class so if I go ahead and move this code
3:30:44 here to make easier we can go ahead and use instagram here and that is totally valid you can create
3:30:51 object from the class who is inheriting it but that's the whole idea okay that's the first
3:30:56 difference I think you got this one but this is not all there is a lot a little bit more to it
3:31:01 we have also seen that in the interface we can create these method definitions so let's go
3:31:06 ahead and try to create a method definition in fact I'll just copy this and we'll have this one
3:31:12 all I just have a different one we want to have a different method we want to call it as get
3:31:16 sapia sapia did I wrote it correct nope there yeah this is what this one is correct
3:31:22 so we want to have a simple get sapia and I'll just say that hey this doesn't return anything
3:31:27 this is just a void now notice here I say that hey this is get sapia it says function implementation
3:31:33 is missing or not immediately followed this can be done if you just go ahead and call this one
3:31:39 as abstract you can go ahead and say that hey this is abstract method that means I'm not going to
3:31:44 provide you definition this is just a method I don't know how anybody is going to implement it
3:31:49 but they need to implement it otherwise they're not following this abstract class so I have to go
3:31:54 ahead and follow this one first I'll just go ahead and show you one more common way you're going to
3:31:59 see a lot of code just like that so just like this and here while creating the constructor I'll just
3:32:04 comment this out for a minute so that you can see what's happening so in the constructor I'll take
3:32:09 couple of properties so I'll say hey public I want to take camera mode camera mode that is going to
3:32:18 come up as string let's have a comma move to the next line and this one also much more readable
3:32:26 I'll also take public I'll be saying hey give me a filter as well which is going to be a string
3:32:32 and since this is a additional or advanced class inherited class this also takes burst photo
3:32:39 so we're going to go ahead and say burst which is going to be a number number this is going
3:32:44 to create a problem in your case because if you want to take a constructor like this you have to
3:32:49 actually use a keyword super in which you have to pass on all the required values so required
3:32:54 values are camera mode so let's go ahead and pass on this camera mode directly here and I'll
3:32:59 also pass on filter so this is a common syntax you're going to see that's why I have introduced
3:33:03 this to you all right so this is all good now let's come back on to the part where we were
3:33:08 discussing about these abstract so Sapia obviously not implemented so you have to implement it so
3:33:13 all have to come up here and say hey I'm implementing a get Sapia I don't know what this is doing this
3:33:18 don't have to return anything so we're going to just do a console log and I'll say
3:33:23 Sapia okay Sapia there we go so you saw that how we can do it now
3:33:33 you might have noticed that in the interface also we can define these things so what's the point
3:33:37 of having these abstract classes in addition to that what you can do is let's just say these days
3:33:42 reels are really really popular they're getting very popular so I want to say get real time I want
3:33:49 to define the method and this method is going to return you a number and then further down we will do
3:33:56 some complex calculation and after doing a lot of calculation we're going to go ahead and say hey
3:34:05 we are returning eight or whatever the number is you get the idea how we are doing it so notice
3:34:10 here this doesn't give me any problem here this is the power of abstract classes and this is
3:34:15 something that makes them still in the in the realm of the script otherwise everything else is
3:34:21 being done by the implement and this interfaces so this is what it makes something new I can go
3:34:29 ahead and create an object just like this and that is fine it needs another value the value is
3:34:34 let's just say three and now I can go ahead and say hey Etsy wants to get real time I can go
3:34:41 ahead and use this and that's totally allowed and valid and in fact I can go ahead and overwrite
3:34:47 this method as well if I want to so that is totally allowed as well because it's just a class
3:34:52 and it has that feature so this is what's something that makes abstract classes so again
3:34:58 going through with the summary of it you can make abstract classes abstract classes cannot create
3:35:01 their object on their own but they help to define the class who are inheriting them get a better
3:35:08 structure of their classes and some compulsory thing that you have to put if you want to put up
3:35:12 some method that are compulsory lead to there you can make those methods are abstract as well in
3:35:16 case you want to give them some feature by default by giving them the methods you can go ahead and do
3:35:20 that these classes can actually overwrite these methods as well but if you want them that hey
3:35:24 this should be like this only always then use the abstract method so I hope you got this one
3:35:29 pretty interesting discussion about the abstract classes I hope you have enjoyed this if you
3:35:33 have enjoyed this hit the subscribe button and I'm going to catch you up in the next video hey
3:35:37 there everyone they share back again with another video and in this video we're continuing our
3:35:41 typescript series and we are moving ahead on to one of the another really important topic which
3:35:46 is known as generics I personally love generics when I'm writing a lot of production level code because
3:35:52 generics is one such things which makes your components reusable and by the time component I mean
3:35:57 to say all of your functions even your arrays are generics behind the scene so it is really important
3:36:03 that you understand also it is also important that you don't pick up the word whenever I say
3:36:07 component it doesn't means it always have to be a react component or tailwind component component
3:36:12 is a broader term it simply means there is a chunk of something it can be a tailwind chunk it can
3:36:18 be a reaction it can be just a function so understand that point now let's go ahead and move forward
3:36:23 into understanding the generics I'll first walk you through with the documentation part because it's
3:36:27 important that we all learn how to read the documentation and find out some of the example which
3:36:32 floats around all the web but these examples actually come from the documentation and after that
3:36:36 we'll understand a bit of the array and we'll design a couple of these generic methods and
3:36:41 we'll understand what kind of problem they're trying to solve so without a further deal let's go
3:36:46 ahead and move on to the documentation part so here I'm on to the web page of the typescript
3:36:52 where official documentation happens and on the left you can easily find the generics really
3:36:56 easy to find there is nothing much you can see just the type manipulation generics just there
3:37:01 so as we can see up here a generics are a major part and also notice the vocabulary that they
3:37:07 also use is building components that not only have well-defined and consistent APIs but are reusable
3:37:13 and again API is something that you can ignore right now which is just an example they're trying
3:37:18 to give here so component is something which is capable of doing something more than it was
3:37:23 original design and almost all languages have them C sharp Java so if there's a lot of languages
3:37:28 which actually support these generics a pretty common thing these days but it was such a ground
3:37:33 breaking at the earlier days now there's a nice example we'll recreate these examples but notice
3:37:38 here what they're trying to show you in these examples so it says without generics we would either
3:37:43 have to give identify identity function a specific type so what they're doing here is they have
3:37:48 created an identity function and they're providing an argument which is a type of number and which
3:37:54 also returns the number when you do a return of arg which is whatever you're passing into that
3:37:58 method it returns you the number so this is obvious we have been doing this but if we want to
3:38:04 design this function such a way that if it takes string it also returns a string so we have to
3:38:08 say that arg string then the return type is a string and when you return the string so we have to
3:38:13 define the function for each data type Julian string number and if you want to bypass that you
3:38:18 want to design a function such a way that whatever the data type you actually send it it also returns
3:38:23 that data type so one way or one common thing which comes to mind is always hey let's use any which
3:38:29 is not a good idea always it's such a breakthrough that you always want to get away from the things
3:38:34 using any here we can definitely use any but it actually removes some of the information from the
3:38:41 from the argument that you're passing for example I can accept any argument and return any
3:38:46 but what if I give you input as number and you return me back as a string it will still work so
3:38:51 this is not something that we want so in that case this type actually comes up which has these
3:38:57 angular brackets and this is something which denotes the generic type and there is a lot that we
3:39:03 can discuss about generic we'll come back onto the documentation a little bit later but right now
3:39:08 let's go ahead and open up VS code show here is my VS code and let's go ahead and create a new
3:39:15 file into the source and we're going to call this one as my generics dot TS of course and let's go
3:39:22 ahead and see that what kind of problem we are facing and how actually this problem is not really
3:39:27 big and already being solved by something so let's just say if I go ahead and create an array and
3:39:32 notice here there are a couple of ways how you can create array we have already seen it once but
3:39:36 this is a common way of creating array but we have also seen that you can go ahead and create an
3:39:40 array like this and then using these angular brackets you can mention that this array is going to
3:39:45 have a value number and we can store this into anything like for example this could be a score
3:39:51 of any game that you're playing so this is scored like this and not that there we go and we
3:39:57 have defined its type and now we can say that this is right now empty but eventually things will
3:40:02 come out into the definition so this is one of the way and again we can actually go ahead and
3:40:07 further improve it we can go ahead and design the arrays something like this so you get the idea
3:40:11 there is a string as well and we can go ahead and store this into let's just say we are going to
3:40:17 have some names so these values can be also like this so you get the idea that generics is not
3:40:24 something that we are designing in the language they are already in the language in fact most of
3:40:28 the language do support arrays with different numbers and different strings so yes this was
3:40:33 already existing there we just didn't talked about it now we're going to go ahead and talk about
3:40:37 it and we're going to design the method version by version so that we can reach there and understand
3:40:42 what is the use case of that so I'll keep them here so that you can have just for the reference
3:40:47 so let's use the same example we're going to have identity identity and we're going to call
3:40:53 this one as identity one because we're going to create multiple identities here so let's first
3:40:58 understand what is the challenge that let's just say I want to create an identity such that it accepts
3:41:03 either a number or maybe a Boolean as well so we have already seen that we can go ahead and do
3:41:08 this we can go ahead and define the type as let's just say Boolean is there and we can use this
3:41:13 or and we can go ahead and say you might be having a number as well and in the return type also
3:41:18 we can go ahead and say that we can have something like we are going to return a Boolean or that can
3:41:26 return as a number or a string whatever you like so this is perfectly valid code and I can go
3:41:31 ahead and say return a value now there's a lot of confusion here so if I go ahead and say return
3:41:37 well it can be either a number or it can either be a Boolean I can go ahead and do the check whether
3:41:42 the type of the value is Boolean then go ahead return a Boolean if the type of number is a
3:41:48 number go ahead return a number we have seen that kind of example in the past but this doesn't
3:41:53 actually cut through the problem that we are facing it doesn't work for a string surely we can
3:41:57 go ahead and use or and how many odds you are going to use there now we saw in the documentation
3:42:02 that we have identity to let's just say and here we saw that we can take a value and that can be
3:42:10 any which is really a horrible keyword it is therefore escaping some of the tricky situation
3:42:16 but it shouldn't be used much and we can go ahead and use any and we can go ahead and say I want
3:42:21 to return this value again the problem remains same TypeScript has no idea what the value is
3:42:29 comprised of and the definition or the information about the type is gone in this case so we can go
3:42:34 ahead and see that yeah this identity to is eat also not working so let's move on to the version
3:42:40 which actually is the topic so which is going to be identity three and in the identity three what
3:42:46 we are doing is we first go ahead and put angular bracket now this is super important for the syntax
3:42:52 and we go ahead and define a type here now once we define a type here into the identity three then
3:42:57 we can go ahead and take the parameter and this is a little bit weird syntax I'll give you on that
3:43:02 no escape from that part no sugar coating there and we can go ahead and say this value is going
3:43:08 to be of a certain type and the return is going to be also of type okay now interestingly what is
3:43:15 going to happen after this one is now you can go ahead and return and return this value now the
3:43:21 difference between the one where we say value of any is this could be anything and this also
3:43:27 could be anything so we can take any type of value return any type of value take number as input
3:43:32 return as a string not a big not a good idea now but when you say mention the type it actually
3:43:38 says hey this is almost like any I am ready to accept numbers I am ready to accept string whatever
3:43:44 you like so how is it different from any because once you actually pass on anything that value type
3:43:49 is logged yes for the reference or understanding purpose this is easier to understand so whenever
3:43:54 I give number as an input this is hey the number is the input type that is coming up so the value
3:44:00 you are accepting is going to be of number but the return type automatically becomes a number so
3:44:04 that is the advantage of using this for example if I go ahead and say hey I want to use identity
3:44:09 three and while the identity three I'm going to go ahead and pass on a number three here the notice
3:44:15 here as I say it says hey the value that you are giving me is three and it is going to return as
3:44:22 three value but if I go ahead and wrap this up as a string it automatically converts that hey you
3:44:27 are taking three as an input but I'll return you as three as a string so that is the advantage of
3:44:32 it if I go ahead and say hey this is going to be a fish then you go ahead and check it out by
3:44:36 hovering it says hey it is giving me a string I'll return you a string not only that you can go
3:44:41 ahead and say that hey I want to go ahead and give you a true value and it is going to give you
3:44:45 a boolean as a back so you are locking that value that is the most important aspect of it
3:44:50 and this is something that you're going to see less this function definition type like this
3:44:54 how most people like to define it is a bit of a shortcut one so I'm going to go ahead and say hey
3:44:59 this is identity four and then you go ahead and see angular bracket a t capital version and then
3:45:05 whatever the parameter you take for example value you go ahead and define the type as t and then
3:45:10 the return type is also going to be t and we're going to go ahead and say hey let's just return a t
3:45:15 not t a valve there we go now this again is exactly same as line number 12 to 14 this is exactly
3:45:22 a replica of line number 18 to 20 the only difference is calling it as identity three or four
3:45:28 now this is shortcut it doesn't mean it always have to be types or t you can call it as simply
3:45:33 as h every places that's also totally valid but it needs to be referenced the same letter that
3:45:38 you're using or a word that you are using so this is really basic you're going to see them a lot
3:45:43 being there now the advantage of this identity four or something like this having this data type is
3:45:49 you can actually define your own types and can pass on into this one it's generic anything can
3:45:54 be passed on to it this one so for example let's just say we define an interface of this bottle
3:45:58 so we're going to go ahead and say hey bottle interface bottle there we go and your bottle can
3:46:06 have anything that you want for example it will it is going to have a brand which is going to be a
3:46:12 string and also let's just say type there are a lot of types of bottle this is a gym bottle so type
3:46:18 as gym and not gym actually this is again let's just say a number I don't know why the type should
3:46:24 be anything like that but this is it now you can go ahead and use this function exactly like this
3:46:29 so we can say hey I want to use identity four and I'm going to go ahead and pass you a type of
3:46:35 bottle so I can go ahead and say that hey just like I was able to use and pass on this three I can go
3:46:41 ahead and say I'll be using a bottle and then I'll pass you on you and object like that so this
3:46:47 is totally valid of course I'm not passing an object which is missing the parameters of bottle
3:46:51 and brand and type which you can actually do that if you're following around the series but this
3:46:56 is a way this is a syntax how I can pass on now the data types that we saw here are actually the
3:47:01 default ones like the old fashioned numbers a string you can directly pass on them but if you are
3:47:08 trying to create your own then you have to use this syntax this is really little bit weird but yeah
3:47:13 eventually you'll get a get a hold of it and this is so as you can see genetics actually solves a
3:47:19 great deal and is really reusable and we can use them a lot let's go back up here onto the documentation
3:47:25 so this is exactly what they have mentioned in the documentation that you can have the identity
3:47:29 and can pass on my string up here and working with the generic type variables this is how they
3:47:34 actually go ahead and work on with that we have already gone through with these and we'll definitely
3:47:38 discuss a little bit more about the generic but to be honest this is only the meat part of generic
3:47:44 as you work through with the react or angular you'll find that we use them a lot and sometimes
3:47:48 methods are defined this way so let's keep this short I hope you have understood the basic core
3:47:52 concept why genetics exist and how we can use them and let's go ahead and catch up in next video
3:47:58 hey there everyone face here back again with another video and in this video I would like to
3:48:02 discuss and extend the discussion about the generics in the type square now generics are really
3:48:08 simple but for a beginner who have never seen them especially in the type script the syntax with
3:48:13 different data types can be little bit confusing especially when it comes to array and how the array
3:48:17 return type works so I would like to bring you on to the documentation of type script we'll give you
3:48:22 some reference example from here and then we'll move on to the code part and we'll walk you through
3:48:26 that how the arrays works as well as a small brief introduction about how the arrow functions can
3:48:32 be used so far we have been creating functions in the type script just using the function keyword but
3:48:36 that's not all you can actually go ahead and use your arrow functions and I'll show you the
3:48:40 syntax for that in case for those people who are confused about it so moving back on to the
3:48:45 documentation we opened it up in the last video as well we see that just above here we can see that
3:48:51 this is all what we have discussed that the property length and all of that so this is all good
3:48:55 now here the examples in the documentation are referring that you cannot just use a dot length on
3:49:00 any of the parameter because it's not a guarantee that it's always going to be an array it could be
3:49:05 string it could be just a number and on number we don't have the property of dot length so this is
3:49:09 all what it is saying an interesting part comes up here on this part where we are taking input
3:49:14 parameter as an array so this is one type how you can take input parameter as an array and this is
3:49:20 also at type how you can take input parameter now both of them are exactly same we have seen that
3:49:24 in the last video that there are a couple of ways how we can define arrays and the second one
3:49:29 is also a type and the first one is also a type but when you actually go ahead and try to build
3:49:34 this it can be a little bit confusing at some of the situation let me walk you through with
3:49:38 so let me take you to the code part and we are going to define the almost exactly same this
3:49:42 example up here so let me move to the code part all right so first what we're going to do is we're
3:49:47 going to learn that how we can create or take an input as an array and what could be the possible
3:49:52 cases of when we are returning some values so let's just say we're going to create a method which
3:49:57 says get search products any you're searching a product doing an API call and through that
3:50:04 things are coming in so we are going to define this as a generic so obviously this is the first
3:50:09 part of how you define generic this is a template this is how you write it just like you write
3:50:14 arrays with the square brackets this is how you define genetics so far we haven't defined what
3:50:18 types of input we are taking what type of return type we are taking this is just basics this is
3:50:23 how you define it with an angular bracket and t then comes up is the parenthesis and in this you
3:50:28 define that what data type you're expecting in this one so let's just say somebody is giving us
3:50:32 a product or a list of IDs whatever you want to take that's that's sort of just a generic name
3:50:38 and then I'm going to go ahead and say that hey I am taking t as an input but this is not an
3:50:42 ordinary input I'm taking array as an input now if I go back on to the documentation part we have
3:50:47 seen that this is how you take types as an array but I can also go ahead and use this array type as
3:50:51 well so both are exactly same now here's the interesting part the return type is also t and
3:50:57 let's go ahead and try to return something now there could be a many cases that what you want to
3:51:01 return maybe this is a search result you want to return the search index so in that case I would
3:51:06 love to return a three which is not correct in this case because remember I told you this
3:51:11 actually locks the value whatever the value are taking as an input so if I return that same type
3:51:17 of value as an output this is not correct if you want to do something like this you obviously
3:51:21 should have done something like the return value is going to be number which is an index but in
3:51:25 the case where you want to have the t then you have to return the product itself and again remember
3:51:30 this is an array so I have to say that hey whatever the products are coming up into that one value
3:51:36 should be there there could be now three value so you're returning the third index which is fourth
3:51:41 value so this is totally valid and totally fine but remember you have to think from a broader
3:51:46 perspective this could be easier for a lot of experience programmer but this could be little tricky
3:51:51 for somebody who is just getting started with types kids so remember the return type is the value
3:51:56 that you're taking is an array of t types so the return value here I'm mentioning is t so that
3:52:01 should be one of the value from that array okay got it okay let's go ahead and make this a little
3:52:07 bit better so what we're going to do is we do some do some database operations and then we go ahead
3:52:16 and define a value so we go ahead and say my index is three maybe after returning a lot of
3:52:22 complex operations a method calling this comes up so we go ahead and call this one as my index so
3:52:27 you get the idea how this is being designed so this part is all clear now how we can convert
3:52:32 this exact same function into an arrow function because this is where the syntax comes up and this
3:52:37 is where when you see or read other people's code on the GitHub you might find some things confusing
3:52:43 so let's go ahead and clear that up so what we're going to do is we're going to call this one
3:52:47 as simply const and we're going to call this one as get more mode get more search products yes you
3:52:58 can pick up any name that you like now here we go ahead and define this so what is the syntax
3:53:03 for defining a generics in a arrow function method it's really simple you first go ahead and
3:53:07 define your t just like this remember this is an indication that this is going to come up as a
3:53:12 generic so just like here we did the generic this is exactly what we do here after that we put a
3:53:18 parenthesis any arguments are there or not then we provide a return type and then we go ahead and
3:53:23 write our definition so before the definition this goes like this there we go so this is the basic
3:53:28 syntax of how we define the arrow function this is little bit new otherwise if I go ahead and
3:53:34 remove this this is a classic arrow function we have seen this many many times so in this case we
3:53:39 are going to go ahead and say that hey this is a generic arrow method this is where we take the
3:53:43 reference and after the colon we define the data type and then we go ahead and put an arrow
3:53:48 function and the definition really simple nothing much so here also we want to define exactly same
3:53:53 so we're going to go ahead and say hey products and we want to take products as an array so this
3:53:58 can be of any type of array and the return type is going to be t it could be number but in this
3:54:04 case I want to replicate the exact examples so we go ahead and do that we go ahead and say do
3:54:10 some database operations and then we go ahead and say my index and this time the index is going
3:54:20 to be let's just say four we are we are feeling very creative there and we go ahead and say return
3:54:25 and then we go ahead and say hey products this time we're going to be returning my index again
3:54:31 so get the idea this is easier but you have to look through the big picture up here so again
3:54:35 if I go ahead and remove this one this is a regular function it could take numbers so I can go
3:54:40 ahead and say hey this is numbers array and I'm going to return a number obviously I have to tweak
3:54:46 the definition according to that but you get the point at how this is being done so really simple
3:54:51 you have to look through the genetics as like yes this is also a data type and this which is a
3:54:56 strange looking thing is a syntactical sugar okay so this is the basics what they have tried to
3:55:01 define and once you are taking the input as an array then obviously through the arguments you can
3:55:05 use the array properties which are available to them like length and all these things so further
3:55:09 down we have generic types as well so they also walk you through that how you can create generic
3:55:14 types which we've already seen and all of that so we'll talk about that a little bit later but
3:55:18 this is the most important thing now one last thing before we close this video you're going to see
3:55:23 a lot of code bases like this and this is not going to produce any error now this comma is there
3:55:29 to mention that this is not an ordinary tag like h1 tag or a p tag this is a generic and this is
3:55:35 a common syntax you're going to find this a lot especially people who are working with react
3:55:39 they like to use these generics and they put this a comma here to mention that this is not a
3:55:44 JSX syntax but rather a syntax for generic so keep that in mind you'll see this comma quite a lot
3:55:50 in the code basis if you're reading other people's code so that's it for this video if you're enjoying
3:55:55 this series hit that subscribe share the series this is really important when the value content
3:55:59 comes up we need motivation that people are sharing the entire playlist and series so that we can
3:56:03 come up with more that's it for this one let's catch up in next one hey there everyone
3:56:08 if I share back again the other video and this is one more video in the generic topic now yes generic
3:56:15 is a bit longer off at topic as well as it is being used a lot and kind of a new for a lot of
3:56:20 JavaScript developers that's why I'm taking my time to explain this all in depth and we can find
3:56:25 out all the nuisance that it can probably create while understanding it if you're watching this
3:56:30 video directly go ahead and watch last two videos because that are foundational base of the generics
3:56:36 this video will not make much more sense if you haven't watched them so moving further so we
3:56:41 have a small topic remaining up which is definitely one of the major one is classes that we are
3:56:45 going to cover in this video but we'll cover more over the syntax part of it and some of the use
3:56:50 cases of it but rather one more part that is being shown up here let me walk you through with the
3:56:54 documentation it says using the type parameters in generic constraint this is something really
3:56:59 important you need to understand the mindset behind this instead of just focusing on the syntax
3:57:04 or memorizing it or something just understand why does it actually belong here on the very first
3:57:09 place so let's try to understand the confusing documentation first and then I'll give you a
3:57:14 simpler and easier example on to this one so it says you can declare a type parameter that is
3:57:19 constrained by another type parameter okay got it for example we hear we'd like to get a
3:57:25 property from an object given its name we like to ensure that we are not accidentally grabbing a
3:57:30 property that doesn't exist on object so this time the developer is a little bit panning that I
3:57:35 really want to have objects and nothing which looks like object or is not an actual object so here
3:57:41 we say is get property and it's having a type and the key extends to the key of type so what this
3:57:49 is doing so we can actually use an extends keyword and you can make sure the extends allows you to
3:57:54 have a specific type of this one is this data as well now yes there could be a question that if
3:58:00 we are that much panic why can we just say that this value that is coming up we can mention the
3:58:05 type as object yeah actually you can do that there are a lot of ways of doing the things and this
3:58:10 is what makes people a lot of confusing so instead of going through with the confusing
3:58:14 documentation let me take you on to the code screen and show you that how this could be achieved
3:58:19 so coming back on to our first example that we discussed that we want to create something
3:58:23 like this where there is a function which takes two values that could be any values Boolean
3:58:28 number or anything we don't want to use this syntax so that's where generics actually helps us
3:58:33 so let's go ahead and say that this is another function feel free to name it anything much
3:58:41 better than what I'm trying to do up here but we want to create a generic this time we'll take
3:58:44 two inputs so you guessed it right this can be T and this could be you so UVN number of values
3:58:50 that you can provide us as many as you wish to have now further this this is my type where I'll
3:58:56 take the parameter and this is my return type so I'll say that what return type we want to have
3:59:01 a return type of maybe an object so I'll just say an object just like this so right now returning
3:59:09 not returning any object that is fine but important part is what I'm taking as an input so
3:59:14 this is my T as a generic and I'll take just you so right now I'm not doing anything and all I'm
3:59:21 doing here is I want to return this so how I'm returning this I'm going ahead say that this is
3:59:26 going to be my value once I'm going to go ahead and say val 1 which is of type T and I'm also
3:59:32 going to go ahead and say val 2 2 which is going to be of type you and at the time of return I'm
3:59:37 returning this object don't know why but I'm actually returning them both of them so value 1 separated
3:59:42 by comma and value 2 so this is something which is a syntax you have learned new that there could be
3:59:49 T there could be you there could be V as many as you would like to take as an input this is fine
3:59:55 but there is something in this that let's just say for example you want to use this method so
4:00:00 I'll just say that this is a function another function sorry this is another function and in the
4:00:08 another function I want to say that hey this could be 3 and this could be a 4 but in a string
4:00:14 format this is now expecting the values and it is taking them while you that's why the generic
4:00:19 values exist but there could be a situation where you can go ahead and say hey this is going to be
4:00:26 extends and we're going to go ahead and extend the number now it gives us a problem that hey
4:00:31 strings are not allowed this could be a number or any type of number if I go ahead and say that
4:00:36 hey this could be 3 or this could be 4.6 yes this is allowed because this is a number but again
4:00:42 this defeats the point of having the generic yes you agree I would agree on that part
4:00:47 but where this could be used first I hope you got this much and then I'll show you a real
4:00:51 world use case scenario where this extends actually matters a lot so I go ahead back on to the
4:00:56 documentation and I see that yes this is what exactly we are trying to do with the help of extends
4:01:00 keyword but this is a bit of a complex example so it's not easier to understand so this is exactly
4:01:06 I hope now by looking at this one you see that yeah this is making a little bit sense not much
4:01:11 maybe but this is making a little bit sense okay let's go back onto the code part and show you
4:01:16 something more interesting now let's just say this method is defined and there is an interface
4:01:22 so let's define the interface let's call this one as database and this is a database interface
4:01:28 there is a connection string into it which is a type of string and string if I can write that
4:01:36 and there is also a username which is also a string there is also a password that is also a
4:01:43 string so maybe you're defining a custom method in which you want to take that you could be
4:01:48 anything but it should be a type of database so in that case you can actually rely that
4:01:54 hey anything could come up here or I want to define a generic which actually go ahead and say
4:02:00 extends database so in that ways you are although defining very generic but you are still
4:02:06 restricting it that it should be a type of database yes there could be another way of handling
4:02:11 this exact same situation but since time script offers us a lot of options I want to show you all
4:02:16 the options and now obviously I have to go up here provide an object this object needs to have all
4:02:20 the values like connection username and password you get the idea and yes you get also the idea
4:02:27 that we could have directly said that this value should be of type database that also exists
4:02:31 that can be there just wanted to show you couple of use cases maybe this might be useful in the
4:02:37 complex thing that you are designing so wanted to introduce you with all the situations okay now
4:02:42 there is one more thing up here which I wanted to first discuss in the documentation which is
4:02:45 the last topic we'll be discussing about generic surely there could be more but you can also
4:02:51 define class types in genetics so notice here they are creating a couple of functions here just like
4:02:57 that it's fine but there is a class here which says B keeper then there is a zookeeper then there
4:03:03 is a animal which B extends the animal there is a there's a lot of going on in this example
4:03:08 and what they're trying to do is create an instance and all of that so yeah a lot of stuff not
4:03:13 to really create example what they could have given in the classes and I'm pretty sure somebody might
4:03:18 have written a better log on to this one let me take you on to this one so here what we're going
4:03:22 to do is we're going to take an example of selling a courses and quizzes so these are two
4:03:27 sellable items that you can sell and you want to create a class in which there could be a quiz there
4:03:33 could be a course and you want to create some methods which work for both of them because both of
4:03:38 them are sellable so let's go ahead and try this out so let's just say there is an interface and
4:03:43 let's call this one as quiz now quiz is not that much complex it has a name which is a type of string
4:03:51 and maybe there is a type as well there are a lot of types of quiz a quizzes for IIT quizzes for
4:03:57 coding there could be a lot so this is one sellable there could be another interface where we could
4:04:03 have the course and course is a little bit more complex maybe there is a name obviously there is
4:04:10 also an author involved in the course just like books these days courses are authored and there
4:04:16 is also a subject don't know why but there is a subject in the course not in the quiz and now
4:04:22 you want to create a class which is not going to be one shot all it's not going to be class which
4:04:26 will solve all of your problems but there could be a case where I can create a class which can handle
4:04:32 some of these common cases let me show you by an example so I go ahead and say call this one as
4:04:38 a class which is going to be sellable sellable yeah if that is correct or as a spelling I want to take
4:04:46 that in this class I'm creating a genetic class the moment you see genetic function or anything like
4:04:51 that these square bra these angular brackets and the t or any keyword there is a sign that this
4:04:57 is a genetic class this is a genetic function and in that class you can take any type of values up
4:05:04 here for example I just go ahead and say hey I want to create a public card which is available to
4:05:09 everyone this is going to take the same type but an array of that and will initialize it with an
4:05:15 empty one you get you see where I'm going with this one so now I have this card which is a type of
4:05:22 t whatever the t I'm taking and it's an array of that so I'm not saying that this is going to be
4:05:28 a class which handles all the courses array or all the quizzes array or maybe later on you decide
4:05:33 to have bundles as well so whatever you are thinking it can actually go ahead and work on with
4:05:36 that now it's not a one-shot all but you can define some method like add to cart and this method
4:05:44 maybe may take a lot of products so we are going to call this one as products
4:05:51 products come on if I can write that and these products are going to be of type t you get the point
4:05:57 and now I'm going to add these products so I'll just say this dot cart dot push and inside that
4:06:06 we are pushing up this product so let's go ahead and say products or product would be better
4:06:12 product you get the idea so this is a generic class which can handle any type of object that you
4:06:19 can pass it on and can do operations on that remember in this class we are taking t as generic
4:06:24 here so it's not limited to just quiz and courses there could be more or you can design more
4:06:30 and I'm not with this you should take this statement that I'm not saying that this class is going
4:06:35 to be one rocket for all this is not a bullet this is not a silver bullet which will handle all
4:06:40 the cases but maybe maybe you can define certain classes which handles quizzes nicely certain
4:06:46 classes which handles courses nicely but there could be could be one of the genetic class which
4:06:51 might handle the common use cases in both of them and maybe also a future proof where you add more
4:06:57 products which are sellable can handle those things as well so yes it actually helps you to write
4:07:02 bigger code for a bigger projects in a much smoother way and much organized way so yes there's a
4:07:08 lot of things we have learned about genetics I hope you have enjoyed this one if you enjoyed this
4:07:12 hit that subscribe button and I'm going to surely catch you up in the next video hey there everyone
4:07:17 face here back again the other video and in this video we're going to take a little bit of a different
4:07:21 approach now whenever we are learning about programming or maybe building any stuff we usually
4:07:27 think about the topics as these are the problem this is how we are going to get solution for
4:07:31 example in the arrays we cannot store multiple values in variables so we use arrays in order to
4:07:37 loop through the values we use loops but there are some examples with which are business case
4:07:42 logics and there is no problem or solution kind of approach in them these are general cautionary
4:07:47 stuff that you should know about it and I'll walk you through with some of the documentation and
4:07:52 some of the use case example we'll be referencing directly from the documentation so that in case
4:07:57 you need further information you can refer to these documentation so without a further deal let's
4:08:02 go ahead and get started with that so we'll start with the typescript documentation directly from here
4:08:07 and here if you closely look at this we have almost covered a lot here in fact almost all chunk has
4:08:13 been covered the basics every day but there is also one thing known as narrowing this is marked here
4:08:19 because there's a key important difference and this is something which is useful quite a lot if you
4:08:23 click on this now this is where you try to narrow down what kind of a type or data type you are
4:08:31 having in your variable for example it could be number it could be string there could be lot more
4:08:37 the problem actually comes up is finding the type of the variable so let me just go ahead and show
4:08:43 you by clicking on the inspect and it's not a problem for type script it's actually a classic
4:08:48 JavaScript issues and yes even on their website also sometimes these stuff happens so nobody's
4:08:53 so if I go ahead and use of use this type of and I just go ahead and say I want to type of one I
4:08:58 know that this is a number if I go ahead and use a string I go ahead and it simply shows me that
4:09:05 this is a string the problem actually comes up when you try to give it an array so if I go ahead
4:09:09 and give it an array of numbers it gives me an object which can be little bit troublesome and
4:09:15 problematic in that matter of case now also you'll notice that this type of is actually challenging
4:09:21 in programming if you go ahead and use the empty string then also it gives you a string
4:09:26 but again the literal null values are also objects so yes there's a little bit trick involved
4:09:32 in the JavaScript and this is not something which is problem this is something that is the behavior
4:09:36 of JavaScript and you should be aware of it and why we are talking about this so much up here
4:09:41 let me show you with a code example that will actually make much more sense so in the detection
4:09:45 dot TS we are going to be learning about some of the cases where you might want to be extra cautious
4:09:50 and that's the whole video is all about so let's just go ahead and say hey this is my function
4:09:55 I'm going to go ahead and say detect types and type would be great and I'm saying that the value
4:10:02 comes up now this value could be a number or it could be a string now based on this if I go
4:10:10 ahead and say hey I want to return the val dot to a lower case I'm not allowed to do so because
4:10:20 right now there is no mechanism to 100% guarantee that this is an actual string where I can use this
4:10:26 method this could be any right now because it could be a number it could be a string so right now
4:10:31 the val is in kind of a state where it could be anything but again we can go ahead and write
4:10:37 cases in fact we have learned about these cases that I can go ahead and use the statement that if
4:10:42 the type of type of val is actually a number then I can go ahead or maybe let's just say we
4:10:52 are going to go ahead and stick with the same example if it is a string then I can go ahead and
4:10:57 say val dot to lower case so this is the value I want to use in this case this there is no problem
4:11:04 the problem actually starts to come that you have checked the type and you have also checked
4:11:08 you have said that hey this is going to return let's just say val dot value of there is not too
4:11:17 much of the number so but I can go ahead and say a plus 3 so this is also totally valid so right
4:11:22 now cannot be applied to a string because if it is here it should be number but still this is
4:11:28 saying that hey we haven't checked it so probably want to check it out we have to make a similar case
4:11:35 and we can go ahead and say return and then we can go ahead and say if this comes up here we can
4:11:42 go ahead and say val plus 3 this should be all good now it is returning so it will reach to this
4:11:47 point of code only and only the case when it is 100% sure it is number but there could be more
4:11:52 things there could be more things here checked for this one but what about the case where it could be
4:11:57 a number array so that is where the problem actually comes to start so I'll just not do it here
4:12:04 but this is not something where you have to keep on checking for each one of them you have to
4:12:08 be very cautious in writing the business case that there could be a number of arrays but we cannot
4:12:13 go ahead and check that as an array we have to check that as an object so this is the most important
4:12:17 case now there is also a similar case I'll just create another function and again these are all
4:12:22 cautionary tales so make sure you pay attention on the caution not what could be the solution there
4:12:28 could be a lot of business solution so for example this is a common case where we say provide ID
4:12:34 provide ID why are you having issues implementation is missing okay no problem
4:12:41 where somebody gives you an ID and that ID is a type of string and we go ahead and write the
4:12:48 definition and we go ahead and say that if the ID is there or not so this is a common example
4:12:56 where we want to find certain elements from the database and maybe there is no ID being provided
4:13:01 in that method so in that case this could be a string but this could also be a null and again
4:13:07 this is a cautionary tale so this is something that you might be doing quite a lot of time in your
4:13:12 regular code so you can go ahead and say if there is no ID that means it is null so in that case we can
4:13:18 go ahead and say something like a console log that says please provide ID and we can go ahead and
4:13:28 return the method here and if this is all good then we can go ahead and say that hey we did some
4:13:33 classic database operation and after that we are returning ID with two lower case or something
4:13:38 like that you get the idea that how this is being done now this is something not magical and this
4:13:43 is not something which is related to TypeScript this is a simple code that you have been writing
4:13:47 quite a lot in JavaScript but this is a code which is appreciated and even being highly considered
4:13:53 that you should be writing because here this could be null and this could be string the reason for
4:13:58 showing this is just like you're considering this as a null and you get extra cautious similar to
4:14:03 here you should be extra cautious about the data type that is multiple in the format so make sure
4:14:08 you treat null as anything like as a string or a number and you provide extra cautious here now
4:14:14 there's one great example in the documentation let me show you that so where is that example
4:14:20 and let me go ahead yeah here it is so notice here they give you a lot of similar example that it
4:14:26 could be string and numbers and whatnot and you could also use the type of and all these things
4:14:32 the thing which will catch your attention is notice they call this type of as a type guard so
4:14:36 yes another fancy name for interviews but it is nothing more than that if you'll read the entire
4:14:41 documentation which I have gone through line by line this is all they are saying just use the
4:14:45 type of for making an extra guard about what type of variable is coming up instead of calling it
4:14:50 as type of they call it as type guard another fancy name nothing more than that so this is all what
4:14:54 they have now they also provide this one example here which you should also attention and this is
4:14:59 all same JavaScript in case you watch my videos these are truthy values and falsey values they are
4:15:04 not literal false but they produce the result now there is this example here I would like to
4:15:09 actually borrow this example and we'll show you that so we'll copy this and we'll study this
4:15:15 example this is something really interesting everybody should pay attention to this one so don't
4:15:20 do this yes we are aware of that the notice here let's understand this example so it says print
4:15:26 all where strings could be a string could be a string array and could be null also so three cases
4:15:32 are there and we are checking that if the strings are there that means it is not null that means
4:15:37 yeah obviously so this case is being taken care of and if the type of the string is an object
4:15:42 when we just saw that array also results into as a type of object so okay that part is also covered
4:15:48 and we're looping through it so no big deal else if the type is just as a general string
4:15:54 then we just cancel log it and you might be saying yeah that's okay we have covered for the string
4:15:58 we have covered for the string as an array and we have covered for the null that's great
4:16:03 but what is the case that we haven't covered is an empty string and empty string is a little bit
4:16:09 cautionary thing notice here this is the empty string and these are truthy and falsey values so
4:16:14 this is exactly what they're mentioning here that the strings is truthy this at least prevents us
4:16:20 from the dread errors like this but we haven't covered all the cases we haven't covered where the
4:16:25 cases are that when the value is nothing and this is not gonna break our code but this is kind
4:16:31 of a business case where you should be covering the case if the string value is totally empty so this
4:16:35 is all they want to show you in the documentation again reading and understanding from the documentation
4:16:40 could be a little bit boring but this is what is going to make your foundation absolutely amazing
4:16:45 in the world of TypeScript there's a little bit more to this narrowing and there is nothing much
4:16:50 like too much you haven't seen anything this is just a general discussion in which I think you should
4:16:55 take part in it but in case this sounds boring to you welcome to the programming and reading from
4:17:00 the documentation so that's it for this video let's catch up in the next one hey there everyone
4:17:05 they share back again with another video and in this video we're still continuing the topic of
4:17:09 type narrowing still in our TypeScript series and as we saw in the last video there are a couple of
4:17:14 ways how we can specifically find the types but there are a couple of use cases mention in the
4:17:18 documentation which are specifically meant for the flow that you actually follow in the TypeScript
4:17:24 let me walk you through because the documentation has one such great example so we are still in the
4:17:29 narrowing which we studied in the last video so you can see there is an equality of narrowing there's
4:17:34 an inoperator narrowing and quite bunch of them now this inoperator is not something which is
4:17:39 exclusive to TypeScript only it's easily available in TypeScript as well in fact we use this quite a
4:17:44 lot now they mentioned this quite a number of times that the inoperator TypeScript take this into
4:17:50 account as a way to narrow down the potential type and we can use this not just with the basics of
4:17:56 objects because in the all JavaScript example you're going to see that this is being used to find
4:18:01 out whether that property or key value pair in the key is available in that object or not so this
4:18:06 is usually the use case we go ahead and check this out if swim in animals so we can see that this
4:18:11 if it is available in animal or not but I'll give you a more better example that is actually make
4:18:17 that makes sense in the TypeScript for example so let me show you as a really simple interface if
4:18:23 you're working in TypeScript you'll be using like hundreds of interface left and right let's just
4:18:28 say we have an interface of user and the user obviously is going to have a name and then you are
4:18:34 also going to have an email which is also going to be a string all right this is a really basic
4:18:39 interface then we go ahead and create another interface and this is admin interface now we also
4:18:46 know that admin interface is almost same as the user it has a name it has an email which is also
4:18:52 going to be a string but it has another Boolean property which is admin which is a simple Boolean
4:19:00 now this is really basic and somehow you're creating a function so let's just say there is a
4:19:05 function and you check out whether is admin or not now in this case let's just say a value is
4:19:11 being passed on or an account is being passed on and you know that this account can be of type
4:19:16 user or can be of type admin so there could be both of them and now all you got to do is check this
4:19:25 whether this is admin or not now this is something really really tricky as of now because I cannot
4:19:31 go ahead and say that hey this account if it is having a property of dot is admin it's not going
4:19:38 to allow me to return this I cannot go ahead and go ahead and say hey return this because right now
4:19:44 it says a property is admin doesn't exist on user it only exists on admin so I have to make sure
4:19:50 that hundred percent this is admin and if this is admin I can actually verify that using pretty
4:19:56 easily by the same operator we studied here so let me walk you through so notice here the in
4:20:02 operator it actually helps you to narrow down which interface it is it could be used for
4:20:08 the regular objects as well but in the world of typescript you're going to see that this is
4:20:12 more use case scenario for such interface let me walk you through with the code remaining the
4:20:16 code I'm pretty sure you have already walked through with that which is really simple so I can go
4:20:20 ahead and check whether this is admin which is a property only available in that so I can just
4:20:27 go ahead and say in and I can check whether is the same is admin is available in the admin so I'm
4:20:34 going to go ahead and say admin is in account so there we go if this property exist in this account
4:20:47 then only we are going to go ahead and say return and we're going to go ahead and say is admin so
4:20:53 this is going to return us the property if it is true or not and all of that and we cannot
4:20:58 actually go ahead and append that account dot is admin that would be better okay and otherwise
4:21:05 we can return just a false so this is a much better code and if it has reached here notice here
4:21:10 the account automatically changes that it is 100% admin because we're going to only follow or fall
4:21:16 through into this if if a statement only because of this in statement which actually verifies whether
4:21:22 this property and remember I should actually change this name here is admin or is admin account
4:21:32 something would be better because otherwise it would be really confusing okay so this is a function
4:21:37 which says is admin account and the account comes up as an interface and this could be any type
4:21:42 of interface can be a user could be an admin and we are narrowing it using the in property and
4:21:49 there is nothing too much to discuss there and if we are 100% narrowing it then we are making sure
4:21:54 because this property is admin only exists if the interface type is a fragment so this actually
4:21:59 validates and further boils down and narrows down the things on to that so let me walk you through
4:22:04 so this is exactly what the examples are saying up the example that we have taken up is much more
4:22:09 precise and clear but that's it that's all it is there to discuss about the in operator narrowing
4:22:16 let's catch up in the next video hey did everyone wish here back again with another video and in
4:22:20 this video we're going to be talking about the two more topics which are again belongs to the
4:22:25 same category of type narrowing and the first one is easy the second one takes a couple of minutes
4:22:31 to actually adjust but it's also easy not to worry I'm here everything is going to be easy so not
4:22:36 to worry on that part I hope you're enjoying the series if yours do share it up with all of your
4:22:40 friends and hit that subscribe in case you want to okay let's go ahead and talk about the two more
4:22:45 type of how we can narrow down the type this entire portion of the series is about how we can
4:22:50 go into the more preciseness of the type so that we can take better action and that's what the
4:22:55 type script is all about getting the types all narrowed down so let me walk you through with the
4:23:00 documentation again and these all examples that we'll be talking through some portion of these
4:23:05 examples come from the documentation but I have modified them a little bit for the easier
4:23:09 understanding but yes the source is always documentation so the next in the line is the
4:23:14 instance of so this is how further down you can narrow down the things and they just do mention
4:23:19 the prototype and all of that but the idea is the focus of your attention should be on anything
4:23:25 that is or that can be constructed with the new keyword that's where this instance of actually
4:23:31 comes into the picture so this is a common keyword it's something that is obviously there so you
4:23:37 can just go ahead and check out anything is X is an instant of date so anything just you can
4:23:43 use new keyword like we create a lot of classes we can also create arrays with the new keyword we
4:23:48 can create objects with the new keyword all of that that can be find out I'll just borrow this code
4:23:53 into the codeator so I can just show you a little bit more so we have gone through with this one
4:23:57 so this is an instance of now again in the value they say is hey this is a parameter and all that
4:24:02 will just get rid of that because we don't need this parameter we don't need this part let's
4:24:08 let's adjust this code a little bit so it's easier to understand and there we go all right so what
4:24:17 this function is doing it's a log value now notice here this X can be a date or can be a string so
4:24:22 how can we find a date because remember date can be easily created any type of variable can be
4:24:28 created just by saying new and then we create a date just like that a new date is being created
4:24:32 similar to that you can actually go ahead and create an array like this so anything that uses this
4:24:37 queue new keyword is there and this keyword instance of is almost like not literally but almost
4:24:45 like type of type of checks you for the default types instance of check you whether this object
4:24:50 was an instance of some class or maybe some something like that so here we checked whether the
4:24:57 X is an instance of date so it just returns a true if that returns a true we are able to further
4:25:03 narrow it down now notice here if I come up here we are 100 percent sure that X is going to be
4:25:08 date in this case and in the other case it's going to be string so yes this is also a valuable
4:25:13 keyword where the type of doesn't really cut through there you can check whether this is
4:25:17 instance of and again remember from the docs it can only be used where there is a new keyword that
4:25:23 there is a potential of having a new keyword so this is easy part now coming up one of the part
4:25:27 which is little bit tricky which is the type predicates okay this is where TypeScript has
4:25:34 nothing to do it's a bit of a logical flaw not flaw I wouldn't say but a logical kind of a flow
4:25:41 that goes through and which sometimes matches and it introduces a new set of keyword let me show
4:25:45 you and again we are going to be using the same example that is given up here pet fish and all of
4:25:49 that so we'll just just going to literally line by line write this keyword but then we're only
4:25:55 going to write this much and then to understand it we are going to use our own functions okay but
4:26:01 first let's go ahead and use this one so we're going to go ahead and say function and this function
4:26:07 there we go and this function we're going to say get food there we go and before we actually go
4:26:14 ahead and define this get food and stuff we need to actually have a fish so again this is all
4:26:18 coming up from the documentation not making anything up so there we go so this is a fish and
4:26:23 we're defining a type of it which is going to be like this and we're going to say that hey you
4:26:28 are going to have a method of swim and this is going to be a method like that this is not going to
4:26:33 return anything so we're going to go ahead and say wide so this is really simple we're going to go
4:26:37 ahead and put a semicolon duplicate that this is not a fish this is a bird and bird don't swim
4:26:45 they actually fly so we're going to have a fly method now we have two types just like we had
4:26:49 interface we could have type again both the same values and based on this now we can use an
4:26:55 example that was given to us in documentation so we're going to go ahead and create a method which
4:26:59 says is fish so obviously just like we had method like is admin this is a method which is going
4:27:05 to validate whether the input value was given is a fish or not really simple it could be any
4:27:11 variable well whatever you want to say it could be either a fish or it could be a bird so these
4:27:17 are two values now what we want that this function should return us a true or false value now how
4:27:23 they do it in the documentation is a little bit of a typecasting pet as fish and all of that so let
4:27:28 me walk you through so what they do is first they say that pet let's cast this as fish so just
4:27:34 like that let's wrap this up inside a parenthesis once we actually do this then they try to check
4:27:40 the method so fish has a method of dot swim and if that method exists that means it cannot be
4:27:46 unidentified so we're going to say if that is not equal to undefined did I say unidentified
4:27:54 I mean to say undefined okay so what we're going to do is we're going to simply go ahead and
4:27:59 say return there all right so really simple yet a little bit more of the code that is involved but
4:28:05 here we are saying pet is a fish if it has a method of dot swim that is not undefined then true
4:28:11 it is a fish so that is exactly what they're doing and they're exactly saying like this but
4:28:15 things actually change a little bit so let's try to use this this much so far we have got the
4:28:20 code from the documentation but let's try to implement that so further down the road I try to
4:28:25 get some food for the fish so let's go ahead and get some food for the fish and I know that the
4:28:30 food is different for fish and for birds so pet is going to be type of either fish that might come
4:28:37 or it could be a bird all right now since I have the access of this method which is is fish I can
4:28:43 use an if-and-else condition here I can go ahead and simply say is fish which is a method available
4:28:49 to me and I can pass on this pet here okay so far no problem and if that is the case then here if I
4:28:55 go on to line 66 I'm 100% sure that whatever the value of the pet comes up that has already
4:29:01 being identified for true for the fish case now let's go ahead and say that if this is the case
4:29:07 then we're going to return as a fish food and if not then obviously it is a bird so we're going
4:29:15 to go ahead and return this is a bird food I don't know what to call a fish and but I'll also say
4:29:21 this pet here now in theory if we have defined it so well and we have done this so much this is
4:29:26 coming up directly from the documentation by the time we reach line 66 the pet should be identified
4:29:33 as truly as fish and on the line 69 it should be identified truly as bird but that is not the case
4:29:39 if I hover over this pet it is still confused type script is still confused whether this is a fish
4:29:45 or a bird here also goes same that it is a fish or a bird so still the value or the type of the
4:29:52 value is not being identified although it is not giving us any error it will still work as it
4:29:56 is fine but this method is truly not behaving because what this method is returning is a true
4:30:02 and false value which is a Boolean in the in the case so returning a Boolean that is fine notice
4:30:08 here it is returning a Boolean it is not returning me a type of fish or a bird okay so what does
4:30:15 the documentation says documentation says that you can use pet is fish so you can instead of
4:30:21 returning a Boolean you can use the syntax of pet is fish that means you are type costing it
4:30:27 as a particular type for example I can come up here since here on the line number 60 I'm 100
4:30:34 percent sure that if this returns as true then I'm sure the return type is fish and again you
4:30:40 have to use a colon here my bad there we go so this is a bit of a new syntax but now you get the idea
4:30:46 the true value returning Boolean is not going to cut through in this special case but if you go
4:30:51 ahead and return the type which could be fish or anything else in your case is now a guarantee
4:30:56 that we are returning truly not as true but actually as a fish when I come here now we are identifying
4:31:02 that we are returning a fish or we are returning a bird yes this is a little bit of a weird syntax
4:31:07 but this is fantastic how they have implemented it mind boggling but really really I absolutely
4:31:13 love that how they have defined it yes the documentation is also almost like that but I have just
4:31:19 tried to break it down this one is not so great explanatory I've just modified this example but
4:31:24 again everything is coming from the documentation we don't learn anything from elsewhere it's just
4:31:28 documentation so I hope you have enjoyed this one I'm super happy that you are hit that subscribe
4:31:33 button and let's catch up in the next one hey dear everyone face your back again with another
4:31:38 video and in this video we're going to talk about the final the final steps of the tight narrowing
4:31:44 now this final step is broken down into two steps the first one which is absolutely bad I don't
4:31:50 like it I don't appreciate it the second one is really something that makes sense so we're going
4:31:54 to refer to the documentation we will be using the code example from the documentation but I have
4:31:59 modified them again a little bit because it's easier when I am actually modifying them the code
4:32:05 that is written here it's making sense it's great but I can make it a little bit easier so why not
4:32:10 why do wait for it so let me walk you through that how this actually works so the two we are going
4:32:14 to talk about actually they are mentioned as three in the documentation but these are actually
4:32:18 just the two topping the first one is discriminated unions really mouthful and the second one is actually
4:32:24 in a mix the never type and exhaustive checkness they actually kind of make sense when you talk
4:32:28 about them together talking about them separately I was not going to make sense so let's first see
4:32:34 what is this discriminated union so they're making a lot of examples so notice here only thing you
4:32:39 should mention or notice here is that they are using shapes circles and square we are also going
4:32:45 to use that but not like this I have made a better example and then we are going to go through with
4:32:50 that I will take you back on to this never type in case you remember I briefly touched about the
4:32:55 types when we're discussing that yes there is a never type as well you'd never want to use that
4:32:59 this is the place where you want to use it but never want to be available to you in any code so
4:33:06 this is the point where we actually talk about them and then this exhaustive checking we will come
4:33:10 on to this exact same example almost same example up here so let's start with discriminated union just
4:33:15 forget about it even exists I'll show you the concept that is actually much better and let me
4:33:20 open a VS code here it is all right so this is all we can actually just talk about this in the
4:33:27 detection only so we're going to go ahead and get started so what this first discriminated union
4:33:32 really bad word what they are talking about is let's just say we have an interface we call this
4:33:37 one as circle and we actually kind of have find out that in order to use any other way we have
4:33:45 to actually know these interfaces well in advance for example in this interface I have to know all
4:33:51 the properties to find out whether it's a user or not I also need to be well aware of the properties
4:33:56 available in admin that there is an is admin so that I can check whether is in or instance off
4:34:01 or something like that so what they are saying in the documentation is you can mention a property
4:34:07 as the name as kind and you can name this as literal circle just like that and similarly you can
4:34:14 have an interface and we can have a square and here also you can mention the exact same property
4:34:20 and you can mention this as a square you get that where this is going on so have the property exact
4:34:26 same name in all of your interface and then you can check that whether this is dot kind of square
4:34:32 or dot kind of circle so not a big fan kind of a hacky way this could be a best practice at
4:34:38 the best but having them in the documentation that doesn't feel really good so let's continue
4:34:43 with this one so let's just say we are having this circle so obviously circle will have a radius
4:34:49 or radii whatever you like to call that that will be a number but in the case of square it will
4:34:55 have a side which will be a number now with this I would also like to declare another interface which
4:35:02 will be let's just call this one as rectangle rectangle there we go okay in the rectangle
4:35:09 obviously they mention that hey this is a good practice if you mention a kind of rectangle rectangle
4:35:16 there would be and rectangle will have two sides so let's call this one as length which will
4:35:23 be a number and will also have width which will also be a number so so far so good no problem at all
4:35:31 and yes we kind of forget it that we can have a mention of kind in each one of them by the way
4:35:37 it's not really compulsory that you say it kind you can say that a property find whatever makes
4:35:41 sense to you and that's that is it that is it my friend that is it your discriminated unions they
4:35:47 say that hey use the kind here the example here is actually a little bit shaky in this but you get
4:35:52 the idea with my example I think it's much more easier that you can have a kind for all of them so
4:35:57 yeah that's basically it that's your first topic yes and let's try to use this otherwise it will
4:36:02 not make much sense so let's just say we are having first let's have a type here otherwise what
4:36:07 we are going to check along so we're going to say that hey I am creating a shape that shape is going
4:36:14 to be either a circle or is going to be a square there we go now we can create a function we're
4:36:24 going to call this one as get true shape any arbitrary name is a good one here okay in this one
4:36:31 we're going to say that hey a shape is going to come in which is going to be of type shape just
4:36:36 like that and we can evaluate so the way how the first method says that you should be evaluating
4:36:42 is by simply taking this shape and we know that each of this shape is going to have a value of
4:36:48 kind and we can match it for anything for example I can match it for circle notice how well
4:36:54 the auto suggestion now comes up because of this kind which is kind of a good we can go ahead and
4:36:59 return a math dot pi so pi r square is the formula so we can go ahead and say shape now we are
4:37:10 very sure that this is actually shape is a circle so notice here and I can go ahead and find out
4:37:16 the radius and I can pi r square there we go so that's basically it and if this is not the case
4:37:24 then I'm sure that if I move to line number 97 then it is a square so I can go ahead and return
4:37:30 simply shape and notice here as I say dot it says side so side shape dot side whatever formula works
4:37:41 for you so this is the implementation of the first method that we have used but there's also one more
4:37:48 thing if you read the documentation this never type and exhaustive check so what does it do and
4:37:54 how does it work so the basic idea is let's just say you're creating a function and this one is
4:38:00 going to be get area and this also takes a shape which will be of type shape there we go
4:38:09 now the idea is you do exhaustive switch and case check for this one so you can use a statement
4:38:14 of switch yes that's available and I can just check the shape dot kind just like we do for the
4:38:20 ratings we build a lot of applications together in the courses so rating dot five star two star one
4:38:26 star all of that similar kind of a star so let's just say we have a case where this is a circle
4:38:32 so we can go ahead and say I want to return albados some code don't want to write this again
4:38:38 all right so there we go and this is it so we're going to go ahead and return this let's go
4:38:45 ahead and say I am having a case of square and this should be indented a bit
4:38:54 there we go and if that is the case I'm going to go ahead and return again we'll borrow a little
4:39:00 bit of the code copy this and paste it up here okay this is good this is fine but what
4:39:07 there could be some more cases so for example we are doing an exhaustive check here
4:39:12 and that is working absolutely fine because we are having only two cases now this next step is a
4:39:17 precautionary step for making sure that your code is future proof if you remember we defined a
4:39:23 rectangle as well but we only checked for square and circle but there could be a case in future
4:39:29 where now this is available for rectangle as well now this you can relate to something let's just
4:39:34 say you have defined you are working with the payment gateways for stripe or maybe a razor pay or
4:39:39 wherever you like now there are a couple of status in the payments maybe it has been captured it
4:39:44 has been refunded it has been initiated but there is also a payment status which later on was
4:39:50 introduced known as authorized you didn't worked out for that now you have created an interface
4:39:54 for it and you have make sure this is it now if you'll go up here you'll notice that hey what this
4:40:00 is this is obviously falling apart so this particular code is not working out and also on top of this
4:40:08 this here seems like we are working through it but there is now another thing another case where
4:40:13 we should be checking which we are not checking so I'm going to go ahead and come in this out for a
4:40:18 minute now this is working out but we need an extra case for this one let me show you what the
4:40:23 documentation says about it it says that you should always have a default case which should be
4:40:29 of type never on to whatever the shape you are defining and you should return that now since this
4:40:34 is made as a type of never which should never be used that is why this is important and
4:40:39 trivial to have this is known as the never type so yeah this is all exactly they are mentioning
4:40:44 up here so they are saying that hey you also have a case of defaults okay not case is actually
4:40:50 default there we go so in the default what we're going to do is we're going to create a constant it
4:40:56 could be any name so this could be default for shape it doesn't really mean this variable could
4:41:03 be anything because it's a type of never so technically it should never be used and we're going
4:41:08 to go ahead and define a shape on that and then we're going to go ahead and say return underscore
4:41:14 default for shape and why are you yelling it's not assignable to type never so that is exactly
4:41:20 why this is meant and right now this is giving me a problem because I'm not checking for all the
4:41:26 exhaustive cases and this is exactly what you want because if a new type or interface is being
4:41:32 defined and that is also being used you want your code to yell at you that hey you're doing
4:41:37 something wrong there should be something where you should be checking so for example if I come up
4:41:42 here and if I go ahead and do a check of the case now notice here I check for a rectangle case
4:41:47 and I return shape dot length multiplied by shape dot width and notice here now this code is not
4:42:00 running not acting and that is why the type never is never going to be assigned as a shape so that
4:42:06 is why it is all happy and yes this is all a good practice so this is what I liked the discriminator
4:42:11 type yeah okay but this never type is a really good check I can directly see the use cases not just
4:42:18 for the payment gateway but for a lot of variety of checks because code always keeps on evolving you
4:42:23 have new types keeps on coming new situations keep on coming and this makes me always happy that
4:42:29 there is a default method which should never supposed to be running instead of just relying hey it
4:42:34 will never run this is a nice checker I like this much so this is the end of all the values all
4:42:40 the narrowing down that we can have so all the important ones I have discussed more you have now
4:42:45 learned that how we can read from documentation so you can go ahead and do it so hit that subscribe
4:42:50 button and that's it for this one let's go ahead and catch up in next one hey there everyone
4:42:55 with this year back again with another video and welcome to the final official end of the type
4:43:00 script series it is very important that you start a series but is it it is equally important that
4:43:06 you end up a series as well start of the journey is important so is the end otherwise it's all
4:43:11 just a tutorial hell now you have enough knowledge with yourself with this type of series that you can
4:43:16 go ahead and implement type script in any production grade application or can start playing around
4:43:21 with that in react angular or anything like that if you have reached so far I'm pretty sure you
4:43:26 have learned this the type script is not associated with angular or react or anything else is just
4:43:32 is a strong sense of writing production grade JavaScript which is probably less error prone and
4:43:38 give you more strong types so that the chances of creating the errors are minimized that's all the
4:43:44 type script is now apart from this let me walk you through I have also added the GitHub repository
4:43:49 here on this so that anybody who is watching can actually go ahead and just learn this one
4:43:55 and this is the official page type script youtube 22 so this is entirely it probably I missed
4:44:02 typed it let me just go ahead and correct that so this is now it's all correct it was just showing
4:44:07 me half of that so this is all the link that you should have otherwise just go on to my GitHub
4:44:12 repository and you can just find it pretty easily it's super easy just go on to the repose and you
4:44:17 can search for it and you'll find it at the top all the source code are mentioned up here now with
4:44:22 this let me also mention this that there are probably a couple of topics that I might not have
4:44:28 covered might have slipped out here and there in the crack but the most important part is if you
4:44:33 have watched the concept of this entire series it was not just to teach about the type
4:44:37 script but also to introduce you how to learn from the documentation I have explicitly chosen
4:44:42 those example which are from the documentation so that you get an idea and sense of how to read
4:44:47 from documentation so that if some topic is missing you can directly go ahead and read from there
4:44:52 otherwise just let me know on my Instagram and I'm super active there and I'll try my best to
4:44:57 add those topics into this series if they are sounding a little tough for you but how long
4:45:02 you're going to be keep on asking for the videos go ahead and try it out on the documentation first
4:45:06 and if it doesn't work out let me know I'm always here to help you out with that now go ahead and
4:45:12 build some amazing stuff that is the most important part of brushing up your type script I'll try my
4:45:17 best in the future so that I can come up with some projects that include TypeScript and together we
4:45:22 can brush up some of our knowledge as well as I can teach you some of the production grade stuff
4:45:26 of how to use TypeScript this was all it was an amazing ride I learned a so much about the TypeScript
4:45:32 as well as bit more about the foundation of teaching as well as creating better thumbnails that
4:45:37 the one thing I learned from the entirety of the series now one small request from my side that
4:45:43 please go ahead if possible share the series the tutorial series where we teach something don't
4:45:48 get that much of attention we don't get that much of the views and again it's it takes a little
4:45:54 bit stress on the channel as well that we're pushing the series which are not taking much views so
4:45:58 your small share or from your colleague from your college friends in your watch tab group in your
4:46:03 discord channel in your telegram channel would be super helpful if that is possible from your side
4:46:09 otherwise fantastic series I learned a lot about it I hope you have enjoyed a lot in that keep
4:46:15 on supporting me I'll try to push more series like this and yes this was really fun thank you so
4:46:21 much and we're gonna surely catch up in another such series
