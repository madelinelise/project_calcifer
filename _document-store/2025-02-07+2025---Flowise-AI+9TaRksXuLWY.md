AI development used to look something
like this. But what if
I told you it could look
something like this instead? In this
Flow-wise Masterclass, I'm
going to show you how anyone,
yes, anyone, can build powerful AI-driven
solutions without
writing a single line of code.
Figuring out which AI platform to learn
can be overwhelming,
especially since there seems to be
a new tool released every single day.
That's why after helping thousands of
people build AI solutions,
I can confidently say Flow-wise AI stands
out. It's stable, reliable,
and lets you create powerful
AI apps without coding. So what is
Flow-wise? According to Flow-wise
themselves, they are an
open source, low-code tool for developers
to build customized LLM orchestration
flows and AI agents.
This is just a fancy way to say that you
can build pretty much
any AI-driven solution
using large-language models and agents
without needing to write
tons of code. And don't let the
spot about developers put you off though.
You can build incredible
solutions in Flow-wise without
needing to write any code. In fact,
there's no coding involved in
this entire tutorial at all.
Because Flow-wise uses nodes to create
the workflows, we can
easily swap out one node for
another. For instance, if you want to
change the LLM provider,
simply swap out the LLM node
for something else. Looking at their
GitHub repo, Flow-wise
currently has over 33,000 stars.
And if we have a look at this graph, we
can see the platform is constantly
growing in popularity.
And at the time of recording, Flow-wise
is currently on
version 2.2.3. And these guys
are constantly adding new features and
updates to the platform.
And personally, what I really
respect about Flow-wise is that their new
releases do not break the
old solutions. In fact, some of
my old chatbots that I built nearly two
years ago are still running
perfectly fine in production.
Now before we jump into the tutorial,
let's go over a few
housekeeping items. This course is
ideal for anyone. Whether you're new to
building AI applications or
whether you are experienced
in this field, we will cover the basics
of using Flow-wise, like setting up
Flow-wise on our local
machines or deploying it to a cloud
service. We will then learn
Flow-wise by creating eight
different projects in order to learn the
fundamentals of using
the platform. You will
be able to download all of these
workflows for free using the
link in the description of this
video. I am not sponsored by Flow-wise or
any of the platforms used
within this tutorial series.
So if you do find this video useful, then
you can support my channel by
hitting the subscribe button
and by liking and sharing this video.
Also, if you enjoy using
Flow-wise, then go over to their
GitHub repo and click the star button.
Right, it's finally time to
jump into Flow-wise. We can
access Flow-wise in one of three ways.
First, we can set up
Flow-wise to run locally on our own
machine. Alternatively, we can deploy
Flow-wise to a cloud
instance, like on Render or Railway.
Or we can sign up for the paid Flow-wise
cloud service, which will
cost you about $35 per month.
Let's have a look at each of these
options in detail. Let's have a look at
installing Flow-wise
on our own machines. And there are many
reasons why you would want to do this.
First, it means that
Flow-wise can run locally without an
internet connection. And this
also means you can run large
language models on your own machine,
which again is absolutely free, and you
are not sharing data
with any external systems. Thankfully,
this is super easy. The only
prerequisite is that you do
need Node.js installed on your machine.
So go over to nodejs.org
and then download the LTS
version of Node, and then simply go
through the setup process. After
installing Node, open up the
command prompt or terminal on your
machine and simply run "npx flow-wise
start". The first time
you run this command, you will be
prompted to install Flow-wise. Simply
enter "y" and press enter.
Because I've already installed Flow-wise,
I'm simply getting this
message saying Flow-wise is
listening on port 3000. This means you
can access Flow-wise in
your browser by going to
"localhost 3000", and you should be
presented with a dashboard like this. Now
let's have a look at
accessing Flow-wise from the cloud. This
means we can access Flow-wise from
anywhere in the world
using any web browser. And it also means
that we can integrate Flow-wise with
external applications
like WhatsApp or Telegram, or other
workflow builders like N8N or
Zapier. The easiest solution
is to sign up for Flow-wise cloud. This
is a paid service, and I
will show you how to sell those
Flow-wise after this section, but I do
want to show you Flow-wise
cloud as well. All you have to do
is go to "request access", and at the
time of recording, I think
there is a waitlist to join
Flow-wise. In order to skip the waitlist
and to support my channel, I
recommend using my affiliate
link in the description of this video.
That will take you to this
page where you can sign up using
GitHub or Google or your own email
address. This will give you access to a
14-day trial period.
This will give you access to Flow-wise
running on the Flow-wise
servers. I do want to mention
that this paid service does give you
access to additional features
which are not included in the
community version or the open source
version. That includes the ability to
create teams and invite
team members to collaborate with you on
your flows. Of course,
you also don't have to worry
about updating Flow-wise or scaling the
infrastructure as your
application and demands
grow. So at the very least, I do
recommend trying out the
free trial period of Flow-wise
if you are planning on making money with
these flows or building
these flows at enterprise level.
Finally, let's have a look at deploying
Flow-wise to our very own
cloud service. This option can be
cheaper than the official Flow-wise cloud
service, and in the
documentation you can see
all sorts of articles for deploying
Flow-wise to AWS, Azure, and
many other service providers.
I've personally used Render for my
Flow-wise instances, and
these instances I've been running
for nearly two years without any issues.
So for this tutorial, I will also
recommend going with
Render. So first, go over to render.com
and create your free
account. Then from your dashboard,
click on Add New, then Add a Web Service,
and from this page, you
will be asked to connect
to your GitHub repository. So go over to
GitHub.com and sign up for a free
account. Then in the
description of this video, you will find
a link to the Flow-wise repository on
GitHub. Open up this
page, then click on Fork, leave
everything on the default values, and
click on Create Fork.
This will create a copy of the Flow-wise
repository in your very own
namespace. So back in Render,
you should see an option to connect to
GitHub repo. So go ahead
and do that. And in the list
of repositories, select Flow-wise AI,
then click on Connect, then
give your web service a name.
And because I already have an instance of
Flow-wise deployed, I'll
just call this one Flow-wise AI
tutorial. In scrolling down, we can leave
the language as Docker,
leave the branch as main,
and then under the instance type. With a
free plan, your flows won't be persisted,
and you will lose all of your work when
the server is restarted.
So it might be perfect for
following along with this tutorial, but I
definitely recommend
upgrading to the starter
package if you do want to continue
working with Flow-wise. But for now,
we'll simply start with
the $7 per month package. Scrolling down,
we can also add
environment variables. For the first
variable, let's create a variable called
Flow-wise_username, and
let's set our username value.
I'll simply call mine admin. Let's add
another variable for the
Flow-wise password, and I'll
simply enter the password as password123.
I would suggest that
you use something way more
secure than this. Let's add a few more
variables. Let's set the
port as 3000. Let's add another
variable for the node version, which we
can set as 18.18.1. Now, the
following variables are not
needed if you are using the free plan,
but if you do want persisted
storage, in other words, you
don't want to lose your flows whenever
the server is restarted, we can go ahead
and add the following
variables. Let's set the API key path as
slash opt slash render slash dot
Flow-wise. Let's add another
variable for the database path, and this
is the exact same value as the API key
path. So I'll simply
copy this value, as we will be using it a
few more times. Let's add
another variable for the
log path, which will also set equal to
this value, but will also add
slash logs. Let's add one more
variable, and this is the secret path
with the value of opt render dot
Flow-wise. I know that was
tedious, but we are nearly done. All we
need to do now is to attach
the drive or the volume. Let's
go to advanced, then under disk, let's
click on add disk, and for the mount
path, we'll paste in
that same value that we used earlier, and
for the disk size, I'll simply go with
one gig, and believe
it or not, but we are done. Let's simply
click on deploy web service. The
deployment will take a few
minutes to complete, and we're now live.
Great, so all we have to do to access
Flow-wise is to click
on this URL, and we will be prompted for
a username and password, which we set as
admin and password 123,
and we can now access Flow-wise. So do
take note that if you self-host
Flow-wise, the responsibility
to keep Flow-wise up to date falls with
you, but thankfully that's super easy.
Flow-wise is constantly
adding new updates and fixes to their
main GitHub repo. This text
is currently saying that this
branch is up to date, but if you are
behind, it will say something in the
lines of this branch
is behind a certain amount of commits.
All you have to do in that
example is to click on sync fork,
and there will be a button here that will
allow you to update your
fork. In fact, let me show you
an example from another repo like this
N8N fork that I have. So this N8N
instance is sitting within
my own namespace, and here we can see
that this is actually 28
commits behind the main N8N repo.
So when I go to sync fork, I can simply
click on update branch. So now it's
saying that this branch
is up to date with the N8N master branch,
and if I go back to my
render dashboard, we can see that
my N8N instance is now being redeployed
with those new changes. For
the remainder of this tutorial,
I will be using a local instance of
Flow-wise. There is a bonus section
towards the end of the
course where we'll integrate Flow-wise
with Telegram, and for
that we won't need a cloud
instance of Flow-wise, but for everything
else we will be using the
local instance of Flow-wise.
But of course you can follow along using
the cloud instance as well.
Now before we create our very
first chat flow, let's have a look at the
Flow-wise UI. The first thing
I like to do after setting up
Flow-wise is to enable dark mode, as I
hate blinding myself or my
audience. On the left hand menu,
we have different options to create chat
flows, agent flows, and
assistants. We will cover each
of these options in the course, but in a
nutshell, we can use chat
flows to create things like
conversational chat bots, AI agents, or
assistants. With agent flows, we can take
it a step further by
creating flows that contain multiple
agents that can work together to solve
complex tasks. In the
assistance menu, we can easily create
assistants which contain
custom knowledge bases and tools
by effectively following a very simple
wizard. So most of the
work is done for you in the
background. Within Marketplace, we can
search for existing templates
that we can simply copy over
to our own namespace and change as we see
fit. So here we can see examples of
document QNI chat bots,
agentic rag, and a whole bunch of other
very cool examples. Of
course, we will be creating
everything from scratch. Within the tools
menu, we can create our very
own tools, or we can also go
to the marketplace and look for any
existing tools and then copy
these tools over to our own
namespace. Or if we click on create, we
can create our very own tools by writing
some JavaScript code.
Within the credentials menu, we can see
all the credentials that
we've stored in Flow-wise.
These will contain things like our
connection details, the OpenAI, or
Anthropic, or our vector
stores. So this is a very elegant
solution for maintaining all the
credentials in a centralized
place. We can also set global variables
within the variable menu,
and each of our Flows will have
access to these variables. Within the API
key menu, we can create and
view our API keys. Flow-wise
offers a massive list of APIs that you
can call from outside of the
platform in order to interact
with your Flows or even make changes to
your Flows. And in order to use those
APIs, you do need to
authenticate the API call with an API
key. Lastly, we can use the document
stores menu to create our
very own knowledge bases, and our AI
agents will have access to these document
stores. We will spend
a lot of time in this menu soon. Before
we create any of our chat
Flows, we need to decide on which
large language model we're going to use
for this tutorial course.
These large language models are
effectively the brains for these AI chat
Flows. Now, giving you
advice on what to use in this
tutorial can be very tricky, because I
know there will be those of you who are
not willing to spend
any money to use services like OpenAI or
Anthropic, and you would
prefer to use free services. So I
will give you some advice on those free
services and what to use
and what to avoid, but I'm
personally going to use OpenAI during the
course of the series. So
for those of you who would
prefer to use free models, this is what
you can do. If you're
running Flowwise locally, and you
have the hardware to do so, then you can
use something called Olama
to run open source models
directly on your machine. I have a
dedicated video on my channel discussing
how to set up Olama and
use it within Flowwise. So this is just
going to be a brief
explanation on how to do that, but if
you do get stuck, then check out that
video, which I will link in the
description of this video. But
in a nutshell, go to olama.com, download
Olama for your operating system, and
install it. Then you
can go to the models page and look up a
model like Lama 3.2, then
copy this command, open up
your command prompt or terminal, then
paste in that command and
press enter. This will download
the model, and afterwards you should be
able to test it by sending
a message. And this means we
can now use this model in our Flowwise
applications free of charge, and this is
completely local. If
you don't have the hardware to run those
models locally, then I
highly recommend using Grok.
This service is also free to use, and
this also allows you to run
open source models. To set this
up, go to grok.com and click on dev
console. From here, go to API keys,
create a new key, give it a
name like flowwise tutorial, click on
submit, copy this key,
and back in Flowwise, go to
credentials, click on add credential,
search for Grok, select Grok API, paste
in that key, and we can
just give this credential a name like
Grok API. And let's click on
add. But I do want to mention
that Grok does give you access to open
source models like Lama
3.3. Now I do want to mention
the caveats with using these free open
source models. The first
caveat is with Lama, and
specifically this Lama 3.2 model. Yes,
Lama also has support for
Lama 3.3. However, this is a
massive model, and it's about 43 gigs to
download. The chances are that the
majority of you will not
have the hardware to run this model. So
you will pretty much be limited to run
Lama 3.2 to 3 billion
parameter model. Most hardware will be
able to run this model.
These small models are more
than capable of handling things like
chatbots or very simple
agents. But once we start building
multi agent flows, you will run into
issues. For the multi agent flows, I
definitely recommend a
way more intelligent model like the Lama
3.3 model, in which case
you might want to use Grok
instead. However, Grok comes with its own
shortcomings. In
order for Grok to be free,
they have to enforce rate limiting. So
it's very possible that
your flow will just simply stop
working because you've technically hit
your rate limit. So as much
as people don't like yearning
this, I do recommend using a paid service
like Anthropic or OpenAI
for learning how to build
AI applications. It's just not worth it
in my opinion to try and get
some free model to function
as opposed to simply learning how to
build these applications
without all that friction.
So what I recommend you do is go to
platform.openai.com and
sign up for an account. You
will need to load some credit onto your
account. So all you have
to do is go to your profile,
click on billing, and then add some
credit to your account.
This can be as little as $5.
Then once you've added some credit, go
back to your
dashboard, click on API keys,
click on create new secret key. Let's
give it a name like Flow
Wise Tutorial. Let's click on
create secret key. Let's copy the key.
Then back in Flow Wise, let's add a
credential. Let's search
for OpenAI. It's based in the API key.
And let's give our
credential a name like OpenAI API. So
I'll show you how to get the Anthropic
API key as well. Go to anthropic.com
slash API and click on
start building. You can then sign into
your account or create
an account. And this might
have changed as well, but I think
Anthropic might give you
free credit. But if they don't,
simply click on your profile, click on
billing, and you can add
credit from the screen by
completing the setup. And as you can see,
I still have credit left
without having to complete my
setup process. So I suspect they do give
you free credit. And for
some reason, this credit
lasts a very long time. Once you have
some credit loaded, go back to your
dashboard, click on get
API keys, click on create key. Let's give
it a name like Flow Wise
Tutorial. Let's copy this key.
Then back in Flow Wise, let's add
credential. Let's search for Anthropic
API. It's based in that key.
And for the name, I'll just call it
Anthropic API. I suggest just picking one
of these. Maybe you can
start with Grok because it is free. And
the moment you run into
issues, consider signing up
for Anthropic, as I think they might give
you free credits. Or
alternatively, add some credit to your
OpenAI account and use your OpenAI models
instead. Now that we have a large
language model credential
setup, we can go ahead and build our very
first Flow Wise project. In
this project, we will create
a chat GPT clone. Let's go to chat flows.
At the moment, we
don't have any flows yet,
but we'll create a new one by clicking on
add new. And now we have
this empty canvas. The first
thing we need to do is to save this chat
flow and give it a name. In
this project, we will be building
a chat GPT clone. So let's call this chat
GPT clone. And let's save
this chat flow. We can add
new nodes to the canvas within this nodes
menu. On the bottom of the
screen, we have controls for
zooming in and out of the canvas or
fitting all the nodes within this view.
We can also lock the
canvas to prevent any nodes from being
accidentally moved around.
We also have this chat button,
which we can use to interact with our
chat flow. We can expand the
chat window by clicking on this
expand chat button. And now we have way
more real estate to work
with. We can clear the chat
at any time by clicking on clear chat.
And this will start a new
conversation. Of course, we can
also save our chat flow. Then under the
API endpoint menu, we get
all sorts of information
about sharing this chat flow with others
or integrating it into other
applications. We will
get back to this in detail a bit later.
We also have the settings
menu where we can view past
conversations. We can also export this
chat flow or load in an existing chat
flow. We can also get
our chat pod to collect leads on our
behalf. And if it does so, we can view
all the leads within
this menu. But let's get back to the
settings menu within a minute. Now, where
do we start? In flow wise,
all projects need to contain either
chains or agents. Now we will
have a look at agents a little
bit later, but for a very simple chat
pod, we can simply use a conversation
chain. Let's go to add
notes and here you will notice agents as
well as chains. We will get
back to agents a bit later,
but let's open up chains and let's see
what our options are. So if
we scroll down, we will find
this option here called the conversation
chain. Let's add this note
to the canvas. This note takes
in a few inputs and any input with this
red star means it's a
mandatory input. So we need to assign
a chat model, which is our large language
model. And we also have to
assign memory. Memory will
simply allow our chat pod to recall
information from past messages.
Optionally, we can assign a
chat prompt template and an input
moderation node. Let's actually start
with the memory node. Let's
go to add nodes. Then under memory, let's
add the buffer window memory
node and let's connect this
to our chain. With size, we can determine
how many previous messages
should be pulled into the
prompt. By default, the previous four
messages will be included, but I'll
increase this to something
like the previous 20 messages. You don't
want to make this value too
big because a long conversation
will start up using a lot of tokens and
drive up cost and it will
most probably reduce the quality
of the response. Now let's have a look at
chat models. For this
project, I will show you how
to use each of the providers that we
discussed earlier, but moving forward, I
will be using OpenAI.
And within chat models, we get access to
a whole bunch of service
providers like Anthropic,
and we also have access to chat Olama. We
also have OpenAI and
lastly, Grok. Let's start with
the Grok node. This attaches chat model
to a conversation chain. It's also
selected credentials
which we created earlier and for the
model name, let's select Loma
3.3, the 7 billion versatile
model and let's say the temperature is
something like 0.6. This is
just a value between 0 and 1,
0 meaning the model will be less creative
and 1 meaning the model will
have full creative control.
I prefer a value in between and I like to
stream back my responses as
well. Let's save this chat
flow, then in the chat window, let's test
this out by sending
something like hello. This was super
quick, but we already got our response
back from our large language model. Now
let's try a different
model. Since we've installed Olama and
downloaded the Loma 3.2
model, we can try this Olama node.
So let's attach this to our conversation
chain. We can leave the
base URL on the default value
and for the model name, I'll simply enter
Loma 3.2, the 3 billion
parameter model and again I'll
set the temperature to 0.6. In order to
get this model name, you can
simply open up your command
prompt or terminal and run Olama list and
this will show you all the
models that you downloaded
to your machine and all you have to do is
copy the model name and
paste it into this field. What's
nice about the Loma node though is that
you are also able to upload
images which is something that
we'll do in the next video. Let's save
this, let's give it a
spin. So in the chat window,
we're going to clear this chat and let's
enter hello and I'm
getting the response back from
Olama. Let's also have a look at
anthropic. So on the chat models, let's
go to chat anthropic,
let's attach this to our conversation
chain and let's select our anthropic
credentials. Under the
model name, we will be using Claude 3.5
Sonnet, the latest model. Let's again
change the temperature
to 0.6, let's save this flow and in the
chat, let's clear this chat
and let's send hello there
and we got our response back from
anthropic. And finally,
let's add openai by adding this
chat openai node and this is the node
that I'll be using throughout this
course. Let's select the
credentials. Yeah, I'll actually leave
this on GPT-40 Mini as this is a super
cheap model and it's
actually very intelligent. Let's change
the temperature to 0.6,
let's save this and in the
chat window, let's send our message
again, hello and we got our response
back. Now let's improve
this chat flow. Within the chain, we can
click on additional
parameters to change the system prompt.
We can use the system prompt to change
the behavior and persona
of the chatbot and we can
also specify additional things. But the
way I like to do this is
to start with a hashtag,
which is really a markup syntax for a
paragraph heading. Then we can call this
roll and below this we can enter
something like your name is Max, respond
with humor and emojis.
Let's save this, this goes to pop-up and
let's save the chat flow and watch this
response. We can say
something like what is your name and it's
telling us that its name is
Max and it is responding with
emojis. Let's test the memory as well. So
I'll enter my name is
Leon. It will say nice to meet
you Leon and now we can test the memory
by asking it what is my name and of
course it was able to
recall our name because we are including
the previous 20 messages in this
conversation context.
Speaking of conversations, Flow wise
allows us to view all the previous
conversations by going
to settings and view messages. On the
left hand side we can view all the
conversations and so far
we've only had one and do take note that
if you delete the
conversation like how we've been doing
so far those conversations will be
deleted from this list as well. Within
this conversation we
can view all the previous messages. So we
started with hello and we
can see the entire conversation
history. This can be very useful once you
deploy your chat flow to
production to view how people
are interacting with your flows and this
also allows you to fine
tune your flows and improve
the results. We can also ask users to
leave feedback and I
will show you how to enable
feedback in a second. It's close to
pop-up, let's go to messages, let's go to
configuration and here
we can set all sorts of things related to
our chat flow. We can enable
rate limits which will prevent
people from abusing our flow. We can also
set things like starter
prompts. So maybe we can do
something like tell me a joke and let's
add another one like summarize this
article or whatever else.
When we save this you will now notice in
the chat flow if I start a new chat we
now get those starter
messages. Very cool, let's go back to
configuration and let's go to follow-up
prompts. Let's enable
follow-up prompts and this will actually
use AI to generate
additional questions or follow-up
prompts. Therefore we need to specify a
provider. I'll select open AI and I'll
select my credentials.
For the model I'll just use GPT40 Mini
and we can leave the
prompt as is. Let's save this,
let's try this again. So let's say
something like why is the sky blue. Now
after this response we
get these suggestions for follow-up
prompts. Very cool. In the settings we
can actually do a lot of
very cool things like we can enable
speech to text which means you can use
your microphone to chat
with your application. We can also enable
chat feedback. In fact
let's enable this now and let's
go to save then I'm going to clear the
chat and in the chat window let's say
hello and now we have
the option to like or dislike a response
and whatever we choose
we are able to provide
additional feedback like this was not
what I expected. Let's submit this
feedback and now when
you go to view messages at the top we can
see the amount of feedback that we
received as well as the
positive feedback percentage. So far it
should be 0% because I
disliked that chat and in the
conversation itself we can see the
comment that the user left
for us. This is perfect for fine
tuning these conversations. Now we're
nearly done with configuration we can go
to analyze chat flow
to enable things like Langsmith so if you
do want to use tools like
Langsmith or Langfuse you are
able to provide your credentials and then
debug and analyze your
chat flows using these tools.
You can also get your chatbot to collect
lead information by
simply enabling this toggle and
this will allow you to effectively
instruct the model to collect the
following information from
the user their name their email address
and their phone number. Let's save this
let's clear the chat
and now before we can start chatting we
first have to provide our
name email address or phone
number and if the user provided that
information you can view it
in this view leads option menu.
Now finally we can also upload files to
our chatbot by clicking on
enable uploads so we can save
this and this means that now in the chat
window we have the ability to upload
files from our machine
for instance I'll upload this QA document
containing information
about my AI agency so
let's ask a question like what services
do you provide this
response is actually 100% correct.
So this is a super easy way to upload a
document and then ask the agent to
summarize it or extract
certain information from the document.
Now that we have the super
fancy chatbot how do we share it
with people well thankfully that's very
easy we can click on API
endpoint and Flow wise gives us
a lot of different options we can embed
this chatbot into any website and this
will show us a little
chat bubble of course you don't have to
build chatbots you can
also call this chat flow from
python or javascript and they also give
you the curl command so if
you are a developer you can
simply call this API endpoint and pass in
a message and that will stream back or
return your response
or if you feel lazy like me you can
simply go to share chatbot you
can click on make public then
copy this URL and you can simply share
that URL with anyone and
this will take them to this page
where they can interact with your chatbot
now because I'm running
flow wise on my own machine
this might not make a lot of sense but of
course if you are using flow
wise cloud this URL will be
publicly available you can also customize
the page by providing a
title you can change the avatar
images the welcome images you can set
colors the font sizes and a
lot lot more just remember to
click on save changes if you did change
anything if you made it
this far then definitely give
yourself a pat on the back you just
created a chat gpt clone within minutes
before we have a look
at building agents I do want to show you
another very common use
case of using chat flows this
project might not be the most fancy of
projects but this is a super
common use case of using large
language models and it's definitely a
skill that you need to
learn at some point you will be
expected to work with unstructured data
now that could be pretty much
anything it could be a simple
sentence or something complex like an
invoice for example this
example invoice that contains the
company information the client's details
the invoice items the
invoice number and the total
amounts so in your project you might be
expected to extract certain
information from a document
like this and that's very hard to do
using traditional coding
methods but thankfully large
language models are very good at making
sense of the content of
this document and by the way it
doesn't have to be a pdf document we can
upload images like
screenshots and jpeg images as well
and we can then ask the large language
model to extract certain
information but more importantly
is we do want to return that information
in a very specific format
let's have a look at how we can
build this back in flow wise let's create
a new chat flow and let's
call it invoice analyzer let's
save this and let's start by adding a new
node then under chains
let's add an allyl n chain
this chain takes in a large language
model we can also assign a prompt
template but more importantly
we can also assign an output parser so
it's this output parser that
will allow us to specify the
exact output in which we expect this
response let's start by assigning our
large language model
so let's go to chat models and i'll add
the chat openai node i'll select my
credentials i'm going
to leave it on gpt 40 mini i'll set the
temperature as something like 0.2 because
i don't want to give
this model too much creativity and let's
attach this to our chain as
i mentioned earlier we can
also upload images simply by enabling
this toggle but do take note that if you
do want to use image
uploads then you do need to select a
model with vision capabilities so for
openai that would be
the gpt 4 vision preview model i'll
simply disable this for now and now let's
add our prompt template
so under prompts let's add a prompt
template and let's also go ahead and
attach this prompt template
to our chain now we can use a prompt
template to provide additional
instructions to our model
it's almost like the system prompt on the
chat models now for the
prompt template we can actually
expand this and let's add some
instructions so let's have a
look at this from this invoice i
actually want to extract the invoice
number let's also extract
something like the customer number
and let's also extract a gross amount
including that so all we
have to do is say something like
extract the following information from
the provided invoice and
that would be the invoice
number it's also extract the customer
number and finally we can
also extract the gross amount
including that if we simply run this chat
with this information the
large language model actually
won't have a view of the invoice so in
order to include the
invoice content within this prompt
we need to use a variable let me show you
how that works so we
can say something like
invoice content and now we can inject any
content into this
prompt by using curly braces
and within these curly braces we can
enter any variable name like
invoice let's save this and
now let's click on format prompt values
now we can see that variable
name and we can assign a value
to this variable by clicking on edit when
we click on this box we can
now attach any value to this
variable like the user's question and
that's effectively the
question from the chat window
we can also assign the chat history and
what we're looking for is the file
attachment let's select
this option and let's close this pop-up
we can save this chat flow
and if we open the chat window
we won't see any option to upload a file
yet that is because we need to go to
settings configuration
file upload and let's enable file uploads
we can now save this close
the pop-up and now in the
chat window we do have the ability to
upload files so i'm going to
upload that pdf file example
and by the way any invoice will work you
can simply go on google
and just search for sample
invoice pdf now let's simply say
something like hello and it really
doesn't matter what we send
we simply want to trigger this chain and
in the response we get
the invoice number which
seems correct we get the customer number
as 12345 which also seems
correct and for the gross amount
including that it should be 45353 which
it is now the intent of
building these type of chains
is for this chain to be called from
outside or flow wise by some external
system to extract this
information and then that system can do
additional things like maybe
output this information in a
report or use it downstream so simply
returning freeform text like
this will not be very useful
but thankfully we can force that response
to be consistent by using
an output parser let's go to
add nodes then go to output parsers and
here we have a few options
we can return the response as
a csv output we can return it as a list a
structured output parser
or an advanced structured
output parser let's add the structured
output parser i'm going to
enable autofix as that seems
to give the best possible response then
within additional parameters
we can set the exact values
that we'd like to return so let's add a
new item and let's call this
first one invoice underscore
number which is off type number and for
the description we can
enter something like the
invoice number the large language model
will use this description
to figure out how to extract
that information from the document let's
add a new item let's call
this one customer number
which is also off type number and for the
description let's
enter the customer number
and finally let's add one more field
let's call this gross amount including
that and for the type
let's select number and in the
description let's say the gross amount
including that cool now let's
attach the output parser to our chain
like so let's save the flow
and in the chat window let's
upload our file let's say go we now
receive a json structure and these field
names will be consistent
every time we call the service and the
values follow the exact
types that we defined for example
the gross amount now simply returns the
amount itself without the
currency if we wanted to return
the currency as well we could simply go
to additional parameters
let's add amount currency
let's change the type to string and for
the description let's
enter the gross amount currency
let's save this let's run this again so
I'll clear the chat let's
upload the file and let's say go
and this time we also get the currency
back now these type of
flows can actually be incredibly
powerful you don't have to necessarily
extract information from an
invoice for this to make sense
you can use the same chain to build
sentiment analysis
workflows you can classify different
documents based on the content within
those documents etc now
it's time to move on to the
next project in this project we'll build
our very first AI agent
agents are super cool you can give
an agent a task and that agent will
reason the steps that it needs
to execute in order to achieve
that goal and some instructions might be
simple for example we
might ask an agent to go online
retrieve some data and give us a response
but agents can also execute
multiple steps for example
we might ask the agent to go online
retrieve data but then also
store the data in a database
this is without a doubt one of the most
important concepts to
understand in 2025 so in this project
we'll build our very first research agent
and before we build this
agent let me explain one
of the limitations we have with something
like chat gpt by using
our chat gpt clone if I ask
this large language model a question
about recent data it should
tell us that it actually doesn't
know it doesn't have up-to-date
information like what is the current
weather in New York and we
will get a response saying that the large
language model can't answer
our question because it can
only answer questions from its training
data now the benefit of
agents is that we can assign tools
that will assist the agent in achieving
its goal for example the ability to
search real-time data
online now enough talk let's create our
new chat flow let's give it
a name like research agent
and now instead of adding a chain to the
canvas we will now add an
agent and here we have a list
of different agents but the most commonly
used agent is the tool
agent so with the tool agent
we can assign tools of course but we can
also assign memory so that
we can have a conversation
with this agent and of course we need to
assign a chat model let's
start with the chat model then
under add notes let's go to chat models
and i'll assign the chat
openai model let's attach a chat
node to our agent i'll select my
credentials for the model name i'm
actually going to switch over
to gpt 4.0 and this is because agents are
slightly more complicated than simple
chat bots agents do a
lot of reasoning behind the scenes to
figure out which tasks need to be
executed in which sequence
and which tools should be called in order
to achieve this goal
therefore i do recommend
selecting an intelligent model for all
the projects going
forward i'll set the temperature
to 0.6 and let's also go ahead and add
our memory node so on the
memory let's select the buffer
window memory node let's attach it to our
agent and we'll change the
size to 20 messages now before
we add any tools let's save this flow
then in the chat window let's simply send
a message like hello
just to make sure everything is working
great now this agent still
won't be able to answer up to
date information for instance what is the
current date and time it
will tell us that it actually
doesn't know because we haven't assigned
any tools to a sister agent
yet so what we can do is go to
add nodes and under tools we get a list
of ready to use tools like
brave search api we've got a
calculator tool the chain tool which
allows us to create a chain within this
project and call that
as a tool or we can use the chat flow
tool to call other chat flows
as tools we can also execute
code using the code interpreter node and
a whole bunch of others
as an example let's add the
calculator tool so i'll simply drag it
onto the canvas it's attached to our
agent and if we save
this flow and ask our agent a math
question like what is 2000 times 20
divided by five what you'll
now notice is that we get this little
icon in the response and this indicates
that a tool was called
along with the tool name which is the
calculator tool in this instance by
clicking on this button
we can see the exact inputs that were
passed to that tool and the
tool output right now let's add
more tools to this agent let's add a tool
that will provide the
current date and time to our agent
now in the tool list you will notice that
there actually isn't a tool
available to get the current
date and time we could use a custom tool
so this node over here and
up will allow us to write
javascript code to get the current date
and time but we don't want to
write any code so what we'll
do instead is go to marketplace then
let's filter on tools and within this
list we get this tool
called get current date time so let's
click on this and if we scroll down we
can see the javascript
code for getting the current date and
time so let's click on use
template let's click on add
and if we go to the tools menu we can now
see that tool over here and
if we wanted to we could make
changes to this tool for example we might
want to change the time zone
to our time zone but for this
demo i'll simply leave it as is let's go
back to our chat flow
let's go to our research agent
then under add tools let's go to the tool
menu let's add the custom
tool and in this drop down
we can see our current date time tool
over here now let's simply
attach this to our agent under
tools and do take note you can assign
more than one tool to an agent let's save
this and let's ask it
what is the current date and time we can
see that tool was indeed
used giving us our current date
and time this research agent isn't very
useful at the moment
because if i ask it something like
what is openai-03 it actually doesn't
know because the 03 model was only
recently announced so what
we can do is add the ability for this
agent to go online to
retrieve up to date information let's
click on add notes let's go to tools and
let's add the SERP API tool
we can go ahead and attach
this to the agent as well and under
credentials let's click on
create new for the credential name
let's call this SERP API and for the API
key go to SERP API.com
then click on register or
sign into your account from the dashboard
copy this key and add it
to flow wise let's click on
add let's save this flow and believe it
or not our agent will now have the
ability to go online
to get up to date information for us so
let's ask it again what is
openai-03 and now we can see the
search tool was indeed called and the
search query was openai-03 along with the
tool output this answer
is correct and if you scroll down we also
get these citations you
now have a fully functional
research agent and of course you can make
this as complex as you want
by adding additional tools
just as a bonus tip if you are using
smaller open source models
and you're not getting very
good results so perhaps the agent isn't
selecting the right tool
you can improve the results by
going to additional parameters on the
agent and then providing
some additional instructions
for example when ask questions about math
use the calculator tool or perhaps if
you're ask questions
about recent events use the search tool
in this project we're going
to build an agent that has
access to a custom knowledge base now
this can have plenty of use
cases this could very simply
be a customer facing chatbot that can
answer questions about our
business or we can use it
internally to answer questions related to
our company's data and
dealing with custom knowledge
bases is one of flow wise's strengths
let's start by adding a new
chat flow and let's call this
customer support agent in this example i
want this agent to be able
to answer clients questions
related to my fictitious restaurant
called the oak and barrel i've simply
created this word document
containing all the common questions and
answers related to my
restaurant things like contact
information the current specials etc i
also created the csv document
containing all the menu items
along with their prices so what we want
to build here is an agent
that has access to these custom
documents and what we could do then is
simply grab this code snippet
and embed it into our website
and our customers can then interact with
this chatbot by clicking on this chat
window and then asking
questions about our business that means
we have a customer support
agent that's available 24 7
let's start by adding a new node let's
add an agent node and more
specifically we'll add the tool
agent as with the previous video we'll
simply add our chat model and for this
i'll add the chat open
ai model like so let's select our
credentials for the model i'll actually
just leave it on gpt 40
mini and for the temperature i'll lower
this to 0.6 let's also add
memory as we want our clients
to have full conversations with this
agent so under memory let's add the
buffer window memory
node we can attach it to our agent let's
change the size to 20 let's
change the system prompt of
the tool agent by clicking on additional
parameters and let's change
this to roll and let's say your
name is max you are a customer support
agent for a restaurant called oak and
barrel keep your answers
precise and use the knowledge base to
answer questions about
the restaurant that's all we
need for now now let's set up our
knowledge base let's go back to the
dashboard and let's go to
document stores we can use document
stores to effectively
create custom knowledge bases
this is a fantastic solution because we
can create a document store
over a year and these document
stores will be accessible to any of our
chat flows let's create a new document
store let's call this
oak and barrel let's add this let's open
this document store and
let's start attaching our
knowledge sources by clicking on add
document loader here we
have integration with a lot of
different applications and we can upload
things like csv files we can
use the cheerio web scraper
to extract information from websites but
what i need is the docx
file loader so i'll upload my
file and by the way all of the files will
be available in the link
in the description now if
i click on preview chunks this will
return all the contents in the document
within a single chunk
which is not ideal as an example let's
say the customer asks what
the current spatial are we
don't want to inject all of this content
into the prompt when asking
about spatial instead we only
want to retrieve the most relevant text
related to the spatial and
inject that into the prompt
so what we can do instead is split this
document up into smaller
chunks we can do that by going to
the text splitter and let's select the
recursive character text splitter i'll
leave the chunk size
on a thousand characters with the chunk
overlap of 200 now watch
what happens when we click on
preview now we've split this document
into five smaller chunks
let's click on process then let's
add one more additional loader this time
i'm going to use the csv
file loader to upload our menu
items for csv documents we actually don't
have to specify a text
splitter as each row in the
document will become its own chunk so
here we can see the fillet steak the
ribeye steaks t-bones
sirloin steaks etc let's click on process
and now we have these two
documents loaded into our
document store we're not done yet though
we've simply prepared this
data at this stage and now
the next step is to upsell this data into
a database so what we can
do is go to more actions
let's click on absurd old chunks and now
we have to configure this
document store so we have to
set things like the embeddings we have to
specify a vector store and
optionally we can specify a
record manager let's start with the
embeddings embeddings will
simply take the text from the
documents and convert it into vectors
it's a little bit
technical to explain in this video
but the step is necessary in order for
the vector store to figure
out what the most relevant
documents to the user's question is so as
the provider i'm going to
use open ai so i'll select
my credentials for the model name i'm
going to select text
embedding three small we don't have
to change any of these settings the text
from the documents along
with these embeddings will be
stored in a database called a vector
store so let's click on this
and flowwise as integration
with several vector store providers we
will use pinecone which is
free to use so let's create our
credentials let's give it a name like
pinecone api and for the api key go to
pinecone.io and sign
up or log into your account from here
let's create our database
by clicking on create index
give it a name like flowwise then under
dimensions we can
manually enter the dimensions
or select one of these templates we'll
use the text embedding three
small for the capacity mode
select serverless and i'll leave this on
aws let's click on create index then
let's click on api keys
let's create a new key let's call this
flowwise tutorial let's
create this key let's copy this key
and paste it into flowwise now for the
pinecone index name we can
simply give it the index name
which we called flowwise i do recommend
specifying a namespace because you can
reuse the same index
for all of your projects so for the
namespace i'll simply call this oak and
barrel we don't have to
change any other properties so what we
can do now is click on save config and
upsert we can now see
that 25 documents were added to our
vector database and if we go back to
pinecone and if we click on
flowwise we can indeed see that 25
documents were added and in the namespace
we can see that oak and
barrel was indeed created and on the
browser we can indeed view
each of those documents that were
upserted another great feature about
flowwise is that we can test the
retrieval at this stage by
clicking on test retrieval and let's ask
what are the specials and
these are the most relevant
documents that were returned from our
pinecone database and the very first
document very clearly
includes the specials we can also use the
screen for fine tuning the
results so if you find that
only returning four documents is not
enough we can easily change the top k
value to let's say eight
documents when we run this again we now
get eight documents back from the
database and if we feel
that this actually improves the results
we can simply save these
config changes i'll simply
change this back to four let's save the
config and let's go back to our
configuration so what
i do want to mention is if you do change
any of this data so let's
say we add an additional
document loader you do have to run the
upsert process again but
here's the issue when i click
on upsert although nothing has changed
you will notice that 25
documents were added again and if
i go to our database you will now notice
that we have 50 documents
this means that all those
documents were duplicated but this is not
ideal we only want to
upsert the new documents and that
is where record manager comes in the
record manager will keep
track of the documents that
we've already upserted and when we run
upsert again it will
compare our existing documents
to the new set of documents and only
insert the difference so to clear out
these existing records
in this database i'm simply going to go
to namespace and i'm going
to delete this oak and barrel
namespace and that will delete all the
documents linked to it so
now that we have a clean start
let's add a record manager and i highly
recommend using Postgres or MySQL for
this and i do have a
dedicated video taking you through the
process of setting up a
Postgres database and using it as a
record manager but to keep things simple
for this tutorial we'll
simply add the SQL lite record
manager we actually don't have to change
too much i do want to set
the namespace to be the same as
the namespace in our pinecone database
and i'll change the cleanup
method to full now let's save
this config let's run upsert and as
expected 25 documents were
added and if we run upsert again
we can see that 25 documents were skipped
this time if we go back to
our document store we can
delete entries as well so let's delete
this CSV file then under
actions let's click on upsert all
chunks let's click on upsert we can see
that five documents were skipped those
are the documents from
the Q&A doc but all the items in the CSV
file were actually deleted
so in our pinecone database
the amount of documents that have been
reduced to five documents i'm
just going to add the CSV file
back so i'll click on preview chunks
let's click on process let's run upsert
again our menu items
were added obviously five documents were
skipped great we now have a
custom knowledge base next
let's give our customer agent access to
this knowledge base so
back in chat flows let's open
up our customer support agent then under
tools let's add the
retriever tool let's attach this
retriever tool to our agent let's give
our tool a name like oak
and barrel for the description
let's enter returns documents related to
oak and barrel and the menu
then let's go to add nodes and
under vector stores let's add the
document store node we can attach this
document store to this
retriever tool and from the drop down
let's select oak and barrel
if you do not see your document
store in this list it simply means the
document store has not yet
been inserted into your database
that should be it let's test this out so
in the chat let's ask what
are your current specials
and indeed we get the correct response
back we can also see that
the retriever tool was called
and this was the response from our vector
store in some instances you
might want to cite the sources
of this information and show it to your
users what you can do is go
to your retriever tool and
enable return source documents so now
when we ask that same
question we get the source documents
along with their metadata so all that's
left now is to embed this
chatbot into our website by
clicking on this button then simply copy
the script and you can
add it to any website simply
by pasting in that script into the body
tag and if we have a look at
this simple web page we can
view this chat bubble and we can chat to
our chatbot so let's say hello let's ask
what are the current
specials and we get the correct answer
back which we probably
don't want to show in this case
i do want to mention that it is possible
to customize the look and
feel of this chat window
and the chat bubble and i have a complete
video going through this
process step by step along
with instructions on embedding this
chatbot into different types
of websites so definitely check
out that video as well this project is
actually going to be super quick and
that's why design in
the previous projects we created this
research assistant that has
access to a couple of tools
for instance search api that allows the
agent to go online and
retrieve real-time data we also
created this customer support agent which
has access to a custom
knowledge base now these are
such common scenarios that flowwise
created a super simple way
of setting all this up without
having to write code or even drag notes
onto a canvas let's go to
assistance let's click on
custom assistance let's create a new
assistant and let's give it a name like
oak and barrel support
now instead of building our agent in a
canvas we can simply fill
out a few fields on this form
and everything will be done for us let's
start by selecting our model
and for this we'll use chat
openai then i'm going to grab the same
system prompt that we used in our
customer support agent
so i'll just go back to this to replace
this prompt now watch how
easy it is to assign the
document store we simply select it from
this drop down and we can
then describe this knowledge base
by effectively copying the same retrieval
prompt that we used here
like so then for the ai model
we do have to specify our credentials we
also have to select our model
which i'll leave as gpt40 mini
let's change the temperature to 0.6 and
since we've now connected
our model we can actually
use this generate button to generate this
text for us so let's click
on this and now we've used
an allo m to clean up this description
scrolling down we can also
allow image uploads and set the
image resolution but what i'm interested
in is this tool section so
to add tools we can simply
click on add tool and select our tool
from the drop down let's
select the SERP API tool let's
select our credentials and if we wanted
to we could add more tools
let's save this assistant
and now when we scroll up we have this
preview window which we can
use to test this out as with
chat flows we can start click on api
endpoints and we get the
snippet to embed this assistant into
websites we can call it from python and
everything else making this a super
efficient way to build
assistance now let's move on to one of
the most important
features in flow wise and that is
agent flows with agent flows we can
create multi-agent
workflows this means we can add
multiple agents to the same flow and
these agents can work
together in a team or sequentially to
achieve a goal this is similar to
frameworks like crewai and autogen and
this is definitely a
growing area and it's definitely a skill
that you need to learn in
2025 and this is also where
flow wise shines we can create a new
agent flow by going to the
agent flows menu let's click on
add new and under nodes things will look
a little bit different
scrolling down you now have access
to this multi-agent menu or if you scroll
further down you also have
access to this sequential
agents menu these are two very different
approaches for building multi-agent flows
with multi-agents we can use a supervisor
agent that will
automatically delegate the work between
a different worker agents whereas with
sequential agents we have way more
control over the flow of
the logic in this project we'll create a
multi-agent team using a
supervisor agent which will delegate
the work between different worker agents
and more specifically we'll build a
software development
team that contains three worker agents a
software developer a code
reviewer and a document writer
these agents are a lot of fun to build
let's start by giving our flow a name
like software development
team then let's start by adding our
supervisor node so under multi-agents
let's add the supervisor
node let's go ahead and design a chat
model to this agent so on the
chat models i'm going to add
the chat openai node and for multi-agent
flows i highly recommend
using an intelligent model
like gpt40 so i'll select my credentials
then let's select gpt40
let's change the temperature
to something like 0.5 now that we have
our supervisor node we
need to start adding worker
nodes so under add nodes let's go back to
multi-agent and let's add a
worker node so i like to add
these worker nodes just below the
supervisor node and what we need to do is
attach our supervisor
to the input on our worker node now let's
have a look at this worker
first i'll give my worker a
name this will be our software developer
so let's enter something
like software developer and for
the worker prompt we can specify the role
and tasks of this worker so
let's enter something like
role and also you are an experienced
developer with experience
in react typescript nodejs
shat cn tailwind and other web
technologies then for the tasks we can
enter something like write
clean and well commented code make
changes to the code based on the feedback
from the code reviewer
as we will add the code reviewer as a
team member in a second this should be
good enough let's save
this and before we add the second worker
i do want to mention that
you can assign tools to the
worker agent as we did with the research
agent earlier in this
tutorial and we can also assign
a chat model to this node and if we don't
assign a chat model this node
will simply inherit the same
model that be assigned to the supervisor
node but sometimes it might
make sense to assign a different
model based on the worker's function
certain workers might not
need an expensive model to
be assigned to it and for software
developer worker it might
make sense to assign a different
model which is better at writing code
let's actually save this
flow and let's test it and
let's expand this and let's say build a
to-do list app first we
can see the message from the
supervisor and the supervisor is now
calling the software developer and if you
scroll up we can see
the response from the software developer
showing how to set up this
project how to install all the
dependencies and here we have all the
code for the project so if
we wanted to we could simply
copy this code and paste it into a code
editor if we keep
scrolling down we can see the final
response from the supervisor saying that
no further action is
needed and therefore the task
is completed great now let's create
another worker agent i'll simply copy
this worker let's attach our
supervisor node to this worker let's
rename this to code reviewer in the
worker prompt let's actually
replace the role and the tasks the role
will be you are
responsible for reviewing the code
as written by the software developer and
in tasks we can say ensure
that the code is of a high
standard and well commented recommend
changes and improvements to the code or
pass the process on to
the document writer if the code is of
acceptable quality let's save this and
let's also create our
document writer so let's attach a
supervisor to this worker
node let's change the name to
document writer and for the prompt we'll
replace this role and we'll
replace the tasks for the role
we'll say you are responsible for writing
the user manual for the
code solution as written by
the software developer and for the tasks
let's simply say write
the manual in markdown and
include things like the setup
instructions document the features and
troubleshooting tips
let's save this and let's test our team
let's save this flow then
i'm going to clear the chat
and let's ask it again build a to-do list
app now we can see the
supervisor is running and the
supervisor correctly identified that the
software developer should
be called first now that the
software developer is done the code
reviewer is being triggered
and it seems like the code
reviewer was indeed happy with the
results and therefore the
document writer is being triggered
and finally we get the user manual for
our to-do list app and as a
bonus tip there's actually a
super easy way to get flow wise to
generate all of these worker
prompts for you simply go back
to the dashboard go to marketplace then
under type search for
agent flow then click on prompt
engineering team and now we can click on
use template we can give
this a name like prompt
template team save this if you do get
this little warning messages
simply click on this button to
update all the nodes to the latest
version now let's select our
credentials if you don't want
to use chat openai you can definitely
swap it out for your provider
and if we have a look at this
flow it uses a supervisor node to
delegate the tasks between
two worker nodes and these two
workers are responsible for generating
all the system prompts for our own
workflows let me show
you how this works let's say i want to
build a software
developing team with three workers
software developer then code reviewer and
lastly document writer
now we can press enter
and this team will generate all the
system prompts for us so let's have a
look at this result when
we scroll up we can see agent one with
the name software developer
and here is the full system
prompt now we can simply copy this prompt
and paste it into our
multi-agent solution the same
goes for agent two and we also have the
system prompt for agent
three this could save you a lot
of time in coming up with creative system
prompts with multi-agents
we were able to assign a
supervisor node and this supervisor was
able to intelligently
delegated tasks between our
different worker agents one thing to keep
in mind with this approach
is that we are relying on the
supervisor to make the right decisions we
could try to force the
sequence of events by changing
the system prompt in the supervisor node
but if we really wanted
fine-tune control we could instead
use sequential agents let's see how that
works let's go back to the
dashboard make sure that you
are on agent flows then click on add new
and for this project we'll create a
content creator agent
this agent will be able to go online and
retrieve some up-to-date
information and then write an
article or a blog post or an x post or
whatever we want however it
doesn't end there after this
agent has written the post we want a
reviewer to review that post
and suggest additional changes
and we wanted review process to run about
three times this will
greatly improve the final output
let's start by saving our flow and let's
call this content
creation team and let's save this
we can create sequential agents by going
to add nodes then we can
scroll past multi-agents
and instead we will use the nodes in the
sequential agents
menu i do want to mention
that sequential agents are incredibly
powerful and it's pretty
much a topic all by itself so
this project will pretty much just dip
our toes in how sequential
agents work but if you want to
learn more about building advanced
applications with sequential agents then
definitely check out
the dedicated videos that i have on my
channel on this topic right
so sequential agents require a
starting node and an end node so let's
add our start node and
let's also go ahead and add the
end node so let's scroll down to
sequential agents and let's add this end
node this all makes sense
so far right we need to start our flow
somehow and end our flow
somehow for the start node we
have to specify a chat model so let's go
to add nodes let's go to
chat models and i'll add this
chat openai node let's attach it to the
start node let's select
our credentials let's select
a model name i'll use gpt40 and i do want
this agent to be
creative so i'll just leave the
temperature on 0.9 let's also assign
agent memory as with the previous videos
on agents we can use
memory to have a conversation with our
agent this means that after
our agent has generated the
article we can give it follow-up
instructions to make certain changes to
the article so to assign
agent memory let's simply go to this
memory menu and let's select the sql
light agent memory node
and let's attach this to our starting
node as well we can also
assign state to this flow we
won't have a look at state in this video
as i do have other videos that cover
state in great detail
but all the state node allows us to do is
to set certain values in fact let's
quickly add this state
node just to demonstrate this in the
state node we can set values and these
are effectively global
variables that are shared between all the
nodes within this flow so
we could as an example set
something like name and for the operation
let's select replace and
by default the name could be
an initial value and during the execution
of this flow we might
collect the user's name and then
change the value in this global state and
that means that all the
nodes within this flow will
have access to this name property by
default the conversation history is
stored within a variable
in state called messages with an
operation of append so initially we won't
have any values within
our conversation history but as this flow
runs and as we send
messages to this flow all those
messages will be appended to this
messages variable but flow wise we'll add
this for us so we don't
have to explicitly add that messages
value to state right but
again if you are interested in
learning more about using state then
definitely check out my dedicated videos
on sequential agents
now let's get back to our agent flow
let's add an agent that will be
responsible for going online
to perform some research for us and then
write a blog article so
let's go to add nodes then under
sequential agents let's add the agent
node let's attach the start node to our
agent node and let's
attach our agent node to the end node
super simple we can assign tools and
since we want our agent to
be able to go online let's actually
assign the SERP API tool which we already
set up in one of the
previous projects so let's go all the way
down to tools and let's add
the SERP API tool and let's
connect it to our agent let's also select
our SERP API credentials
great now let's give our agent
a name i'll call this writer i do
recommend using lowercase
characters without any spaces
if you do want to add a space then rather
use an underscore between the words
instead now let's set
a system prompt for our author i'll
simply replace this with
generate the best blog post
possible for the user's request use the
search tool to perform
research if the user provides
critique respond with a revised version
of your previous attempts
let's save this prompt and let's
have a look at the other properties on
this node we can introduce
human in the loop by enabling
require approval this means that before
this agent attempts to
call a tool it will first ask
you if it's allowed to proceed and you
can then approve or decline
that request if you do enable
require approval you can then click on
additional parameters and
then you can change the approval
prompt as well as the text for the
buttons that will be displayed to approve
or reject the request
but i think this is good enough for now
let's save this flow and
in the chat window let's say
write the blog post on openai-03 and
after a few seconds we get
our article back and we can see
that the search tool was indeed used and
we get this article back on
the openai-03 model which was
recently announced because we attached
memory to this agent we are
able to ask follow-up questions
or make changes to this article for
instance let's say place more focus on
the negative impact of
03 on the environment and human job
security and our agents
should now use the article that
it's written and just slightly change it
to place the focus on these
different aspects so if we go
up to our article we can now see that the
article is definitely way
more focused on the environmental
impact and things like costs and carbon
footprint cool we can
greatly improve the quality of our
article by assigning another large
language model to review
the article and to request
additional changes for this application i
actually want that review process to
happen three times so
it will basically run in a loop and after
the third attempt we will
receive the final article
so instead of jumping directly to the end
node we want to
conditionally call the article reviewer
and after the third attempt we will call
this end node so in order to
conditionally call nodes
we can go to add nodes then under
sequential agents let's add this
condition node let's attach
our agent to this condition node we can
give our condition node any name this
really doesn't matter
i'll just call this if less than three
times like so and we can
now set up our conditions by
clicking on this condition button let's
click on add item and under
the variable we can access all
sorts of variables and if we were using
state we could use the
values in the state object but as
i mentioned earlier the messages so the
conversation history is automatically
added to state by flowwise
so we are able to access the conversation
history in this instance we
actually want to access the
messages dot length so i'll simply select
that then we can say if the
amount of messages is less
or equal to six messages then we want to
call the review path so just
explain this value the output
from the writer node so the post or the
article will count as one
message then our reviewer will
provide feedback and that will count as a
second message our writer
will then make changes to the
article based on the feedback from the
reviewer which will count
as the third message and that
will then go back for review and that
will count as a fourth message of course
the writer will then
make additional changes which will be the
fifth message and then our
reviewer will perform a final
review counting as a sixth message then
our writer will make the final changes
and that means we're
now on seven messages and that will end
our flow let's save this
condition and now we get this end
output so let's actually attach that to
our end node over here and we
also have this review output
so now we can use this to call another
agent or a large language
model to review this article
let's go to add nodes under sequential
agents we could use an agent
node but since we don't have
to call tools we can actually just simply
use a large language model so let's
attach this LLM node
let's attach this review output to our
LLM node let's give this
node a name like reviewer under
additional parameters we can set the
system prompt which we can set as you are
an editorial reviewer
grading a blog post submission generate
critique and
recommendations for the user submission
provide detailed recommendations
including requests for
length depth stall etc let's save
this it's close to spot and this node
will generate a review of
the article written by the
reviewer now we somehow need to loop back
to the writer node so that
the writer can include all of
these changes so how do we loop back to a
different node that's super
easy let's go to add nodes under
sequential agents let's add the loop node
and we can now attach our
LLM to the loop node and this
will ask us which node to loop back to
all we have to do is copy the
name of the agent that we want
to loop back to and paste it into this
field and i just noticed
that i actually made this an
uppercase R and i do recommend using
lowercase letters instead and
this should be it let's test
this flow by saving it then in the chat
window let's ask it again
write an article on the new
openai-03 model and we keep receiving the
new articles with the
reviews and this is running in
a loop all right execution just completed
and if we scroll up we can see the
initial article from
the writer then we can see that our
condition node was called which decided
to go to the reviewer
output this is the feedback from the
reviewer with its
recommendations which then loop back to
the writer node which then made changes
to the article based on that
feedback we then called the
condition node again the writer then made
additional changes and for
the final time we called our
reviewer again with additional feedback
which then led to this
final article being written
and now we get the final output what's
really cool about this is
we can see all the tool calls
for each of those loop iterations and in
my experience this final
result is way better than
the initial output from the model so as i
mentioned sequential
agents are really powerful
for building these types of workflows so
definitely check out my
other videos on sequential agents
where we build incredibly complex
self-correcting rag solutions using
sequential agents welcome to
the final video in this flow wise
masterclass i do want to congratulate you
on making it this far
we've definitely learned a lot we've
built several different chat flows and
we've also learned how to
build complex agent flows using flow wise
now for this final project
i am going to switch over
to a cloud instance or flow wise because
in this project we'll
integrate one of these flows with
telegram that way we can access our
agents from anywhere in the
world using our phones now
hopefully it does make sense that
telegram or whatsapp would not
be able to access a chat flow
running on your local machine for this
demo i will be using our
research agent and because i've
created this locally i am going to export
this flow so i'll export it
to my machine and now i'll
log into my cloud instance and as a
reminder you can sign up for the flow
wise cloud instance by
using my affiliate link in the
description of this video and you will
get access to a 14 day trial
without needing to provide your credit
card details so from here i'll go to chat
flows let's create a
new chat flow let's click on settings and
load chat flow and then
let's save this and let's call
this research agent let's select our SERP
API credentials i'm
actually going to delete this
custom tool as well as the calculator so
we only have web search
available then for the openai node
i'll select my credentials and let's save
this flow i'm just going to
test it in the chat by saying
hey let's ask something like what is the
current weather in cape
down and i suspect this didn't
work because my SERP API credentials are
not correct so i'm going
to sign into SERP API.com
i'll grab my API key and i'm simply going
to click on edit and paste
in that key i'm going to save
this and in the chat let's ask it again
what is the current weather
in cape town and this time it
did use the search tool now that we have
a research agent working we
can add it to telegram it's
important to know that flowwise is
focused on building AI
applications and the way you can
interact with flowwise from outside of
the platform is to call their API
endpoints flowwise does not
provide out-of-the-box integration with
platforms like telegram or whatsapp
therefore you still need
to add some sort of integration tool into
the mix like make.com,
zapier or n8n i will be using n8n
in this tutorial and i actually have a
lot of n8n related tutorials on my
channel as well so if
you want to follow along with what i'm
doing in this video then
click on the n8n link in my
description and sign up for your free
trial alternatively you
can use make.com which is
free to use and again if you want to
support my channel then
use my affiliate link in the
description of this video and although
i'll be using n8n in this tutorial
make.com is very similar
and you'll be able to follow along after
signing into n8n you will
be provided with a dashboard
let's create a new workflow let's rename
this i'll just simply call
this flowwise agent tutorial
and let's click on add first step then
let's add telegram like so and for the
trigger let's select
on message so whenever we receive a new
message from telegram that
will trigger this workflow
we don't have to change anything on this
screen so let's go back to
the canvas then let's add a
new action and let's search for HTTP
request now back in flowwise
we can click on API endpoint
then let's click on curl let's copy this
url and let's paste it
into url let's also change the
method from get to post then let's enable
send body and we'll leave
the content type as json
and for the body parameters we need to
pass in a property called question so
i'll just paste it in
there and for the value i'll just test
this out by saying hello
then let's go back to the canvas
and after HTTP request let's click on
this final action let's search for
telegram and then let's
select send a text message now let's set
all of this up let's open
up the telegram trigger and
under credentials let's click on create
new credential here we
have to provide an access
token which we need to get from telegram
itself thankfully n8n is
very well documented we can
simply click on open docs and then follow
those instructions the
first thing we need to do is to
start a chat with bot father so let's
click on this link you do
need to sign into telegram if
you haven't done so already and then
let's click on open in web then let's
click on start and in
this list of commands let's click on new
bot now we have to give
our body name and this can be
anything i'll just call this one flow
wise research and now we have
to enter a unique username and
this name needs to end with the word bot
so let's just enter
something like flow wise research
but great now we can copy our token and
add it to telegram i'm also going to
rename this connection
and i'll just call this flow wise
tutorial let's save this and if
everything was done correctly
you should see this green connection
message let's go back to
the canvas let's also set that
connection in this send message node so
i'll change it to this
flow wise tutorial connection
let's go back to the canvas let's test
this workflow i'm
actually just going to disconnect
this final connection as this is giving
us errors at the moment let's click on
run test flow in fact
it seems that this will keep giving us
issues so i'm actually just going to
delete this node for
now let's click on test workflow again
and now it's waiting for a
message from our telegram bot
so back in telegram we can now click on
this bot to access it
let's start the conversation
and now we can see that n8n was indeed
triggered let's run this
again and i'm just going to send
the message like hello so going back to
n8n if we double click on this trigger
node on the right hand
side we can see the output of this node
it changes to the schema view
and in this view we can see the
name of the person who sent the message
and at the very bottom we
can indeed see the message text
so what we can do now is on this http
request node instead of
hard coding the value as hello
we can instead change this to schema mode
and then grab the text that we received
from telegram itself
i'm going to test this node by itself and
this actually made a call
to flowwise and from our
flowwise agent we received this text
hello how can i assist you i do want to
add one more parameter
to the body and that is the chat id if we
call flowwise without
providing a chat id then a new
chat id will be generated for each
interaction this is not ideal
if we want to use chat memory
so this means the agent won't be able to
recall our previous
conversations so what we can do is
pause in the chat id that we received
from telegram and now our
agent should be able to recall
information for example let's say my name
is leon let's run this okay
it's saying hello leon and now
let's ask what is my name let's run this
and it was able to recall
that our name is leon if we go
back to flowwise we can go to settings
view messages and we can
see that conversation with
an id of 5784 and if we go back to
telegram this is indeed the 5784 number
that we received from
telegram and of course we can see our
conversation history great now finally
let's send the response
back to telegram by adding in that
telegram node and more
specifically the send a text message
action let's select our credentials and
for the chat id we do want
to use the chat id node that
we received from the telegram node so
this guy over here and let's
grab the chat id and finally
for the text we can grab the text from
the flowwise api great
let's run this and now back in
telegram we can receive that response
coming through but we
also get this additional text
which we don't want so in order to remove
that click on add fields
append n8n attribution and
disable this it stays a step again and
now we simply get our ai's
response now all that's left
to do is to save this flow and activate
it we can click on got it and
now we can have conversations
with our agent so let's say hey what is
openai03 and it says your
name is leon which is definitely
not correct and that is because in the
http request node i still
have this hard coded value
so let's make sure to use the message
that we received from
telegram cool let's save this and
back in telegram let's start this again
with a let's ask it what
is openai03 and great that's
working of course you can attach any of
your flows to telegram now including
multi-agent flows and
sequential flows and that takes us to the
end of this course if you
enjoyed it then please hit the
like button subscribe to my channel and
share this video i've got
plenty of other content on
flowwise especially on multi-agents and
sequential agents so definitely check out
those videos as well
thank you for your time i'll see you in
the next one bye bye
